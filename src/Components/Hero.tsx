import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";


const Hero = () => {
  return (
    <div className='lg:mx-20  '>
        <div className='flex flex-col lg:flex-row '>
            <div className="left lg:w-[250px] lg:mx-0 mx-5 text-black flex flex-wrap gap-2  gap-y-1 text-sm lg:flex-col lg:gap-y-3 lg:pr-8 lg:border-r-2 border-b-2 lg:border-b-0 pb-4 sm:text-base border-[#D9DBE9] lg:pt-10 pt-4">
                <div className='flex items-center justify-between'>
                    <span>Woman&apos;s Fashion</span>
                    <FaAngleRight />
                </div>
                <div className='flex items-center justify-between'>
                    <span>Men&apos;s Fashion</span>
                    <FaAngleRight />
                </div>
               <p className='border-r-2 lg:border-none pr-2  border-[#D9dbe9]'>Electronics</p>
               <p className='border-r-2 lg:border-none pr-2  border-[#D9dbe9]'>Home & Lifestyle</p>
               <p className='border-r-2 lg:border-none pr-2  border-[#D9dbe9]'>Medicine</p>
               <p className='border-r-2 lg:border-none pr-2  border-[#D9dbe9]'>Sports & Outdoors</p>
               <p className='border-r-2 lg:border-none pr-2  border-[#D9dbe9]'>Baby&apos;s & Toys</p>
               <p className='border-r-2 lg:border-none pr-2  border-[#D9dbe9]'>Groceries & Pets</p>
               <p className='border-r-2 lg:border-none pr-2  border-[#D9dbe9]'>Health & Beauty</p>
            
            </div>
           <div className='right md:mx-10 md:mt-6 text-white lg:ml-16 lg:pt-10'>
           <div className="bg-black lg:pl-20 pt-3  xl:w-[850px]">
             <div className='flex md:items-center flex-col sm:flex-row justify-between'>
                <div className="head ml-8 lg:ml-0 flex flex-col ">
                    <div className="apple flex items-center gap-3  md:gap-5">
                        <img src="/apple.png" alt="apple" className='w-[30px] md:w-auto' />
                        <span className='mt-2 text-sm md:text-base '>iPhone 14 Series</span>
                    </div>
                    <h1 className='md:text-5xl sm:text-4xl text-3xl font-semibold leading-snug md:tracking-wide tracking-widest  mt-2 sm:mt-4'>Up to 10%
                        <br />
                        Off Voucher
                    </h1>
                    <button className='flex md:gap-2 gap-1 sm:mt-4  items-center'>
                        <span className=' pb-1 md:border-b-2 border-b md:text-base text-sm border-white'>Shop Now</span>
                        <GoArrowRight className='md:size-6 ' />
                    </button>
                </div>
                <div className='mt-5'>
                    <img src="/hero-frame.png" alt="" />
                </div>
             </div>
             <div className="slider flex justify-center items-center pb-5 lg:mr-[7.5rem]">
                <img src="/option.png" alt="" />
             </div>
            </div>

           </div>
        </div>
    </div>
  )
}

export default Hero