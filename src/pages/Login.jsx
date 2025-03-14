import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className=' flex justify-center'>
        <form className='w-[17%] border p-10  flex flex-col gap-5 mt-[10em] items-center'>
            <input className='block border rounded w-[15em] p-1 ' type="email" placeholder='Enter E-mail' />
            <input className='block border rounded w-[15em] p-1 ' type="password" placeholder='Enter Password' />
            <button className='border px-2 py-1 rounded '>Submit</button>
            <div className='flex w-full justify-between '>
                <Link to="/signup" className='hover:text-blue-500'>Sign Up</Link>
                <Link className='hover:text-blue-500'>Login as Admin</Link>
            </div>
        </form>
    </div>
  )
}

export default Login