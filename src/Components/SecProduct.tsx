import React from 'react'
import OurProduct from './OurProduct'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'

const SecProduct = () => {
  return (
    <div className='lg:mx-20 mx-4 mb-16'>
    <div className="text-black md:mt-20 mb-10">
   <div className="today flex items-center gap-2">
       <div className="bg-[#DB4444] w-[18px] rounded-md h-[40px]"></div>
       <h4 className="text-lg font-semibold text-[#DB4444]">Our Products</h4>
   </div>
  <div className="flex justify-between items-end">
  <div className="sale flex gap-20 items-end mt-5">
      <h3 className="md:text-4xl text-3xl tracking-wider font-bold">Explore Our Products</h3>         
   </div>
   <div className="icon xl:flex hidden gap-3">
   <button className="md:p-3 p-2 bg-[#F5F5F5] hover:bg-[#828282] group rounded-full"><GoArrowLeft className="md:size-7 size-6 group-hover:text-white"/></button>    
   <button className="md:p-3 p-2 bg-[#F5F5F5] hover:bg-[#828282] group rounded-full" ><GoArrowRight className="md:size-7 size-6  group-hover:text-white"/></button>
    </div>
  </div>
   </div>
   <OurProduct />
   <div className="flex mt-24 justify-center">
        <button className="text-white bg-[#DB4444] px-12 text-sm py-4 rounded-lg ">View All Products</button>
        </div>
</div>
  )
}

export default SecProduct