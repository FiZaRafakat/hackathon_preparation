"use client"
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import Card from "./Card";
import { useRef } from "react";


const Sales = () => {
   
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollRight = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({
          left: 300, // Adjust scroll amount as needed
          behavior: 'smooth',
        });
      }
    };
  
    const scrollLeft = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({
          left: -300, // Adjust scroll amount as needed
          behavior: 'smooth',
        });
      }
    };

  return (
    <div className="pb-12 mb-10 lg:mx-20 mx-4 border-b-2 border-[#D9DBE9]">
        <div className="text-black lg:mt-20 mt-5 sm:mt-10 mb-5 lg:mb-10">
        <div className="today flex items-center gap-2">
            <div className="bg-[#DB4444] w-[18px] rounded-md h-[40px]"></div>
            <h4 className="text-lg font-semibold text-[#DB4444]">Today&apos;s</h4>
        </div>
       <div className="flex lg:justify-between flex-col lg:flex-row lg:items-end">
       <div className="sale flex lg:flex-row flex-col lg:gap-20 gap-5 lg:items-end items-center mt-3 md:mt-5">
           <h3 className="md:text-4xl text-3xl tracking-wider font-bold">Flash Sales</h3>
           <div className="time flex lg:gap-5 gap-2 items-center font-semibold tracking-wider">
            <div className="days flex flex-col md:gap-1">
                <h6 className="md:text-sm text-xs">Days</h6>
                <span className="md:text-4xl text-3xl   lg:font-extrabold">03</span>
            </div>
            <div className="img">
                <img src="/semiclone.png" alt="" />
            </div>
            <div className="hours flex flex-col md:gap-1">
                <h6 className="md:text-sm text-xs">Hours</h6>
                <span className="md:text-4xl text-3xl lg:font-extrabold">23</span>
            </div>
            <div className="img">
                <img src="/semiclone.png" alt="" />
            </div>
            <div className="minut flex flex-col md:gap-1">
                <h6 className="md:text-sm text-xs">Minutes</h6>
                <span className="md:text-4xl text-3xl   lg:font-extrabold">19</span>
            </div>
            <div className="img">
                <img src="/semiclone.png" alt="" />
            </div>
            <div className="seconds flex flex-col md:gap-1">
                <h6 className="md:text-sm text-xs">Seconds</h6>
                <span className="md:text-4xl text-3xl   lg:font-extrabold">56</span>
            </div>
           </div>
        </div>
        <div className="icon flex gap-3 mt-4 justify-end">
           <button className="md:p-3 p-2 bg-[#F5F5F5] hover:bg-[#828282] group rounded-full" onClick={scrollLeft}><GoArrowLeft className="md:size-7 size-6 group-hover:text-white"/></button>    
           <button className="md:p-3 p-2 bg-[#F5F5F5] hover:bg-[#828282] group rounded-full" onClick={scrollRight} ><GoArrowRight className="md:size-7 size-6  group-hover:text-white"/></button>    
        </div>
       </div>
        </div>
        <Card ref={scrollContainerRef} />
        <div className="flex mt-5 justify-center">
        <button className="text-white bg-[#DB4444] px-12 text-sm py-4 rounded-lg hover:shadow-custom-corners ">View All Products</button>
        </div>
    </div>
  )
}

export default Sales