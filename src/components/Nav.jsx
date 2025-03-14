import React, { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoPersonCircle } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Nav = () => {
  const [searchTerms, setSearchTerms] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (searchTerms.trim() !== "") {
      navigate(`/?search=${searchTerms}`);
    } else {
      navigate(`/`); 
    }
  }, [searchTerms, navigate]);

  return (
    <div>
      <nav className='w-full flex items-center justify-between p-2 px-8'>
        <h1 className='companyname'>
          <Link to="/">Salsa</Link>
        </h1>
        
        
        <div className="searchbar w-[40%] border bg-zinc-100 p-2 rounded flex justify-between">
          <input 
            type="text"
            placeholder='Search for products...'
            className="bg-transparent outline-none w-full px-2"
            value={searchTerms}
            onChange={(e) => setSearchTerms(e.target.value)}
          />
          <CiSearch className='text-2xl cursor-pointer' />
        </div>

        {/* Login & Cart Links */}
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
  );
};

export default Nav;
