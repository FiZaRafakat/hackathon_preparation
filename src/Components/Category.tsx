"use client"
import { CiMobile4 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { BsCamera } from "react-icons/bs";
import { TfiHeadphone } from "react-icons/tfi";
import { IoGameControllerOutline } from "react-icons/io5";
import { GrGamepad } from "react-icons/gr";
import { MdLiveTv } from "react-icons/md";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Fragment, useRef } from "react";
import { IoMdTabletLandscape } from "react-icons/io";


const icons = [{
    icon : <CiMobile4 className="size-20" />,
    title : "Mobile"    
},{
    icon : <HiOutlineComputerDesktop className="size-20" />,
    title : 'Computer'
},{
    icon : <BsSmartwatch className="size-20" />,
    title : "Smart Watch",
},{
    icon : <BsCamera className="size-20" />,
    title : "Camera"
},{
    icon : <TfiHeadphone className="size-20" />,
    title : "Headphone"
},{
    icon : <IoGameControllerOutline className="size-20" />,
    title : 'Gamepad'
},{
    icon : <IoMdTabletLandscape className="size-20" />,
    title : "Tablet"
},{
    icon : <MdLiveTv className="size-20"/>,
    title : "TV"
}
]


const Category = () => {
      
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollRight = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({
          left: 300, 
          behavior: 'smooth',
        });
      }
    };
  
    const scrollLeft = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({
          left: -300, 
          behavior: 'smooth',
        });
      }
    };
  


  return (
    <div className="md:pb-12 pb-4 mb-10 lg:mx-20 mx-4 border-b-2 border-[#D9DBE9]">
          <div className="text-black md:mt-20 mt-10 mb-5 md:mb-10">
        <div className="today flex items-center gap-2">
            <div className="bg-[#DB4444] w-[18px] rounded-md h-[40px]"></div>
            <h4 className="text-lg font-semibold text-[#DB4444]">Categories</h4>
        </div>
       <div className="flex justify-between items-end">
       <div className="sale flex gap-20 items-end md:mt-5 mt-3">
           <h3 className="md:text-4xl text-3xl tracking-wider font-bold">Browse By Category</h3>         
        </div>
        <div className="icon flex gap-3">
        <button className="md:p-3 p-2 bg-[#F5F5F5] hover:bg-[#828282] group rounded-full" onClick={scrollLeft}><GoArrowLeft className="md:size-7 size-6 group-hover:text-white"/></button>    
        <button className="md:p-3 p-2 bg-[#F5F5F5] hover:bg-[#828282] group rounded-full" onClick={scrollRight} ><GoArrowRight className="md:size-7 size-6  group-hover:text-white"/></button>    
        </div>
       </div>
        </div>
         {/* <div className="flex gap-6" > */}
         <div ref={scrollContainerRef} className="flex gap-5 md:mb-10 mb-5 overflow-x-scroll scrollbar-hide ">
         {[...new Array(2)].fill(0).map((_,index)=>(
            <Fragment key={index}>
            {icons.map((icon)=>{
                    return(
                        <div key={icon.title}>
                            <div  className="w-[180px] border-2 hover:bg-[#DB4444] group border-[#E9EAEC] flex flex-col gap-5 rounded-xl justify-center items-center py-6 px-4 transition-all duration-150 delay-75 ">
                           <span className="group-hover:text-white">{icon.icon}</span>
                            <p className="text-lg group-hover:text-white">{icon.title}</p>
                        </div>
                        </div>
                   )
            })}
            </Fragment>
        ))}
         </div>
    </div>
  )
}

export default Category