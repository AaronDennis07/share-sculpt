"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { ErrorMessage } from "@hookform/error-message"
const Register = () => {
    const { register, handleSubmit, formState: { errors,touchedFields } } = useForm({
        mode:'onBlur'|| 'onSubmit'
    })
    const validateUsername = async(val)=>{
        return val !=='aaron' || 'Username already taken'
    }
    const onSubmit = (data) => console.log(data);
    return (
        <>
            <h1 className="text-center  font-bold text-4xl my-5">Register</h1>
            <section className=" w-1/4 mx-auto max-h-fit" >
                <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                    <div className=" mb-4">
                        <label htmlFor="username" className=" text-sm block mr-7 mb-2 w-full">Username</label>
                        <input type="text" className={` input input-bordered 
                        ${errors.username && 'input-error'}  ${(touchedFields.username && !errors.username)&& 'input-success'} w-full `} name="username" id="username"  {...register('username',{
                            maxLength: {
                                value:20,
                                message:'Username must not exceed 20 characters.'
                            },
                            required: 'Username is required',
                            validate:validateUsername
                            
                        })}
                        
                        /> 
                         <ErrorMessage  errors={errors} name="username" render={({message})=><p className='text-red-600'>{message}</p>} />
                    </div>
                    <div className=" mb-4">
                        <label htmlFor="email" className=" text-sm block mr-7 mb-2 w-full">Email</label>
                        <input type="text"  className={` input input-bordered 
                        ${errors.email && 'input-error'}  ${(touchedFields.email && !errors.email)&& 'input-success'} w-full `} name="email" id="title" {...register('email',{
                            required: 'Email is required.',
                            pattern:{
                                value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                message:'Please enter a valid email address.'
                            },
                            validate:validateUsername
                        })}
                        
                        /> 
                         <ErrorMessage  errors={errors} name="email" render={({message})=><p className='text-red-600'>{message}</p>} />
                    </div>
                    <div className=" mb-4">
                        <label htmlFor="password" className=" text-sm block mr-7 mb-2 w-full">Password</label>
                        <input type="text" className={` input input-bordered 
                        ${errors.password && 'input-error'}  ${(touchedFields.password && !errors.password)&& 'input-success'} w-full `} name="password" id="title" {...register('password',{
                            minLength:{
                                value:8,
                                message:'Password must be at least 8 characters long.'
                            },
                            pattern:{
                                value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                message:'Password should contain a mix of uppercase, lowercase, numbers, and special characters for security.'
                            },
                            required: 'Password is required.',
                          
                        })}
                        
                        /> 
                         <ErrorMessage  errors={errors} name="password" render={({message})=><p className='text-red-600'>{message}</p>} />
                    </div>
                   

                    <div className="w-full text-center my-6">

                        <button type="submit" className=" text-md  border-[1px] border-[rgba(27, 31, 35, .15)]  hover:bg-[#2c974b] rounded-lg  bg-[#2ea44f] mx-3 text-[#ffffff] px-4 py-2 w-24">Register</button>
                    </div>
                </form>
                <p className='text-center text-sm text-black'>Already have an account? <Link className='text-[#0000EE] hover:underline' href="/auth/login">Login</Link></p>
            </section>
        </>
    )
}

export default Register