'use client'
import React, { useState } from 'react'
import Image from "next/image"
import Link from 'next/link'
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai"
import { useRouter } from 'next/navigation'

const PostCard = ({ coverImg, description, author, title, tag,id,profile_img }) => {
  const router = useRouter()
  const [isEditable, setIsEditable] = useState(true)
  return (
    <section>
      <Link href={`/blogs/${id}/show`} >
        <article className="grid grid-cols-4  w-7/12 text-black bg-white hover:bg-gray-300 hover:opacity-50   border-[1px] rounded-xl border-slate-900 p-4 mt-12">
          <div className='col-span-3'>
            <div id="head" className="flex gap-3">
              <Image className="w-12 h-12 rounded-full" src={profile_img} height={16 * 3} width={16 * 3} alt="user photo" />
              <p className="text-md my-auto capitalize">{author}</p>
              <p className="text-sm text-slate-500 my-auto">Aug 26 2023</p>
            </div>
            <div id="content" className="mt-4">
              <h2 className="font-bold text-3xl ">{title}</h2>
              <p className="font-serif  text-base  mt-2 w-full pr-4">
              {String(description).slice(0,50)}
              </p>
            </div>
            <p className="pl-2 text-xs font-medium mt-10">{tag}</p>
          </div>
          <Image className="w-36 h-36 col-span-1 my-auto" src={coverImg} height={150} width={150} />
        </article>
      </Link>
    </section>
  )
}

export default PostCard