"use client"

import React, { useEffect, useRef, useState } from 'react'
import PostCards from './PostCards'
import { useRouter } from 'next/navigation'
import { useAuth } from '../context/AuthProvider'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { document } from 'postcss'
import { revalidateURL } from '../actions'



const Profile = () => {
    const [data, setData] = useState(null)
    const [uploading,setUploading] = useState(false)
    const router = useRouter()
    const { auth, setAuth } = useAuth()
    console.log(auth)
    const { register, handleSubmit, formState: { errors, touchedFields } } = useForm({
        mode: 'onBlur' || 'onSubmit'
    })
    const ref = useRef()
    const [subError, setSubError] = useState({ error: null })
    const [success,setSuccess] = useState(false)
    useEffect(() => {
        getMe()
    }, [auth.token])
    const getMe = async () => {
        
        try {
            const response = await fetch(`http://localhost:8000/api/v1/users/getMe`, {
                cache: 'no-store',
                headers: {
                    'Authorization': `Bearer ${auth.token}`,

                }
            })
            const parsedResponse = await response.json()
            console.log(parsedResponse)
            if (!response.ok) {
                router.push('/auth/login')
                // return { error: 'Blog not found '}
            }
            setData(parsedResponse.user)
            
            console.log(data)
        } catch (error) {
            console.log(error)
            router.push('/auth/login')
        }
       
    }
    const onSubmit = async (data) => {
        setUploading(true)
        console.log(data)

        if (data) {
            const formData = new FormData()

            formData.append('profile_img', data)
            console.log(data)
            try {
                const response = await fetch(`http://localhost:8000/api/v1/users/upload`, {
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
                localStorage.setItem('auth', JSON.stringify({
                    ...auth,
                    profile_img: parsedResponse.url
                }))
                setAuth((prev) => ({
                    ...prev,
                    profile_img: parsedResponse.url
                }))
                const auttget = auth
                console.log(auttget)
                console.log("success")
                setSuccess(true)
                await revalidateURL('/users/me')
            } catch (error) {
                console.log(error)
                setSubError({ error: 'Something went wrong' })
            }
            setUploading(false)
        }
    }


    return (
        data &&
        (<article>
                {subError.error && (<div role="alert" className="alert alert-error w-[20%] text-center mx-auto mt-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6 " fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{subError.error}</span>
                </div>)}
               {success && (<div className="alert alert-success w-[20%] text-center mx-auto mt-6">
                    <span>Profile picture updated!!</span>
                </div>)}
            <section className='w-[80%] mx-auto flex '>
            
                <div className='mr-36'>
                    <div className='my-6 '>
                        <h1 className='text-4xl  font-medium text-black'>{data.username}</h1>
                    </div>
                    <div>
                        <p className='text-2xl'>Published Blogs</p>
                        <PostCards blogs={data.blogs} />
                    </div>
                </div>
                <div className="mt-24  w-full h-full text-center" >
                    <Image className='rounded-full mx-auto' src={auth.profile_img} height={150} width={150} />
                    <form onSubmit={handleSubmit(onSubmit)}  >
                        <label>
                            <input type="file" className='hidden' name="profile_img" {...register('profile_img', {})} onChange={(e) => { onSubmit(e.target.files[0]) }} />
                            <p className='mt-2 hover:underline cursor-pointer'>{uploading ? 'Uploading...' : 'Edit Profile Photo'}</p>
                        </label>
                        <button type='submit' ref={ref} className='hidden' ></button>
                    </form>
                    <p className='text-xl capitalize mt-2'>{data.username}</p>
                </div>
            </section>
        </article>
        )

    )
}

export default Profile