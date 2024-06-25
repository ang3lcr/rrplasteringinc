import React from 'react'
import VideoBG from "../assets/bgvideo.mp4"
import Hero from "../assets/logoconletras.png"
import Img2 from "../assets/image2.png"
import Img3 from "../assets/image3.png"
import Img4 from "../assets/image4.png"
import HomeGallery from '../components/HomeGallery'
import Services from '../components/Services'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faIdBadge, faPhone } from '@fortawesome/free-solid-svg-icons'


const Home = () => {
    return (
        <div className='relative w-full h-auto'>
            <div className='relative'>
                <img src={Hero} alt="" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-2/6' />
                <div className='w-full h-screen bg-blue-300'>
                    <video src={VideoBG} autoPlay loop muted className='h-full w-full object-cover'></video>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center mt-24 mb-24 bg-zinc-100' id='about'>
                <p className='text-3xl p-2'>R&R PLASTERING INC</p>
                <p className='text-xl font-acentos py-2'>"16 years serving the community thanks to our effort, dedication, and the trust of our clients."</p>
                <p className='font-body font-regular text-lg sm:text-xl md:text-2xl mt-5 w-full sm:w-5/6 md:w-4/6 p-2 mb-5'>
                    Revitalize your home or commercial property with our comprehensive re-stucco services.
                    Our experienced team specializes in the meticulous removal of old stucco, addressing any underlying issues,
                    and applying a fresh, high-quality finish. With a focus on attention to detail and quality craftsmanship, w
                    e ensure that your exterior walls not only look stunning but also stand the test of time. Trust us to transform the appearance of your property and protect it for years to come with our professional re-stucco solutions.
                </p>
            </div>

            <div className='flex flex-col justify-center items-center mt-24 mb-24 bg-zinc-100'>
                <p className='text-center m-10 font-acentos text-xl'>We specialize on big and small jobs <br /> plaster and drywall work</p>
                <div className='flex justify-around w-11/12 flex-wrap gap-5 items-center mb-12'>
                    <img src={Img2} alt="" />
                    <img src={Img3} alt="" />
                    <img src={Img4} alt="" />
                </div>
            </div>
            <div className='flex justify-center'>
                <HomeGallery />
            </div>
            <div className='flex flex-col justify-center items-center bg-zinc-100'>
                <p className='text-3xl font-principal mt-10'>Important to Know</p>
                <ul className='list-disc text-lg sm:text-xl md:text-2xl mt-5 sm:mt-8 md:mt-10 mb-5 sm:mb-8 md:mb-10 font-body font-regular  flex-col justify-center items-center p-2'>
                    <li>Installation and repair services</li>
                    <li>Stress crack repair</li>
                    <li>Small or large hole repair</li>
                    <li>Water damage repair</li>
                    <li>Ability to match any texture</li>
                    <li>Quick-dry options</li>
                    <li>Cracks preventios system with polybond cement</li>
                    <li>Extra coat over cement walls to prevent cracks</li>
                </ul>
                <p className='mb-10 text-xl font-acentos'>A clean job site once we've finished</p>
            </div>
            <div className='flex justify-center mb-20 mt-20'>
                <Services />
            </div>

            <div className='bg-zinc-100 flex justify-center items-center p-5 sm:p-10 md:p-20'>
                <div className='w-full sm:w-4/5 md:w-3/5 flex justify-center flex-col items-center'>
                    <p className='text-xl sm:text-2xl md:text-3xl text-center'>MATERIALS WE USE TO PREVENT CRACKS</p>
                    <p className='text-lg sm:text-xl md:text-2xl font-regular font-acentos mt-4 text-center'>EISENWALL® Premium Exterior Plastering Cement</p>
                    <p className='text-base sm:text-lg md:text-xl mt-5 md:mt-10 font-body font-regular text-justify'>Rapid Set® EISENWALL® is a high-performance cement blend, ideal for plastering and stucco applications. It provides high strength, superior durability, minimal shrinkage, and reduced cracking. Suitable for use over masonry, concrete, fiberboard, gypsum, wood, or cement-based sheathing. Environmentally friendly, emitting less CO2 than Portland cement.</p>
                    <div className='flex justify-start items-start w-full flex-col mt-5'>
                        <p className='font-body font-regular text-base sm:text-lg md:text-xl'>Advantages:</p>
                        <ul className='list-disc pl-5 sm:pl-10 font-body font-regular text-base sm:text-lg md:text-xl'>
                            <li>Quick: allows for same-day layering</li>
                            <li>Crack-resistant</li>
                            <li>Efficient: complete thickness in one application</li>
                            <li>Easy to use: just add sand and water</li>
                        </ul>
                        <p className='text-center w-full mt-5 font-body font-regular text-base sm:text-lg md:text-xl'>
                            For more details, visit <a href="https://www.ctscement.com/datasheet/EISENWALL_Datasheet_DS_027_EN?c=PRODUCTS&t=Professionals" className='text-blue-500'>CTS Cement.</a>
                        </p>
                    </div>
                </div>
            </div>


            <div className='w-full flex justify-center mt-20 sm:mt-30 md:mt-40 flex-col items-center text-center mb-20 sm:mb-30 md:mb-40 p-5'>
                <p className='text-xl sm:text-2xl md:text-3xl w-full sm:w-4/5 md:w-3/5 font-principal'>BOND GENERAL LIABILITY AND WORKERS COMPENSATION</p>
                <p className='text-base sm:text-lg md:text-xl w-full sm:w-4/5 md:w-3/5 text-start font-body font-regular mt-4'>Get in touch with us today and let's bring your project to life! Whether you're planning a new construction, renovation, or need expert finishing services, our team is here to help. We look forward to hearing from you and being a part of your next successful project.</p>
                <ul className='flex flex-col justify-center items-start mt-8 sm:mt-10 text-base sm:text-lg md:text-xl font-body'>
                    <li className='flex items-center mb-2'><FontAwesomeIcon icon={faPhone} className='text-yellow-200 mr-2' /> Cell: 323-376-9892</li>
                    <li className='flex items-center mb-2'><FontAwesomeIcon icon={faEnvelope} className='text-yellow-200 mr-2' /> rrplaster@gmail.com</li>
                    <li className='flex items-center pl-1'><FontAwesomeIcon icon={faIdBadge} className='text-yellow-200 mr-2' /> Licence: 926307</li>
                </ul>
            </div>

        </div>
    )
}

export default Home