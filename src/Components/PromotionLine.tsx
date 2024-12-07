import React from 'react'
import { AiOutlineDollarCircle } from "react-icons/ai";
import { FaSackDollar } from "react-icons/fa6";
import { LuShoppingBag } from "react-icons/lu";
import { LuStore } from "react-icons/lu";


const PromotionLine = () => {
  return (
    <div>
      <div className="mb-24">
        <div className="icons flex flex-wrap text-center lg:gap-8 gap-2 lg:mb-16 justify-around lg:mx-20 mx-2">

             <div className="icon flex flex-col items-center gap-4 border-2 rounded-xl w-[150px] lg:w-[240px] pb-3 lg:pt-8 pt-3 px-1  lg:px-3 group hover:shadow-custom-corners hover:bg-[#DB4444] hover:border-none">
               <span className="bg-black group-hover:bg-white group-hover:border-[#db4444]/70 border-[6px] lg:border-[10px] border-[#7D8184] lg:p-3 p-2  lg:w-[80px] lg:h-[80px] w-[60px] h-[60px] rounded-full items-center flex justify-center">
                   <LuStore className="text-white font-thin group-hover:text-black size-12"/>
               </span>
               <div className="title">
                   <h5 className="lg:font-bold uppercase text-lg font-medium lg:text-2xl group-hover:text-white my-1">10.5K</h5>
                   <p className="font-medium lg:text-base text-xs group-hover:text-white">Sallers active our site</p>
               </div>
             </div>
             <div className="icon flex flex-col items-center gap-4 border-2 rounded-xl w-[150px] lg:w-[240px] pb-3 lg:pt-8 pt-3 px-1  lg:px-3 group hover:shadow-custom-corners hover:bg-[#DB4444] hover:border-none ">
               <span className="bg-black group-hover:bg-white group-hover:border-[#db4444]/70 border-[6px] lg:border-[10px] border-[#7D8184] lg:p-3 p-2  lg:w-[80px] lg:h-[80px] w-[60px] h-[60px] rounded-full items-center flex justify-center">
                   <AiOutlineDollarCircle className="text-white group-hover:text-black font-thin size-12"/>
               </span>
               <div className="title">
                   <h5 className="lg:font-bold uppercase text-lg font-medium lg:text-2xl group-hover:text-white my-1">33K</h5>
                   <p className="font-medium lg:text-base text-xs group-hover:text-white">Monthly Product Sale</p>
               </div>
             </div>
             <div className="icon flex flex-col items-center gap-4 border-2 rounded-xl w-[150px] lg:w-[240px] pb-3 lg:pt-8 pt-3 px-1  lg:px-3 group hover:shadow-custom-corners hover:bg-[#DB4444] hover:border-none">
               <span className="bg-black group-hover:bg-white group-hover:border-[#db4444]/70 border-[6px] lg:border-[10px] border-[#7D8184] lg:p-3 p-2  lg:w-[80px] lg:h-[80px] w-[60px] h-[60px] rounded-full items-center flex justify-center">
                   <LuShoppingBag className="text-white group-hover:text-black font-thin size-12"/>
               </span>
               <div className="title">
                   <h5 className="lg:font-bold uppercase text-lg font-medium lg:text-2xl group-hover:text-white my-1">45.5K</h5>
                   <p className="font-medium lg:text-base text-xs group-hover:text-white">Customer active in our site</p>
               </div>
             </div>
             <div className="icon flex flex-col items-center gap-4 border-2 rounded-xl w-[150px] lg:w-[240px] pb-3 lg:pt-8 pt-3 px-1  lg:px-3 group hover:shadow-custom-corners hover:bg-[#DB4444] hover:border-none">
               <span className="bg-black group-hover:bg-white group-hover:border-[#db4444]/70 border-[6px] lg:border-[10px] border-[#7D8184] lg:p-3 p-2  lg:w-[80px] lg:h-[80px] w-[60px] h-[60px] rounded-full items-center flex justify-center">
                    <FaSackDollar className="text-white font-thin group-hover:text-black size-12"/>
               </span>
               <div className="title">
                   <h5 className="lg:font-bold uppercase text-lg font-medium lg:text-2xl group-hover:text-white my-1">25K</h5>
                   <p className="font-medium lg:text-base text-xs group-hover:text-white">Annual Gross sale in our site</p>
               </div>
             </div>

          </div>
       </div>
    </div>
  )
}

export default PromotionLine