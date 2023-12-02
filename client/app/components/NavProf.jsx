"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaRegPenToSquare } from "react-icons/fa6"
import { BsPerson, BsGear, BsPower } from "react-icons/bs"
import { useAuth } from '../context/AuthProvider'
import { useRouter } from 'next/navigation'

const NavProf = () => {
    const {auth,logout} = useAuth()
    const router = useRouter()
    console.log(auth)
    const handleLogout = ()=>{
      logout()
      router.push('/auth/login')
    }
   return  auth.token ?
        (<div className="w-52 h-full flex items-center   dropdown dropdown-end relative">
          <label tabIndex={0} className="ml-2 btn btn-ghost btn-circle avatar mr-2">
            <div className=" rounded-full">
              <Image src="/profile.jpg" height={45} width={45} />
            </div>
          </label>
          <p className='text-white'>Aaron Dennis</p>
          <ul tabIndex={0} className="shadow-xl  text-slate-500 z-[1] p-2 top-full mt-1 menu menu-sm dropdown-content bg-base-100 rounded-box w-52 mr-4">
          
            <li>
              <Link href="/user/profile" >
                <span className="text-xl"><BsPerson /></span>
                <span className="text-md">Profile</span>
              </Link>
            </li>
            <li>
              <a >
                <span className="text-xl"><BsPower /></span>
                <span className="text-md" onClick={handleLogout}>Logout</span>
              </a>
            </li>

          </ul>
        </div> ): (<div className='w-48 flex gap-2'>
          <Link href="/auth/login" className='text-black bg-white py-2 px-3 rounded-lg '>Login</Link>
          <Link href="/auth/register" className='text-black bg-white py-2 px-3 rounded-lg'>Register</Link>
        </div>)
      
  
}

export default NavProf