import React from 'react'

const About = () => {
  return (
    <div className='lg:mt-12 mt-5 mb-10 lg:mb-20'>
        <p className='text-black/60 font-medium lg:text-base lg:mx-20 mx-10 text-sm tracking-wider'>Home  <span className='lg:mx-2 mx-1'>/</span> <span className=' text-black'>Contact</span></p>
       <div className='flex flex-col-reverse md:flex-row lg:mt-14 mt-5 items-center'>
        <div className="text lg:pl-20 lg:pr-14 px-6 md:w-1/2">
        <h2 className='lg:text-5xl text-3xl lg:font-bold font-semibold tracking-wider lg:mb-11 mb-5 mt-5 lg:mt-0'>Our Story</h2>
         <p className='lg:mb-5 mb-2 lg:text-base text-sm leading-relaxed'>Launched in 2015, Exclusive in South Asia&apos;s premeir online shopping marketplace with an active presence in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serve 3 millions customers across the region.</p>
         <p className='leading-relaxed lg:text-base text-sm'>Exclusive has more than 1 million product to offer , growing at a very fast. Exclusive offers a diverse assotment in categories ranging from cusumer.</p>
        </div>
        <div className="img sm:w-[400px] md:w-1/2">
            <img src="/about-pic.png" alt="" />
        </div>
       </div>
    </div>
  )
}

export default About