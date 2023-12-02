import React from 'react'
import { Orbitron } from "next/font/google"
import Image from 'next/image'
import Link from 'next/link'
import { FaRegPenToSquare } from "react-icons/fa6"
import { BsPerson, BsGear, BsPower } from "react-icons/bs"
import NavProf from './NavProf'



const orbitron = Orbitron({
  weight: '600',
  subsets: ['latin'],
})


const Navbar = () => {
  const isloggedIn = false

  return (
    <header>
      <nav className=" navbar p-0 bg-slate-950 h-16 items-center">
        <Link href="/" className={`${orbitron.className} px-4 h-20 text-center  `}>
          <p className="text-white text-lg">ShareSculpt</p>

        </Link>
        <div className=' w-full h-full'>
          <div className="form-control w-5/6 pr-4">
            <input type="text" placeholder="Search" className="h-10 input input-bordered w-ful" />
          </div>

          <Link href="/blogs/newblog" className='flex items-center gap-x-1 text-white w-16  h-full mr-2'>
            <FaRegPenToSquare className='pb-1  h-10 w-10' />
            <p className='text-md'>Write</p>
          </Link>
          <NavProf/>
        </div>
      </nav>
    </header>
  )
}

export default Navbar