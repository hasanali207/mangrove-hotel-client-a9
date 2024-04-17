import React from 'react';
import img1  from '../assets/img-37.jpg'
import img2  from '../assets/img-38.jpg'
import img3  from '../assets/img-3.jpg'
const Apartment = () => {
    return (
        <div>
            <div className="">
			<h1  className=" text-center text-3xl text-black font-bold md:tracking-tight md:text-4xl my-10">Choose Your Apartment Type
            </h1>

                <div className='flex flex-col md:flex-row  items-center justify-between gap-6' >
                   
                    <div data-aos='fade-left' className='bg-black relative'>
                        <figure className=''>
                            <img src={img1} alt="" />
                        </figure>
                        <h1  data-aos='zoom-in' className='absolute bg-black hover:bg-[#b99d75] w-[200px] bottom-3  p-4 cursor-pointer text-white font-semibold'>Luxury PentHouse</h1>
                    </div>
                    <div data-aos='fade-down' className='relative'>
                        <figure className=''>
                            <img src={img2} alt="" />
                        </figure>
                        <h1  data-aos='zoom-in' className='absolute bg-black hover:bg-[#b99d75] w-[200px] bottom-3  p-4  cursor-pointer text-white font-semibold'>Art Apartment</h1>
                    </div>
                    <div data-aos='fade-right' className='relative'>
                        <figure className=''>
                            <img src={img3} alt="" />
                        </figure>
                        <h1   data-aos='zoom-in' className='absolute bg-black hover:bg-[#b99d75] w-[200px] bottom-3  p-4 cursor-pointer  text-white font-semibold'>Modern Studios</h1>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Apartment;