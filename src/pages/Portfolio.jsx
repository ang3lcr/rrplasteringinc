import React from 'react'
import img1 from "../assets/portfolio/img1.png"
import img2 from "../assets/portfolio/img2.png"
import img3 from "../assets/portfolio/img3.png"
import img4 from "../assets/portfolio/img4.png"
import img5 from "../assets/portfolio/img5.png"
import img6 from "../assets/portfolio/img6.png"
import img7 from "../assets/portfolio/img7.png"
import img8 from "../assets/portfolio/img8.png"
import img9 from "../assets/portfolio/img9.png"
import img10 from "../assets/portfolio/img10.png"


const Portfolio = () => {

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]




  return (
    <div className='flex items-center flex-col'>
      <h1 className='text-3xl mt-10 font-principal uppercase font-bold'>Portfolio</h1>
      <p className='font-body font-regular w-8/12 text-justify mt-10'>Welcome to our portfolio showcase, where quality craftsmanship meets inspired design. 
      Explore our extensive collection of completed projects, showcasing our expertise in construction, 
      renovation, and finishing. From elegant residential homes to commercial developments, 
      each entry exemplifies our commitment to excellence and client satisfaction. 
      Browse through our portfolio to witness the transformational power of our work and envision the 
      possibilities for your next project. Let us turn your vision into reality with our proven track record of success.
      </p>
      <div className='flex flex-row flex-wrap w-9/12 justify-center gap-2 mt-10 mb-10'>
        {images.map(image => (
          <img src={image} alt="" />
        ))}
      </div>
    </div>
  )
}

export default Portfolio