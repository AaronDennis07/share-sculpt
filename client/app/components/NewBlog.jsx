"use client"

import React, { useState } from 'react'

import {  redirect, useRouter } from "next/navigation";
import { useForm } from 'react-hook-form'
import { ErrorMessage } from "@hookform/error-message"
import { useAuth } from '../context/AuthProvider';
import { revalidatePath } from 'next/cache';
import { revalidateURL } from '../actions';

const NewBlog = () => {
    const router = useRouter()
    const { auth } = useAuth()
  
    console.log(auth.token)
    const { register, handleSubmit, formState: { errors, touchedFields,isSubmitting } } = useForm({
        mode: 'onBlur' || 'onSubmit'
    })
    const [subError, setSubError] = useState({ error: null })
    const onSubmit = async (data, event) => {
       
        const coverImg = data.cover[0]
        const formData = new FormData()
        formData.append('title', data.title)
        formData.append('cover_img', coverImg)
        formData.append('description', data.description)
        formData.append('tag', data.tag)
        try {
            const response = await fetch(`http://localhost:8000/api/v1/blogs`, {
                method: 'POST',
            
                headers: {
                    'Authorization': `Bearer ${auth.token}`,
                    
                },
                body: formData,

            })
            const parsedResponse = await response.json()
            console.log(parsedResponse)
            if (!response.ok) {
                console.log(parsedResponse);
                setSubError({ error: parsedResponse.msg })
                return
            }

            await revalidateURL('/')
            router.push(`/blogs/${parsedResponse._id}/show`)
          

        } catch (error) {
            
            console.log(error)
            setSubError({ error: 'Something went wrong' })
        }
    }

    return (
        <>
            <h1 className="text-center  font-bold text-4xl my-5">New blog</h1>

            <section className=" w-1/2 mx-auto" >
                {subError.error && (<div role="alert" className="alert alert-error mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{subError.error}</span>
                </div>)}
                <form method="POST" onSubmit={handleSubmit(onSubmit)} className="w-full    min-h-screen ">
                    <div className=" mb-4">
                        <label htmlFor="title" className=" text-lg block mr-7 mb-2 w-full">Title</label>
                        <input type="text" className={` input input-bordered 
                        ${errors.title && 'input-error'}  ${(touchedFields.title && !errors.title) && 'input-success'} w-full `} name="title" id="title"  {...register('title', {
                            required: 'Title is required',
                        })}

                        />
                        <ErrorMessage errors={errors} name="title" render={({ message }) => <p className='text-red-600'>{message}</p>} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="tag" className="text-lg block mr-7 mb-2 w-full">Tag</label>
                        <input type="text" className={` input input-bordered 
                        ${errors.tag && 'input-error'}  ${(touchedFields.tag && !errors.tag) && 'input-success'} w-full `} name="tag" id="tag"  {...register('tag', {
                            required: 'Tag is required',
                        })}

                        />
                        <ErrorMessage errors={errors} name="tag" render={({ message }) => <p className='text-red-600'>{message}</p>} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="cover" className="text-lg block mr-7 mb-2 w-full">Cover Image</label>
                        <input type="file" className={` file-input file-input-bordered 
                        ${errors.cover && 'file-input-error'}  ${(touchedFields.cover && !errors.cover) && 'file-input-success'} w-full `} name="cover" id="cover"  {...register('cover', {
                            required: 'cover is required',

                        })}

                        />
                        <ErrorMessage errors={errors} name="cover" render={({ message }) => <p className='text-red-600'>Cover image is required</p>} />          </div>
                    <div className="mb-4">
                        <label htmlFor="title" className="text-lg block mr-7 mb-2 w-full">Description</label>
                        <textarea className={`textarea textarea-bordered w-full h-56  ${errors.description && 'textarea-error'}  ${(touchedFields.description && !errors.description) && 'input-success'} w-full `} name="description" id="description"  {...register('description', {
                            required: 'Description is required',
                            minLength: {
                                value: 200,
                                message: 'Description must contain atleast 200 characters'
                            }
                        })} ></textarea>
                        <ErrorMessage errors={errors} name="description" render={({ message }) => <p className='text-red-600'>{message}</p>} />
                    </div>

                    <div className="w-full text-center my-6">
                        <button onClick={() => router.push('/')} type="button" className=" border-[1px] border-[rgba(27, 31, 35, .15)]  hover:bg-[#bb1a34] rounded-lg  bg-[#e62143] mx-3 text-lg text-[#ffffff] px-4 py-2 w-24">Cancel</button>
                        <button type="submit" className={` text-lg  border-[1px] border-[rgba(27, 31, 35, .15)]  hover:bg-[#2c974b] rounded-lg ${!isSubmitting ? 'bg-[#2ea44f]' : 'bg-slate-500' }  mx-3 text-[#ffffff] px-4 py-2 w-32`}>{isSubmitting ? 'Publishing' :'Publish'}</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default NewBlog

