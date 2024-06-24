import React from 'react'
import img1 from "../assets/services/img1.png"
import img2 from "../assets/services/img2.png"
import img3 from "../assets/services/img3.png"


const Services = () => {
    return (
        <div className=''>
            <div id="service1" className='flex flex-col md:flex-row justify-center items-center flex-wrap'>
                <img src={img1} alt="" className='sm:m-8 md:m-10 w-full sm:w-2/3 md:w-1/3' />
                <div className='flex flex-col justify-center items-center w-full md:w-1/2 p-5 sm:p-8 md:p-10'>
                    <p className='text-xl sm:text-2xl md:text-3xl text-center md:text-left'>How we prevent future cracks?</p>
                    <p className='text-lg sm:text-xl md:text-2xl font-body font-regular mt-4'>
                        EISENWALL® prevents cracking through its high-quality cement blend and advanced additives.
                        These components ensure minimal shrinkage and enhanced durability.
                        The material's quick-setting properties also allow for efficient application,
                        reducing the risk of cracks due to prolonged drying times. For detailed information,
                        visit CTS Cement.
                    </p>
                </div>
            </div>

            <div id="service2" className='flex flex-col md:flex-row justify-center items-center flex-wrap'>
                <div className='flex flex-col justify-center items-center w-full md:w-1/2 p-5 sm:p-8 md:p-10'>
                    <p className='text-xl sm:text-2xl md:text-3xl text-center md:text-left'>Paper Wire Installation</p>
                    <p className='text-lg sm:text-xl md:text-2xl font-body font-regular mt-4'>
                        Ensure the durability of your construction with our professional paper wire installation service.
                        Our skilled team expertly installs building paper to protect against moisture and weather,
                        providing long-lasting structural integrity for your projects.
                    </p>
                </div>
                <img src={img2} alt="" className='sm:m-8 md:m-10 w-full sm:w-2/3 md:w-1/3' />
            </div>


            <div id="service3" className='flex flex-col md:flex-row justify-center items-center flex-wrap'>
                <img src={img3} alt="" className='sm:m-8 md:m-10 w-full sm:w-2/3 md:w-1/3' />
                <div className='flex flex-col justify-center items-center w-full md:w-1/2 p-5 sm:p-8 md:p-10'>
                    <p className='text-xl sm:text-2xl md:text-3xl text-center md:text-left'>Drywall Jobs</p>
                    <p className='text-lg sm:text-xl md:text-2xl font-body font-regular mt-4'>Discover the difference with our professional drywall services. From installations to repairs,
                        our skilled team ensures seamless results for your residential or commercial projects.
                        Whether it's a new construction or renovation,
                        trust us to deliver top-quality craftsmanship and attention to detail.
                        Contact us today to discuss your drywall needs and let's bring your vision to life.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Services