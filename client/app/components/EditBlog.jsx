"use client"

import React from 'react'

import {  useRouter } from "next/navigation";
import { useForm } from 'react-hook-form'
import { ErrorMessage } from "@hookform/error-message"
const EditBlog = () => {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors,touchedFields } } = useForm({
        mode:'onBlur'|| 'onSubmit'
    })
  return (
    <>
        <h1 className="text-center  font-bold text-4xl my-5">Edit Blog</h1>
        <section className=" w-1/2 mx-auto" >
            <form className="w-full    min-h-screen ">
                <div className=" mb-4">
                    <label htmlFor="title" className=" text-lg block mr-7 mb-2 w-full">Title</label>
                    <input type="text" className={` input input-bordered 
                        ${errors.title && 'input-error'}  ${(touchedFields.title && !errors.title)&& 'input-success'} w-full `} name="title" id="title"  {...register('title',{
                            required: 'Title is required',
                        })}
                        
                        /> 
                         <ErrorMessage  errors={errors} name="title" render={({message})=><p className='text-red-600'>{message}</p>} />
                </div>
                <div className="mb-4">
                    <label htmlFor="tag" className="text-lg block mr-7 mb-2 w-full">Tag</label>
                    <input type="text" className={` input input-bordered 
                        ${errors.tag && 'input-error'}  ${(touchedFields.tag && !errors.tag)&& 'input-success'} w-full `} name="tag" id="tag"  {...register('tag',{
                            required: 'Tag is required',
                        })}
                        
                        /> 
                         <ErrorMessage  errors={errors} name="tag" render={({message})=><p className='text-red-600'>{message}</p>} />
                </div>
                <div className="mb-4">
                    <label htmlFor="cover" className="text-lg block mr-7 mb-2 w-full">Cover Image</label>
                    <input type="file" className={` file-input file-input-bordered 
                        ${errors.cover && 'file-input-error'}  ${(touchedFields.cover && !errors.cover)&& 'file-input-success'} w-full `} name="cover" id="cover"  {...register('cover',{
                            required: 'cover is required',
                           
                        })}
                        
                        /> 
                         <ErrorMessage  errors={errors} name="cover" render={({message})=><p className='text-red-600'>Cover image is required</p>} />          </div>
                <div className="mb-4">
                    <label htmlFor="title" className="text-lg block mr-7 mb-2 w-full">Description</label>
                    <textarea className={`textarea textarea-bordered w-full h-56  ${errors.description && 'textarea-error'}  ${(touchedFields.description && !errors.description)&& 'textarea-success'} w-full `} name="description" id="description"  {...register('description',{
                            required: 'Description is required',
                            minLength:{
                                value:50,
                                message:'Description must contain atleast 50 characters'
                            }
                        })} ></textarea>
                         <ErrorMessage  errors={errors} name="description" render={({message})=><p className='text-red-600'>{message}</p>} />   
                </div>
                
                <div className="w-full text-center my-6">
                <button onClick={()=>router.push('/')} type="button" className=" border-[1px] border-[rgba(27, 31, 35, .15)]  hover:bg-[#bb1a34] rounded-lg  bg-[#e62143] mx-3 text-lg text-[#ffffff] px-4 py-2 w-24">Cancel</button>
                <button type="submit"  className=" text-lg  border-[1px] border-[rgba(27, 31, 35, .15)]  hover:bg-[#2c974b] rounded-lg  bg-[#2ea44f] mx-3 text-[#ffffff] px-4 py-2 w-24">Save</button>
                </div>
            </form>
        </section>
    </>
  )
}

export default EditBlog