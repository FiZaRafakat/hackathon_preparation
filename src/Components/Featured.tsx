import React from 'react'

const Featured = () => {
  return (
    <div className='lg:mx-20 mx-4 mb-10 '>
        <div className="title mb-12">
        <div className="today flex items-center gap-2">
       <div className="bg-[#DB4444] w-[18px] rounded-md h-[40px]"></div>
       <h4 className="text-lg font-semibold text-[#DB4444]">Featured</h4>
      </div>
     <div className="flex justify-between items-end">
        <div className="sale flex gap-20 items-end mt-5">
         <h3 className="md:text-4xl text-3xl tracking-wider font-bold">New Arrival</h3>         
        </div>
     </div>
        </div>
        <div className="images flex flex-col sm:flex-row gap-8 text-white">
            <div className="left sm:w-1/2 ">
            <div className="img bg-black sm:h-[615px] h-[400px]  w-full relative rounded-lg ">
             <img src="/playStation.png" alt="" className='mx-auto absolute bottom-0 xl:w-auto min-[450px]:w-[400px] right-0  lg:left-12'/>
             <div className='absolute lg:left-8 lg:bottom-8 bottom-6 left-6 '>
                <h5 className='text-[1.6rem] font-semibold tracking-wider'>PlayStation 5</h5>
                <p className='text-sm leading-relaxed my-3 tracking-wider sm:w-[15rem] xl:w-[20rem]'>Black and White version of the PS5 coming out on sale.</p>
                <button className='border-b-2 border-[#7D8184] font-medium'>Shop Now</button>
             </div>
            </div>
            </div>
            <div className="right  sm:w-1/2 flex flex-col-reverse xl:flex-col md:gap-5 gap-3 relative">
           <div className="img bg-[#0D0D0D] lg:h-[285px] h-[200px] w-full rounded-lg relative ">
             <img src="/women.png" alt="" className='absolute rounded-l-lg h-[200px]  xl:h-auto bottom-0 lg:left-32 right-0'/>
             <div className='absolute lg:left-8 lg:bottom-8 bottom-6 left-6 '>
                <h5 className='text-[1.6rem] font-semibold tracking-wider'>Women&apos;s Collection</h5>
                <p className='text-sm leading-relaxed my-2 tracking-wider font-thin md:w-[18rem] '>Featured Woman collections that give you another vibe.</p>
                <button className='border-b-2 border-[#7D8184] font-medium'>Shop Now</button>
            </div>
           </div>
            <div className='w-full'>
            <div className='flex flex-col lg:flex-row gap-8 xl:mt-3'>
              <div className="left lg:w-1/2 ">
              <div className="img bg-[#0D0D0D]/90 lg:h-[300px] h-[185px] w-full rounded-lg relative ">
             <img src="/speaker.png" alt="" className='absolute h-[150px] lg:h-auto rounded-l-lg lg:bottom-8 bottom-0 right-0 lg:left-10'/>
             <div className='absolute lg:left-8 lg:bottom-8 bottom-6 left-6 '>
                <h5 className='text-[1.6rem] font-semibold tracking-wider'>Speakers</h5>
                <p className='text-sm leading-relaxed my-3 tracking-wider font-thin'>Amazing wireless speakers</p>
                <button className='border-b-2 border-[#7D8184] font-medium'>Shop Now</button>
             </div>
            </div>
              </div>
              <div className="right lg:w-1/2 ">
              <div className="img bg-[#0D0D0D]/90 lg:h-[300px] h-[185px] w-full rounded-lg relative ">
             <img src="/perfume.png" alt="" className='absolute  h-[150px] lg:h-auto rounded-l-lg lg:bottom-8 bottom-0 right-0 lg:left-10'/>
             <div className='absolute lg:left-8 lg:bottom-8 bottom-6 left-6 '>
                <h5 className='text-[1.6rem] font-semibold tracking-wider'>Perfume</h5>
                <p className='text-sm leading-relaxed my-2 tracking-wider font-thin uppercase'>gucci intense oud edp</p>
                <button className='border-b-2 border-[#7D8184] font-medium'>Shop Now</button>
             </div>
            </div>
              </div>
            </div>
            </div>
         </div>
        </div>
    </div>
  )
}

export default Featured