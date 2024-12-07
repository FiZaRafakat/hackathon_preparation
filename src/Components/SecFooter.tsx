"use client"
import { TbTruckDelivery } from "react-icons/tb";
import { PiHeadsetBold } from "react-icons/pi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { GoArrowUp } from "react-icons/go";

const SecFooter = () => {

  const scrollToHome = () => {
    const HeroSection = document.getElementById('home');
    if (HeroSection) {
      HeroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className='lg:mx-20 mx-5 md:mt-20 mt-5 mb-10'>
       <div className=":mx-40">
       <div className="icons flex  md:flex-nowrap flex-wrap justify-center text-center lg:gap-20 gap-10 mb-5 lg:mb-16">

<div className="icon flex flex-col items-center gap-4">
  <span className="bg-black border-[10px] border-[#7D8184] p-3 w-[80px] h-[80px] rounded-full items-center flex justify-center">
      <TbTruckDelivery className="text-white font-thin size-12"/>
  </span>
  <div className="title">
      <h5 className="font-bold uppercase md:text-lg text-base my-1">Free and Fast Delivery</h5>
      <p className="text-xs tracking-wider font-medium">Free delivery for all orders over $140</p>
  </div>
</div>
<div className="icon flex flex-col items-center gap-4">
  <span className="bg-black border-[10px] border-[#7D8184] p-3 w-[80px] h-[80px] rounded-full items-center flex justify-center">
      <PiHeadsetBold className="text-white font-thin size-12"/>
  </span>
  <div className="title">
      <h5 className="font-bold uppercase md:text-lg text-base my-1">24/7 Customer Service</h5>
      <p className="text-xs tracking-wider font-medium">Friendly 24/7 customer support</p>
  </div>
</div>
<div className="icon flex flex-col items-center gap-4">
  <span className="bg-black border-[10px] border-[#7D8184] p-3 w-[80px] h-[80px] rounded-full items-center flex justify-center">
      <MdOutlineVerifiedUser className="text-white font-thin size-12"/>
  </span>
  <div className="title">
      <h5 className="font-bold uppercase md:text-lg text-base  my-1">Money Back Guarantee</h5>
      <p className="text-xs tracking-wider font-medium">We return money within 30 days</p>
  </div>
</div>

          </div>
       </div>

        <div className="upper flex justify-end ">
        <button className="lg:p-3 p-2 bg-[#F5F5F5] rounded-full hover:bg-[#828282] group" onClick={scrollToHome} ><GoArrowUp className="lg:size-7 size-5 group-hover:text-white "/></button>  
        </div>
    </div>
  )
}

export default SecFooter