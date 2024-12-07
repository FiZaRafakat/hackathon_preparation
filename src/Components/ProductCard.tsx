import Link from 'next/link'
import { FaRegHeart } from 'react-icons/fa'
import { IoEyeOutline } from 'react-icons/io5'

const cards = [
    {
    img : '/coat.png',
    name : 'The north Coat',
    discPrice : '260',
    RealPrice : "$360",
    review : '65',
    stars : '/FiveStar.png'
    },{
    img : '/bag.png',
    name : 'Gucci duffle bag',
    discPrice : '960',
    RealPrice : "$1160",
    review : '65',
    stars : '/FourHalfStar.png'
    },{     
    img : '/cpu cooler.png',
    name : 'RGB Liquid CPU Cooler',
    discPrice : '160',
    RealPrice : "$170",
    review : '65',
    stars : '/FourHalfStar.png'
    },{
    img : '/BookShelf.png',
    name : 'Small BookSelf',
    discPrice : "360",
    review : '65',
    stars : '/FiveStar.png'
    }
]

const ProductCard = () => {
  return (
    <div className="flex gap-4 mb-10 overflow-x-scroll scrollbar-hide">
    {
        cards.map((card)=>{
            return(
                <div key={card.name} className="h-[400px]">
                    <div className="bg-[#F5F5F5] w-[280px] h-[300px] pt-3 rounded-xl relative group">
                        <div className="flex items-end justify-end mx-3">

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
                    <div className="title mt-3">
                      <h3 className="text-lg font-medium">{card.name}</h3>
                      <div className="flex gap-3 my-1">
                        <span className="text-[#DB4444]">${card.discPrice}</span>
                        <del className="text-[#4D566B]">{card.RealPrice}</del>
                      </div>
                      <div className="flex items-center gap-2">
                        <img src={card.stars} alt="" />
                        <span className="text-[#4D566B] text-sm">({card.review})</span>
                      </div>
                    </div>
                </div>
            )
        })
    }
    </div>
  )
}

export default ProductCard