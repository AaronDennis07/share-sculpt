"use client"
import React from 'react'
import { useAuth } from '../context/AuthProvider'
import { redirect, usePathname, useRouter } from 'next/navigation'

const RequireAuth = ({children}) => {
    const path = usePathname()
    const {auth,setRedirect} = useAuth()
    const router = useRouter()
    console.log(path)
    if(!auth.token){
        setRedirect(true)
        redirect('/auth/login?redirect=true')
    }
    // if(owner !== auth.username){
    //     setRedirect(path)
    //     redirect('/auth/login?redirect=true')
    // }
    return <section>
        {children}
    </section>
}

export default RequireAuth




