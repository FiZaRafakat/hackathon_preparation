import Link from 'next/link'
import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { IoEyeOutline } from 'react-icons/io5'




const Products = [{
    img : '/dogFood.png',
    name : 'Breed Dry Dog Food',
    discPrice : '100',
    review : '35',
    stars : '/ThreeStar.png'
},{
    img : '/DSLR Camera.png',
    name : 'CANON EOS DSLR Camera',
    discPrice : '360',
    review : '95',
    stars : '/FourStar.png'
},{
    img : '/laptop.png',
    name : 'ASUS FHD Gaming Laptop',
    discPrice : '700',
    review : '325',
    stars : '/Fivestar.png'
},{
  img : '/bag.png',
  name : 'Gucci duffle bag',
  discPrice : '960',
  RealPrice : "$1160",
  review : '65',
  stars : '/FourHalfStar.png'
},{
    img : '/car.png',
    name : 'Kids Electric Car',
    discPrice : '960',
    off : 'New',
    review : '65',
    stars : '/FiveStar.png',
    circle : '#FB1314'
},{
    img : '/soccers.png',
    name : 'Jr. Zoom Soccer Cleats',
    discPrice : '1160',
    review : '35',
    stars : '/FiveStar.png',
    circle : '#EEFF61'
},{
    img : '/gamepad.png',
    name : 'GP11 Shooter USB Gamepad',
    discPrice : '660',
    off : 'New',
    review : '55',
    stars : '/FourHalfStar.png',
    circle : 'black'
},{
    img : '/jacket.png',
    name : 'Quilted Satin Jacket',
    discPrice : '660',
    review : '55',
    stars : '/FourHalfStar.png',
    circle : '#184A48'
}
]

const OurProduct = () => {
  return (
    <div className='flex gap-4 flex-wrap justify-center gap-y-10 mb-14'>
        {
        Products.map((card) => {
          return (
                <div key={card.name} className="h-[400px]">
                    <div className="bg-[#F5F5F5] w-[280px] h-[300px] pt-3 rounded-xl relative group">
                    <div
                     className={`flex mx-3 ${
                         card.off? "items-start justify-between" : "items-end justify-end" }`}>
                        {card.off && (
                           <span className="offer bg-[#00FF66] px-2 py-1 text-white rounded-md text-sm font-extralight">
                              {card.off}
                           </span>
                         )}
                        <div className="icon flex flex-col gap-2">
                          <span className="bg-white p-2 rounded-full"><FaRegHeart className="size-6" /></span>  
                            <span  className="bg-white p-2 rounded-full"><IoEyeOutline className="size-6" /></span>
                        </div>
                        </div>
                        <div className="img flex items-center justify-center -mt-8">
                            <img src={card.img} alt="" className="" />
                        </div>
                        <div className="bg-black absolute bottom-0 w-full rounded-b-xl block z-10 opacity-0 group-hover:opacity-100">
                            <p className="text-center text-white py-2  "><Link href="/">Add To Cart</Link></p>
                        </div>
                    </div>
                    <div className="title mt-3 flex flex-col">
                      <h3 className="text-lg font-medium">{card.name}</h3>
                      <div className="flex gap-3 my-1">
                        <span className="text-[#DB4444]">${card.discPrice}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <img src={card.stars} alt="" />
                        <span className="text-[#4D566B] text-sm">({card.review})</span>
                      </div>
                      <div className='flex mt-3'>
                      {card.circle && (
                      <div className='flex gap-3 items-center'>
                           <span className="w-[23px] h-[23px] border-2 border-black rounded-full flex items-center justify-center">
                            <span
                            className="w-[17px] h-[17px] border border-white rounded-full"
                            style={{ backgroundColor: card.circle }}
                            ></span>
                          </span>
                          <span className='w-[23px] h-[23px] bg-[#DB4444] rounded-full'></span>
                      </div>
                        
                      )}
                      </div>
                    </div>
                </div>

            )
        })}
    </div>
  )
}

export default OurProduct