import React from 'react'
import { LuPhone } from "react-icons/lu";
import { RxEnvelopeClosed } from "react-icons/rx";

const Contact = () => {
  return (
    <div className='lg:mx-20 mx-5  lg:mt-12 mt-5 mb-28'>
        <p className='text-black/60 font-medium lg:text-base text-sm tracking-wider'>Home  <span className='lg:mx-2 mx-1'>/</span> <span className=' text-black'>Contact</span></p>
        <div className='lg:mt-16  flex flex-col lg:flex-row gap-5'>
            <div className="text lg:w-[380px] flex flex-col lg:flex-col sm:flex-row justify-around px-4 gap-y-4  lg:px-8 lg:py-16 py-8 shadow-md">
              <div className="call lg:pb-10 pb-3 border-b-2 border-black/30  lg:border-b-2 lg:border-black/30">
                 <div className="title flex items-center gap-3 mb-5">
                 <span className="bg-[#DB4444] text-white p-2 rounded-full"><LuPhone className="lg:size-7 size-5" /></span> 
                 <span className='text-lg lg:font-semibold tracking-wider'>Call To Us</span>
                 </div>
                 <div className="p flex flex-col gap-2 lg:text-base text-xs md:text-sm lg:gap-3">
                    <p>We are available 24/7, 7 days a week.</p>
                    <p>Phone: +8801611112222</p>
                 </div>
              </div>
              <div className="write  lg:pt-10">
              <div className="title flex items-center gap-3 mb-5">
                 <span className="bg-[#DB4444] text-white p-2 rounded-full"><RxEnvelopeClosed className="lg:size-7 size-5" /></span> 
                 <span className='text-lg lg:font-semibold tracking-wider'>Write To Us</span>
                 </div>
                 <div className="p flex flex-col gap-2 lg:text-base text-xs md:text-sm lg:gap-3">
                    <p className='sm:max-w-[200px] lg:w-auto'>Fill out our form and we will contact you within 24 hours.</p>
                    <p>Emails: customer@exclusive.com</p>
                    <p>Emails: support@exclusive.com</p>
                 </div>
              </div>
            </div>
            <div className="input flex flex-col lg:gap-8 gap-4 maw-w-[780px] shadow-md lg:px-8 px-4 py-6 lg:py-12">
            <div className="first flex flex-wrap gap-4">
                <input type="text" placeholder='Your Name' className='bg-[#F5F5F5] md:pl-5 md:pr-1 md:py-4 py-2 pl-2 md:text-base text-sm outline-none  placeholder:text-black/60 font-medium rounded-lg placeholder:tracking-wider text-black/60 tracking-wider ' />
                <input type="text" placeholder='Your Email' className='bg-[#F5F5F5] md:pl-5 md:pr-1 md:py-4 py-2 pl-2 md:text-base text-sm outline-none  placeholder:text-black/60 font-medium rounded-lg placeholder:tracking-wider text-black/60 tracking-wider' />
                <input type="text" placeholder='Your Phone' className='bg-[#F5F5F5] md:pl-5 md:pr-1 md:py-4 py-2 pl-2 md:text-base text-sm outline-none  placeholder:text-black/60 font-medium rounded-lg placeholder:tracking-wider text-black/60 tracking-wider' />
            </div>
            <textarea name="Your Message" id="msg" rows={9} cols={5} placeholder='Your Message' className='bg-[#F5F5F5] md:pl-5 md:pr-1 md:py-4 py-2 pl-2 md:text-base text-sm outline-none  placeholder:text-black/60 font-medium rounded-lg placeholder:tracking-wider text-black/60 tracking-wider w-full'> </textarea>
           <div className='flex justify-end'>
           <button className="text-white bg-[#DB4444] md:px-12 px-6 sm:text-sm text-xs md:py-4 py-2  rounded-lg hover:shadow-custom-corners ">Send Message</button>
           </div>
            </div>
        </div>
    </div>
  )
}

export default Contact