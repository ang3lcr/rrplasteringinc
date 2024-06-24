import React, { useState } from 'react'
import Logo from "../assets/logosinletras.png"
import { Link } from "react-router-dom"
import { Link as LinkSmooth } from "react-scroll"




const NavBar = () => {
  return (
    <div className='relative w-full z-50 bg-blue-500 flex justify-between items-center'>
      <div className=''>
        <img src={Logo} alt="" className='w-16 ml-20'/>
      </div>
      <div className='w-2/5 flex flex-row justify-around'>
        <Link to="/" className='text-amber-300'>Home</Link>
        <Link to="finishes" smooth={true} className='text-amber-300'>Finishes</Link>
        <Link to="/portfolio" className='text-amber-300'>Portfolio</Link>
      </div>
    </div>
  )
}

export default NavBar