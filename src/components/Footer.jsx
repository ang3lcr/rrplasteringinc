import React from 'react'
import Logo from "../assets/logosinletras.png"

const Footer = () => {
  return (
    <div className='w-full bg-blue-500 flex justify-center'>
        <img src={Logo} alt="" className='w-16 mt-2'/>
    </div>
  )
}

export default Footer