import React from 'react'
import img1 from "../assets/gallery/img1.png"
import img2 from "../assets/gallery/img2.png"
import img3 from "../assets/gallery/img3.png"
import img4 from "../assets/gallery/img4.png"
import img5 from "../assets/gallery/img5.png"
import "./styles/homegallery.css"

const HomeGallery = () => {
  return (
    <div className=''>
        <div class="container">
            <div class="image1"><img src={img1} alt="" /></div>
            <div class="image2"><img src={img2} alt="" /></div>
            <div class="image3"><img src={img3} alt="" /></div>
            <div class="image4"><img src={img5} alt="" /></div>
            <div class="image5"><img src={img4} alt="" /></div>
        </div>
    </div>
  )
}

export default HomeGallery