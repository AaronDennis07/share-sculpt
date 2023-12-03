
import { getBlogById } from '@/app/actions'
import Loading from '@/app/components/Loading'
import ShowBlog from '@/app/components/ShowBlog'
import React, { Suspense } from 'react'


export default async function Page({ params: { id } }) {
    const { blog } = await getBlogById(id)
    return (
        <Suspense fallback={<Loading/>}>
            <ShowBlog blog={blog} />
        </Suspense>
    )

}

