import React from 'react'

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {FaShoppingCart} from "react-icons/fa"
const Header = () => {
  const cart = useSelector(state=>state.cart.cart)
 
  return (
    <nav className='bg-white'>
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link
      to="/"
      className="flex items-center space-x-3 rtl:space-x-reverse"
     
    >
      <img
        src="./logo.png"
        className="h-8"
        alt="Logo"
      />
      <span className="self-center text-xl font-bold whitespace-nowrap">
        Online<span className='text-green-600'>Store</span>
      </span>
    </Link>
    <button
      data-collapse-toggle="navbar-default"
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm outline-none md:hidden"
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
        <li>
          <Link
            to="/"
            className="block py-2 px-3 rounded md:p-0 "
       
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="block py-2 px-3  rounded md:p-0 "

            
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className="block py-2 px-3  rounded md:p-0 "
           
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/cart"
            className="block px-2 py-1 w-fit rounded  md:border relative"
           
          >
            <FaShoppingCart size={20} className='text-green-600'/>
            <span className='absolute -top-2 -right-2 bg-green-600 text-white px-1 rounded-full'>{cart.length}</span>
          </Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Header