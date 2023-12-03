import React from 'react'
import { Orbitron } from "next/font/google"
import Image from 'next/image'
import Link from 'next/link'
import { FaRegPenToSquare } from "react-icons/fa6"
import { BsPerson, BsGear, BsPower } from "react-icons/bs"
import NavProf from './NavProf'



const orbitron = Orbitron({

  subsets: ['latin'],
})


const Navbar = () => {


  return (
    <header>
      <nav className="w-screen navbar p-0 bg-slate-950 h-16 items-center">
        <Link href="/" className={`  h-20  pl-8`}>
          
            <p className={`${orbitron.className} text-white text-2xl tracking-wider  w-full`}>ShareSculpt</p>
         
        </Link>
        <div className='w-fit h-full  ml-auto '>
          
          <Link href="/blogs/newblog" className='flex items-center gap-x-1 text-white w-20  h-full mr-2 '>
            <FaRegPenToSquare className='pb-1  h-10 w-10' />
            <p className='text-md'>Write</p>
          </Link>
          <NavProf />
        </div>
      </nav>
    </header>
  )
}

export default Navbar