import React from 'react'
import logo from "/logo.png"
const Footer = () => {
  return (
    <footer className='border-t'>
  <div className="container px-5 py-4 mx-auto flex items-center justify-between md:flex-row flex-col">
    <div className="flex items-center ">
      <img src={logo} alt="logo" width={30} />
      <span className="ml-2 text-md font-medium">Online Store</span>
    </div>
    <p className="text-md mt-3 md:mt-0">
      © 2023 All right reserved —
      
       <a href="https://ankitjha.vercel.app" target='_blank'> Ankit Jha</a>
      
    </p>
   
  </div>
</footer>

  )
}

export default Footer
