
import '@/app/global.css'
import Image from 'next/image'
import Link from 'next/link'
import {FaRegPenToSquare} from "react-icons/fa6"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <div className="navbar p-0 bg-slate-950 h-16 items-center">
  <div className=" px-4 h-20 text-center  ">
    <Image alt='some' src="/title.svg" width={130} height={100}/>

  </div>
  <div className='w-full'>
    <div className="form-control w-5/6 pl-8  mr-4">
      <input type="text" placeholder="Search"  className="h-10 input input-bordered w-ful" />
    </div>
   
    <Link href="/" className='flex items-center gap-x-1 text-white w-16  h-full mr-2'>
      <FaRegPenToSquare className='pb-1  h-10 w-10'/>
      <p className='text-md'>Write</p>
    </Link>
    <div className="w-52 h-32  flex items-center   dropdown dropdown-end ">
      <label tabIndex={0} className="ml-2 btn btn-ghost btn-circle avatar mr-2">
        
        <div className=" rounded-full">
          <Image src="/profile.jpg"  height={45} width={45}/>
        </div>
        
    
      </label>
      <p className='text-white'>Aaron Dennis</p>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        {children}</body>
    </html>
  )
}
