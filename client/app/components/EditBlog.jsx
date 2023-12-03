"use client"

import React,{useState} from 'react'
import { useAuth } from '../context/AuthProvider';
import {  useRouter } from "next/navigation";
import { useForm } from 'react-hook-form'
import { ErrorMessage } from "@hookform/error-message"
import { revalidatePath, revalidateTag } from 'next/cache';
import { revalidateURL } from '../actions';
const EditBlog = ({blog}) => {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors,touchedFields,isSubmitting } } = useForm({
        mode:'onBlur'|| 'onSubmit'
    })
    const { auth } = useAuth()
    const [subError, setSubError] = useState({ error: null })
    const onSubmit = async (data, event) => {
        console.log(data)
        const formData = new FormData()
        formData.append('title', data.title)
        formData.append('description', data.description)
        formData.append('tag', data.tag)
        try {
            const response = await fetch(`http://localhost:8000/api/v1/blogs/${blog._id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${auth.token}`,
                    "Content-Type":'application/json'
                },
                body: JSON.stringify(Object.fromEntries(formData)),
                cache:'no-store'
            })
            const parsedResponse = await response.json()
            console.log(parsedResponse)
            if (!response.ok) {
                console.log(parsedResponse);
                setSubError({ error: parsedResponse.msg })
                return
            }
            await revalidateURL('/blogs/[id]/show')
            await revalidateURL('/')
            router.push(`/blogs/${blog._id}/show`)
            
        } catch (error) {
            console.log(error)
            setSubError({ error: 'Something went wrong' })
        }
    }


  return (
    <>
        <h1 className="text-center  font-bold text-4xl my-5">Edit Blog</h1>
        <section className=" w-1/2 mx-auto" >
        {subError.error && (<div role="alert" className="alert alert-error mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{subError.error}</span>
                </div>)}
            <form className="w-full    min-h-screen " onSubmit={handleSubmit(onSubmit)}>
                <div className=" mb-4">
                    <label htmlFor="title" className=" text-lg block mr-7 mb-2 w-full">Title</label>
                    <input type="text" className={` input input-bordered 
                        ${errors.title && 'input-error'}  ${(touchedFields.title && !errors.title)&& 'input-success'} w-full `} name="title" id="title"  {...register('title',{
                            required: 'Title is required',
                        })}
                        defaultValue={blog.title}
                        /> 
                         <ErrorMessage  errors={errors} name="title" render={({message})=><p className='text-red-600'>{message}</p>} />
                </div>
                <div className="mb-4">
                    <label htmlFor="tag" className="text-lg block mr-7 mb-2 w-full">Tag</label>
                    <input type="text" className={` input input-bordered 
                        ${errors.tag && 'input-error'}  ${(touchedFields.tag && !errors.tag)&& 'input-success'} w-full `} name="tag" id="tag"  {...register('tag',{
                            required: 'Tag is required',
                        })}
                        defaultValue={blog.tag}
                        /> 
                         <ErrorMessage  errors={errors} name="tag" render={({message})=><p className='text-red-600'>{message}</p>} />
                </div>
               
                 
                <div className="mb-4">
                    <label htmlFor="title" className="text-lg block mr-7 mb-2 w-full">Description</label>
                    <textarea className={`textarea textarea-bordered w-full h-56  ${errors.description && 'textarea-error'}  ${(touchedFields.description && !errors.description)&& 'textarea-success'} w-full `} name="description" id="description"  {...register('description',{
                            required: 'Description is required',
                            minLength:{
                                value:50,
                                message:'Description must contain atleast 50 characters'
                            }
                        })}
                        defaultValue={blog.description}
                        ></textarea>
                         <ErrorMessage  errors={errors} name="description" render={({message})=><p className='text-red-600'>{message}</p>} />   
                </div>
                
                <div className="w-full text-center my-6">
                <button onClick={()=>router.push('/')} type="button" className=" border-[1px] border-[rgba(27, 31, 35, .15)]  hover:bg-[#bb1a34] rounded-lg  bg-[#e62143] mx-3 text-lg text-[#ffffff] px-4 py-2 w-24">Cancel</button>
                <button type="submit"  className={` text-lg  border-[1px] border-[rgba(27, 31, 35, .15)]  hover:bg-[#2c974b] rounded-lg ${!isSubmitting ? 'bg-[#2ea44f]' : 'bg-slate-500' }  mx-3 text-[#ffffff] px-4 py-2 w-28`} >{isSubmitting ? 'Saving' :'Save'}</button>
                </div>
            </form>
        </section>
    </>
  )
}

export default EditBlog