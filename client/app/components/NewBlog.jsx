"use client"

import React from 'react'

import {  useRouter } from "next/navigation";
const NewBlog = () => {
    const router = useRouter()
  return (
    <>
        <h1 className="text-center  font-bold text-4xl my-5">New blog</h1>
        <section className=" w-1/2 mx-auto" >
            <form className="w-full    min-h-screen ">
                <div className=" mb-4">
                    <label htmlFor="title" className=" text-lg block mr-7 mb-2 w-full">Title</label>
                    <input type="text" className=" input input-bordered w-full " name="title" id="title" />
                </div>
                <div className="mb-4">
                    <label htmlFor="title" className="text-lg block mr-7 mb-2 w-full">Tag</label>
                    <input type="text" className="input input-bordered w-full " name="title" id="title" />
                </div>
                <div className="mb-4">
                    <label htmlFor="cover" className="text-lg block mr-7 mb-2 w-full">Cover Image</label>
                    <input type="file" className="file-input file-input-bordered w-full " />                </div>
                <div className="mb-4">
                    <label htmlFor="title" className="text-lg block mr-7 mb-2 w-full">Description</label>
                    <textarea className="textarea textarea-bordered w-full h-56" ></textarea>
                </div>
                
                <div className="w-full text-center my-6">
                <button onClick={()=>router.push('/')} type="button" className=" border-[1px] border-[rgba(27, 31, 35, .15)]  hover:bg-[#bb1a34] rounded-lg  bg-[#e62143] mx-3 text-lg text-[#ffffff] px-4 py-2 w-24">Cancel</button>
                <button type="submit"  className=" text-lg  border-[1px] border-[rgba(27, 31, 35, .15)]  hover:bg-[#2c974b] rounded-lg  bg-[#2ea44f] mx-3 text-[#ffffff] px-4 py-2 w-24">Publish</button>
                </div>
            </form>
        </section>
    </>
  )
}

export default NewBlog