"use client"

import React,{useState} from 'react'
import Image from 'next/image'
import { AiOutlineEdit, AiOutlineDelete,AiFillEdit,AiFillDelete } from "react-icons/ai"
import { useRouter } from 'next/navigation'
import { useAuth } from '../context/AuthProvider'
import { revalidateURL } from '../actions'
const ShowBlog = ({blog}) => {
  const {auth} = useAuth()
  const [subError, setSubError] = useState({ error: null })
  const deleteBlog = async()=>{
    try {
      const response = await fetch(`http://localhost:8000/api/v1/blogs/${blog._id}`, {
          method: 'DELETE',
          headers: {
              'Authorization': `Bearer ${auth.token}`,
              "Content-Type":'application/json'
          },
      })
      const parsedResponse = await response.json()
      console.log(parsedResponse)
      if (!response.ok) {
          console.log(parsedResponse);
          setSubError({ error: parsedResponse.msg })
          return
      }
      await revalidateURL('/')
      router.push(`/`)
      
  } catch (error) {
      console.log(error)
      setSubError({ error: 'Something went wrong' })
  }
  }
  console.log(blog)
    const router = useRouter()
    return (
        <section className='w-screen mx-auto text-black px-10 '>
            <h1 className='text-4xl text-black text-center font-bold my-8'>{blog.title}</h1>
            <Image className='w-[600px] h-[400px] mx-auto mb-8' height={400} width={600} src={blog.coverImg} />
           
           {(auth.token  )&& <div className='flex items-center   w-full text-center '>
                <p className='text-xl font-bold'>{`Posted By:  ${blog.author.username}`}</p>
                <span onClick={()=>router.push(`/blogs/${blog._id}/edit`)} className='cursor-pointer hover:underline underline-offset-2 hover:font-bold hover:opacity-100 flex items-center w-28   justify-evenly pl-2'>
                    <>
                    <p className='text-lg'><AiFillEdit /></p>
                      <p  className='text-lg'>Edit</p>
                    </>
                  </span>
                  <span onClick={deleteBlog} className='cursor-pointer hover:underline underline-offset-2 text-lg hover:font-bold hover:opacity-100 flex items-center w-28   justify-evenly pl-2'>
                    <>
                      <p className='text-lg p-0'><AiFillDelete /></p>
                      <p  className='text-lg'>Delete</p>
                    </>
                  </span>

            </div>}
          
            <p className='text-lg mt-4 break-words '>{blog.description}</p>
        </section>
    )
}

export default ShowBlog