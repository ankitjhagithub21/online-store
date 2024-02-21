import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='min-h-screen w-full fixed bg-white top-0 left-0 flex gap-3 flex-col items-center justify-center'>
       
       <img src="/cart.png" alt="logo" width={100} />
       <p className='font-bold text-2xl text-gray-800'>Online Store</p>
      
        <h2 className='text-4xl text-purple-600 font-medium'>Page Not Found</h2>
        <Link to={"/"} className='bg-purple-500 text-white px-4 py-1 rounded-md mt-3 '>Go To HomePage</Link>
    </div>
  )
}

export default NotFound