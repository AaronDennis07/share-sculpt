
import { getBlogById } from '@/app/actions'
import ShowBlog from '@/app/components/ShowBlog'
import React from 'react'

export default async function Page({params:{id}} ){
    const {blog} = await getBlogById(id)
    return <ShowBlog blog={blog}/>
}

