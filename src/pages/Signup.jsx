import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className=' flex justify-center'>
        <form className='w-[17%] border p-10  flex flex-col gap-5 mt-[8em] items-center'>
            <input className='block border rounded w-[15em] p-1 ' type="text" placeholder='Enter First Name' />
            <input className='block border rounded w-[15em] p-1 ' type="text" placeholder='Enter Last Name' />
            <input className='block border rounded w-[15em] p-1 ' type="email" placeholder='Enter Email' />
            <input className='block border rounded w-[15em] p-1 ' type="password" placeholder='Enter password' />
            <button className='border px-2 py-1 rounded '>Submit</button>
            <div className='flex w-full justify-between '>
                <Link to="/login" className='hover:text-blue-500'>Sign In</Link>
                <Link to="/admin" className='hover:text-blue-500'>As Admin</Link>
            </div>
        </form>
    </div>
  )
}

export default Signup