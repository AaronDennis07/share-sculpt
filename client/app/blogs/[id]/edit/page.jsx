import EditBlog from '@/app/components/EditBlog'
import React from 'react'
import { getBlogById } from '@/app/actions'
import RequireAuth from '@/app/components/RequireAuth'
export default async function Page({ params: { id } }) {
    const { blog } = await getBlogById(id)
    return (
        <RequireAuth>
            <EditBlog blog={blog} />
        </RequireAuth>)

}

