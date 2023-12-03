'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from "@hookform/error-message"
import { useAuth } from '../context/AuthProvider'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

const Login = ({ registered }) => {
    const router = useRouter()
    const pathname = usePathname()
    const [subError,setSubError] = useState({error:null})
    const {setAuth,auth,redirect,setRedirect} = useAuth()
    const { register, formState: { errors, touchedFields },handleSubmit } = useForm({
        mode: 'onBlur' || 'onSubmit'
    })
    if(registered) setRedirect(false)
    const onSubmit = async(data,event)=>{
        
        try {
            const response = await fetch('http://localhost:8000/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    
                },
                body: JSON.stringify(data),
                
            })
            const parsedResponse= await response.json()
            if (!response.ok) {
                console.log(parsedResponse.msg);   
                setSubError({error:parsedResponse.msg})
                return 
            }
            console.log(parsedResponse.token)
            setAuth({
                username:parsedResponse.username,
                token:parsedResponse.token,
                isAuthenticated:true,
                profile_img:parsedResponse.profile_img
            })
            localStorage.setItem('auth',JSON.stringify(
                {
                    username:parsedResponse.username,
                    token:parsedResponse.token,
                    isAuthenticated:true,
                    profile_img:parsedResponse.profile_img
                }
            ))
            if(redirect)
                router.back()
            else 
                router.push('/')
            setRedirect(false)
        } catch (error) {
            setSubError({error:'Something went wrong'})
        }
    }
 
    return <>
        {registered && (
            <div role="alert" className="alert alert-success w-1/4 mx-auto my-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Registered Successfully!</span>
            </div>
        )}
        {redirect && (<div role="alert" className="alert alert-error  w-1/4 mx-auto my-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Please login to continue</span>
            </div>)}

        <h1 className="text-center  font-bold text-4xl my-5">Login</h1>

        <section className=" w-1/4 mx-auto max-h-fit" >
            {subError.error && (<div role="alert" className="alert alert-error mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{subError.error}</span>
            </div>)}
            <form className="w-full" action='POST' onSubmit={handleSubmit(onSubmit)}>
                <div className=" mb-4">
                    <label htmlFor="username" className=" text-sm block mr-7 mb-2 w-full">Username</label>
                    <input type="text" id="username" name="username" className={` input input-bordered 
                        ${errors.username && 'input-error'}  ${(touchedFields.username && !errors.username) && 'input-success'} w-full `}    {...register('username', {
                        required: 'Username is required',
                    })}

                    />
                    <ErrorMessage errors={errors} name="username" render={({ message }) => <p className='text-red-600'>{message}</p>} />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="text-sm block mr-7 mb-2 w-full">Password</label>
                    <input type="password" id="password" name="password" className={` input input-bordered 
                        ${errors.password && 'input-error'}  ${(touchedFields.password && !errors.password) && 'input-success'} w-full `} {...register('password', {
                        required: 'Password is required.',
                    })}

                    />
                    <ErrorMessage errors={errors} name="password" render={({ message }) => <p className='text-red-600'>{message}</p>} />
                </div>

                <div className="w-full text-center my-6">

                    <button type="submit" className=" text-md  border-[1px] border-[rgba(27, 31, 35, .15)]  hover:bg-[#2c974b] rounded-lg  bg-[#2ea44f] mx-3 text-[#ffffff] px-4 py-2 w-24">Login</button>
                </div>
            </form>
            <p className='text-center text-sm text-black'>Dont have an account? <Link className='text-[#0000EE] hover:underline' href="/auth/register">Register</Link></p>
        </section>
    </>
}

export default Login