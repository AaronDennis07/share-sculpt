import React from 'react'
import { Orbitron } from "next/font/google"
import Image from 'next/image'
import Link from 'next/link'
import { FaRegPenToSquare } from "react-icons/fa6"
import { BsPerson, BsGear, BsPower } from "react-icons/bs"

const orbitron = Orbitron({
  weight: '600',
  subsets: ['latin'],
})


const Navbar = () => {
  const isloggedIn = false
  return (
    <header>
      <nav className="navbar p-0 bg-slate-950 h-16 items-center">
        <Link href="/" className={`${orbitron.className} px-4 h-20 text-center  `}>
          <p className="text-white">ShareSculpt</p>

        </Link>
        <div className=' w-full h-full'>
          <div className="form-control w-5/6 pr-4">
            <input type="text" placeholder="Search" className="h-10 input input-bordered w-ful" />
          </div>

          <Link href="/posts/newpost" className='flex items-center gap-x-1 text-white w-16  h-full mr-2'>
            <FaRegPenToSquare className='pb-1  h-10 w-10' />
            <p className='text-md'>Write</p>
          </Link>
          {isloggedIn ?
            <div className="w-52 h-full flex items-center   dropdown dropdown-end relative">
              <label tabIndex={0} className="ml-2 btn btn-ghost btn-circle avatar mr-2">
                <div className=" rounded-full">
                  <Image src="/profile.jpg" height={45} width={45} />
                </div>
              </label>
              <p className='text-white'>Aaron Dennis</p>
              <ul tabIndex={0} className="shadow-xl  text-slate-500 z-[1] p-2 top-full mt-1 menu menu-sm dropdown-content bg-base-100 rounded-box w-52 mr-4">
                <li>
                  <a >
                    <span className="text-xl"><BsPerson /></span>
                    <span className="text-md">Profile</span>
                  </a>
                </li>
                <li>
                  <a >
                    <span className="text-xl"><BsGear /></span>
                    <span className="text-md">Settings</span>
                  </a>
                </li>
                <li>
                  <a >
                    <span className="text-xl"><BsPower /></span>
                    <span className="text-md">Settings</span>
                  </a>
                </li>

              </ul>
            </div> : (<div className='w-48 flex justify-around'>
              <button className='text-black bg-white py-2 px-3 rounded-lg'>Login</button>
              <button className='text-black bg-white py-2 px-3 rounded-lg'>Register</button>
            </div>)
          }
        </div>
      </nav>
    </header>
  )
}

export default Navbar