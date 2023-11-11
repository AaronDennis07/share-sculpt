import React from 'react'
import Link from 'next/link'
const Register = () => {
  return (
    <>
        <h1 className="text-center  font-bold text-4xl my-5">Register</h1>
        <section className=" w-1/4 mx-auto max-h-fit" >
            <form className="w-full    ">
                <div className=" mb-4">
                    <label htmlFor="username" className=" text-sm block mr-7 mb-2 w-full">Username</label>
                    <input type="text" className=" input input-bordered w-full " name="username" id="title" />
                </div>
                <div className=" mb-4">
                    <label htmlFor="email" className=" text-sm block mr-7 mb-2 w-full">Email</label>
                    <input type="text" className=" input input-bordered w-full " name="email" id="title" />
                </div>
                <div className=" mb-4">
                    <label htmlFor="password" className=" text-sm block mr-7 mb-2 w-full">New Password</label>
                    <input type="text" className=" input input-bordered w-full " name="password" id="title" />
                </div>
                <div className="mb-4">
                    <label htmlFor="cpassword" className="text-sm block mr-7 mb-2 w-full">Confirm Password</label>
                    <input type="password" className="input input-bordered w-full " name="cpassword" id="title" />
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