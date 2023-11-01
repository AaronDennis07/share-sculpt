
import '@/app/global.css'
import Image from 'next/image'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <div className="navbar p-0 bg-slate-900 text-white">
  <div className=" px-6 align-middle h-20 text-center mt-0 p-0 ">
    <Image alt='some' src="/title.svg" width={150} height={100}/>

  </div>
  <div className='w-full'>
    <div className="form-control w-full mr-32">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/next.svg" />
        </div>
      </label>
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
