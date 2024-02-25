import React, { useState } from 'react';
import logo from "/logo.png";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
  const cart = useSelector((state) => state.cart.cart);
  const [active, setActive] = useState(false);

  const toggleNavbar = () => {
    setActive(!active);
  };

  return (
    <header id='header'>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link className="flex font-bold items-center text-gray-800 mb-4 md:mb-0" to="/" id='logo'>
          <img src={logo} alt="logo" width={30} />
          <span className="ml-2 text-lg md:text-xl">Online<span className='text-green-600'>Store</span></span>
        </Link>
        <nav className={`md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 	flex flex-wrap items-center justify-center ${active ? 'block' : 'hidden'}`} id='navbar'>
          <Link className="mr-5 hover:text-gray-900" to="/">Home</Link>
          <Link className="mr-5 hover:text-gray-900" to="/about" >About</Link>
          <Link className="mr-5 hover:text-gray-900" to="/products">Products</Link>
        </nav>
        <Link className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 relative" to="/cart" id='cartIcon'>
          <FaShoppingCart size={22} />
          <span className='bg-green-500 px-2 absolute bottom-4 -right-2 text-white rounded-full ml-2'>{cart.length}</span>
        </Link>
        <HiMenuAlt3 className='md:hidden sm:visible' size={28} id="menuBtn" onClick={toggleNavbar} />
      </div>
    </header>
  );
}

export default Header;
