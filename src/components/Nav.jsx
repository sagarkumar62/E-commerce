import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoPersonCircle } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
        <nav className='w-full flex items-center justify-between p-2 px-8'>
        <h1 className='companyname'>Salsa</h1>
        <div className="searchbar w-[40%] border bg-zinc-100 p-2 rounded flex justify-between">
          <div></div>
          <CiSearch className='text-2xl' />
        </div>
        <div className='flex w-[10%] justify-between items-center '>
        <Link to="/login" className="login flex items-center gap-1">
            <IoPersonCircle />
            <h5>Login</h5>
        </Link>
        <Link to="/cart" className="cart flex items-center gap-1">
            <IoCartOutline />
            <h5>Cart</h5>
        </Link>
        </div>
      </nav>
    </div>
  )
}

export default Nav