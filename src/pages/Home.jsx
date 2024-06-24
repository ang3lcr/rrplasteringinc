import React from 'react'
import VideoBG from "../assets/bgvideo.mp4"
import Hero from "../assets/logoconletras.png"

const Home = () => {
  return (
    <div className='relative w-full h-auto'>
        <img src={Hero} alt="" className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-2/6'/>
        <div className='w-full h-screen bg-blue-300'>
             <video src={VideoBG} autoPlay loop muted className='h-full w-full object-cover'></video>
        </div>
    </div>
  )
}

export default Home