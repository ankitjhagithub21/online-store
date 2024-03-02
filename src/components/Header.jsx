import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector(state=>state.cart.cart)

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-bold text-gray-800">
                Online <span className='text-green-600'>Store</span>
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <NavLink to="/" label="Home"  />
                <NavLink to="/about" label="About" />
                <NavLink to="/products" label="Products" />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <Link to="/cart" className="relative mr-4">
              <FaShoppingCart className="text-2xl text-gray-800" />
              <span className="absolute -top-3 -right-3 bg-green-500 text-white rounded-full px-2 py-1 text-sm">
                {cartItems.length}
              </span>
            </Link>
            <div className="sm:hidden">
              {isOpen ? (
                <FaTimes
                  className="text-xl text-gray-800 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                />
              ) : (
                <FaBars
                  className="text-2xl text-gray-800 cursor-pointer"
                  onClick={() => setIsOpen(true)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <MobileNavLink to="/" label="Home" />
          <MobileNavLink to="/about" label="About" />
          <MobileNavLink to="/products" label="Products" />
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, label }) => (
  <Link
    to={to}
    className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
  >
    {label}
  </Link>
);

const MobileNavLink = ({ to, label }) => (
  <Link
    to={to}
    className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
  >
    {label}
  </Link>
);

export default Navbar;
