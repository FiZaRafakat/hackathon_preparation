
const circles = [
    {
        time : '23',
        desc : 'Hours'
    },{
        time : '05',
         desc : "Days"
    },{
        time : '59',
        desc : 'Minutes'
    },{
        time : '35',
        desc : 'Seconds'
    }
]

const MusicBox = () => {
  return (
    <div className='lg:mx-20 mb-20 relative overflow-x-hidden'>
        <div className="bg-black lg:pl-20 md:pl-10 lg:h-[460px] md:pb-5   w-full  ">
             <div className='flex items-center md:flex-row flex-col gap-7 justify-between pt-10'>

                <div className="head flex flex-col text-white ">
                    <h4 className='text-[#00FF66] font-normal tracking-wider text-sm'>Categories</h4>
                    <h2 className='lg:text-5xl md:text-4xl text-3xl font-semibold leading-snug tracking-wide mt-4'>Enhance your
                        <br />
                        Music Experience
                    </h2>
                    <div className='circles flex gap-3 my-5'>
                        {circles.map((circle)=>{
                            return(
                                <div key={circle.desc} className="box1 bg-white text-black rounded-full flex flex-col items-center justify-center p-2 md:w-[70px] w-[55px] h-[55px] md:h-[70px]">
                                 <span className='font-bold '>{circle.time}</span>
                                 <span className='md:text-sm text-[0.5rem]'>{circle.desc}</span>
                                </div>
                            )
                        })}
                    </div>
                    <div className="icon flex gap-3 md:mt-3 mt-1">
                    <button className='text-white bg-[#00ff66] lg:px-12 px-6 text-sm lg:py-4 py-2 rounded-lg hover:shadow-2xl'>Buy Now!</button>  
                   </div>
                </div>
               <div className='xl:mr-44 lg:mt-14  lg:mr-20 '>
               <div className='w-[300px] h-[300px] xl:h-[300px] xl:w-[300px] lg:w-[200px] lg:h-[200px] xl:bg-[#d9d9d9]/30 bg-[#d9d9d9]/30 lg:bg-[#d9d9d9]/25  rounded-full shadow-[0_0_400px_0_#D9D9D9]'  >
                </div>
                <img src="/Music.png" alt="Music" className='inset-0 md:w-[380px] xl:w-auto z-10 absolute md:top-[3rem] top-[22rem] md:left-[24rem] lg:left-[30rem] xl:top-[3rem] lg:top-[7rem] xl:left-[38rem]  '  />
               </div>
             </div>
            </div>
    </div>
  )
}

export default MusicBox