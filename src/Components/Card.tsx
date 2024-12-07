import Link from "next/link";
import { Fragment, forwardRef } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";

const cards = [
  {
    img: "/gamepag.png",
    name: "HAVIT HV-G92 Gamepad",
    discPrice: "120",
    RealPrice: "160",
    review: "88",
    off: "-40%",
    stars: "/FiveStar.png",
  },
  {
    img: "/keyboard.png",
    name: "AK-900 Wired Keyboard",
    discPrice: "960",
    RealPrice: "1160",
    review: "75",
    off: "-35%",
    stars: "/FourStar.png",
  },
  {
    img: "/gamingMonitor.png",
    name: "IPS LCD Gaming Monitor",
    discPrice: "370",
    RealPrice: "400",
    review: "99",
    off: "-30%",
    stars: "/FourStar.png",
  },
  {
    img: "/comfort-chair.png",
    name: "S-Sereies Comfort Chair",
    discPrice: "375",
    RealPrice: "400",
    review: "99",
    off: "-25%",
    stars: "/FourHalfStar.png",
  },
];

const Card = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div>
      <div ref={ref} className="flex gap-4 mb-10 overflow-x-scroll scrollbar-hide">
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={`row-${index}`}>
            {cards.map((card) => (
              <div key={`${card.name}-${index}`} className="h-[400px]">
                <div className="bg-[#F5F5F5] w-[280px] h-[300px] pt-3 rounded-xl relative group">
                  <div className="flex items-start justify-between mx-3">
                    <span className="offer bg-[#DB4444] px-2 py-1 text-white rounded-md text-sm font-extralight">
                      {card.off}
                    </span>
                    <div className="icon flex flex-col gap-2">
                      <span className="bg-white p-2 rounded-full">
                        <FaRegHeart className="size-6" />
                      </span>
                      <span className="bg-white p-2 rounded-full">
                        <IoEyeOutline className="size-6" />
                      </span>
                    </div>
                  </div>
                  <div className="img flex items-center justify-center -mt-8">
                    <img src={card.img} alt={`Image of ${card.name}`} />
                  </div>
                  <div className="bg-black absolute bottom-0 w-full rounded-b-xl block z-10 opacity-0 group-hover:opacity-100">
                    <p className="text-center text-white py-2">
                      <Link href="/">Add To Cart</Link>
                    </p>
                  </div>
                </div>
                <div className="title mt-3">
                  <h3 className="text-lg font-medium">{card.name}</h3>
                  <div className="flex gap-3 my-1">
                    <span className="text-[#DB4444]">${card.discPrice}</span>
                    <del className="text-[#4D566B]">${card.RealPrice}</del>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={card.stars} alt={`${card.name} rating`} />
                    <span className="text-[#4D566B] text-sm">({card.review})</span>
                  </div>
                </div>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
});

Card.displayName = "Card";

export default Card;