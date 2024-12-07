import Link from "next/link"

import { BiLogoLinkedin } from "react-icons/bi"
import { FaInstagram } from "react-icons/fa6"
import { TfiTwitter } from "react-icons/tfi"

const Members = [
    {
        name : "Tom Cruise",
        desc : "Founder and Chairman",
        img : "customer-1.png"
    },{
        name : "Emma Watson",
        desc : "Managing Director",
        img : "member-2.png"
    },{
        name : "Will Smith",
        desc : "Product Designer",
        img : "member-3.png"
    }
]


const Member = () => {
  return (
    <div>
      <div className="lg:mx-20 mx-5 lg:mb-32 mb-6 flex overflow-x-auto scrollbar-hide snap-x snap-mandatory justify-center gap-2 lg:gap-7">
      {Members.map((member)=>{
        return(
          <div key={member.name} className="flex  flex-col ">
              <div className="lg:w-[370px] lg:h-[420px] w-[280px] h-[370px]  bg-[#f5f5f5] rounded-md relative">
                <div className="flex justify-center">
                <img src={member.img} alt="" className="absolute bottom-0 " />
                </div>
              </div>
              <div className="title mt-2 lg:mt-7">
                <h5 className="lg:text-[32px] text-lg mb-2  font-semibold tracking-wider">{member.name}</h5>
                <p className="lg:text-lg text-base lg:font-medium">{member.desc}</p>
              <div className="icons mt-2 lg:mt-4">
               <nav className="flex gap-5">
                <Link href="/">
                <TfiTwitter className="lg:size-6 size-4" />
                </Link>
                <Link href="/">
                <FaInstagram className="lg:size-6 size-4" />
                </Link>
                <Link href="/">
                <BiLogoLinkedin className="lg:size-6 size-4" />
                </Link>
             </nav>
            </div>
              </div>
          </div>
     )})}
    </div>
    </div>
  )
}

export default Member