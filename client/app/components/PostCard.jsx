import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai"
const PostCard = () => {

  const isEditable = true

  return (
    <section>
      <Link href="/posts/213/show" >
        <article className="flex items-center  w-7/12 text-black bg-white hover:bg-gray-300 hover:opacity-50   border-[1px] rounded-xl border-slate-900 p-4 mt-12">
          <div>
            <div id="head" className="flex gap-3">
              <Image className="w-12 h-12 rounded-full" src="/profile.jpg" height={16 * 3} width={16 * 3} alt="user photo" />
              <p className="text-md my-auto">Aaron Dennis</p>
              <p className="text-sm text-slate-500 my-auto">Aug 26 2023</p>
            </div>
            <div id="content" className="mt-4">
              <h2 className="font-bold text-2xl ">Title of the blog</h2>

              <p className="font-serif  text-base  mt-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eaque molestiae commodi! Cumque necessitatibus cupiditate enim  molestiae commodi! enimqui...
              </p>

            </div>
            <div className='flex items-center'>

              <p className="pl-2 text-xs font-medium mt-10">Backend Development</p>
              {isEditable &&
                <>
                  <Link href="/posts/123/edit" className='mt-10 hover:font-bold hover:opacity-100 flex items-center w-20   justify-evenly pl-4'>
                    <AiOutlineEdit />
                    <p className='text-sm'>Edit</p>
                  </Link>
                  <Link href="/posts/123/edit" className='mt-10 hover:font-bold flex items-center w-20 justify-evenly '>
                    <AiOutlineDelete />
                    <p className='text-sm'>Delete</p>
                  </Link>
                </>
              }
            </div>
          </div>
          <Image className="w-36 h-36 " src='/cover.jpeg' height={150} width={150} />
        </article>
      </Link>
    </section>
  )
}

export default PostCard