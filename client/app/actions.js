'use server'
import { notFound, redirect } from 'next/navigation'

import {cookies, headers} from  'next/headers'
export const register = async(prevState, formData)=> {
    const data = Object.fromEntries(formData)
    try {
        const response = await fetch(`http://localhost:8000/api/v1/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify(data),
            
        })
        if (!response.ok) {
            const err= await response.json()
            console.log(err.msg);   
            return { error: err.msg }
        }
   
    } catch (error) {
        console.log(error)
        return { error: 'Something went wrong' }
    }
   
    cookies().set('registered','true',{expires: Date.now()-(60*2*1000)})

    redirect('/auth/login')
}

export const login = async(prevState,formData)=>{
    const data = Object.fromEntries(formData)
    console.log(data)
    try {
        const response = await fetch('http://localhost:8000/api/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify({
                username:data.username,
                password:data.password
            }),
            
        })
        const parsedResponse = await response.json()
        if (!response.ok) {
            console.log(parsedResponse.msg);   
            return { error: parsedResponse.msg }
        }
        
        console.log(parsedResponse);
    } catch (error) {
        console.log(error)
        return { error: 'Something went wrong' }
    }
    
    
}

export const getCookie = (name)=>{
    const cookie = cookies().get(name)
   
    return cookie
}

export const getAllBlogs = async()=>{
    try {
        const response = await fetch(`http://localhost:8000/api/v1/blogs`,{
            cache:'no-cache'
        })
        const parsedResponse = await response.json()
        if (!response.ok) {
            console.log(parsedResponse.msg);   
            return { error: parsedResponse.msg }
        }
        
        console.log(parsedResponse);
        return parsedResponse
    } catch (error) {
        console.log(error)
        return { error: 'Something went wrong' }
    }
}

export const createBlog = async(token)=> async(prevState,formData)=>{
    
    const data = Object.fromEntries(formData)
    console.log(data)
    try {
        const response = await fetch(`${process.env.BLOGS_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data),
            
        })
        const parsedResponse = await response.json()
        if (!response.ok) {
            console.log(parsedResponse.msg);   
            return { error: parsedResponse.msg }
        }
        
        console.log(parsedResponse);
    } catch (error) {
        console.log(error)
        return { error: 'Something went wrong' }
    }
    
    
}

export const test = (token)=>async(prev,formData)=>{
    
    console.log(token)
    console.log(formData)
}

export const getBlogById = async(id)=>{
    
    console.log(id)

    try {
        const response = await fetch(`${process.env.BLOGS_URL}/${id}`,{
            cache:'no-store'
        })
        const parsedResponse = await response.json()
        console.log(parsedResponse)
        if (!response.ok) {
            console.log(parsedResponse.msg);   
            notFound('Blog Not Found')
           // return { error: 'Blog not found '}
        }
        return {blog: parsedResponse.blog}
        
    } catch (error) {
        console.log(error)
        notFound('Blog Not Found')
        //return { error: 'Blog not found' }
    }
    
}

