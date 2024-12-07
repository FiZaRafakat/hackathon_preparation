import { VscSend } from "react-icons/vsc";

import { BiLogoFacebook } from "react-icons/bi";
import { TfiTwitter } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import Link from "next/link";

const Footer = () => {
  return (
    <div className='bg-black text-white'>
      <div className="lg:px-28 px-10 border border-white/10">
      <div className='links flex flex-row flex-wrap gap-4 sm:gap-8 md:gap-10 py-10 md:py-20 lg:gap-20 '>
           <div className="logo flex flex-col gap-2 lg:gap-4">
            <h2 className="font-bold text-2xl tracking-wider mb-2">Exclusive</h2>
            <h4 className="md:text-xl text-lg font-medium tracking-wide">Subscribe</h4>
            <div className="lg:space-y-3 space-y-1">
            <p className="lg:text-sm text-xs tracking-wide">Get 10% off your first order </p>
            <div className="border border-white rounded-lg flex px-4 py-2 ">
            <input type="text" className="bg-inherit text-white/40 w-[130px] text-sm placeholder:text-white/40 border-none outline-none" placeholder="Enter your email" />
            <VscSend className="size-5"/>
            </div>
            </div>
           </div>
           <div className="support flex flex-col gap-2 md:gap-4 ">
            <h4 className="md:text-xl text-lg lg:font-semibold tracking-widest mb-2">Support</h4>
            <p className="md:text-sm text-xs tracking-wide cursor-pointer">111 Bijoy sarani,Dhaka,
                <br />
                DH 1515, Bangladesh.
            </p>
            <p className="md:text-sm text-xs tracking-wide cursor-pointer">exclusive@gmail.com</p>
            <p className="md:text-sm text-xs tracking-wide cursor-pointer">+88015-88888-9999</p>
           </div>
           <div className="account flex flex-col gap-2 md:gap-4">
            <h4 className="md:text-xl text-lg lg:font-semibold tracking-widest mb-2">Account</h4>
            <p className="md:text-sm text-xs tracking-wide cursor-pointer">My Account</p>
            <p className="md:text-sm text-xs tracking-wide cursor-pointer">Login/Register</p>
            <p className="md:text-sm text-xs tracking-wide cursor-pointer">Cart</p>
            <p className="md:text-sm text-xs tracking-wide cursor-pointer">Wishlist</p>
            <p className="md:text-sm text-xs tracking-wide cursor-pointer">Shop</p>
           </div>
           <div className="link flex flex-col gap-2 md:gap-4">
            <h4 className="md:text-xl text-lg lg:font-semibold tracking-widest mb-2">Quick Link</h4>
            <p className="md:text-sm text-xs tracking-wide cursor-pointer">Privacy Policy</p>
            <p className="md:text-sm text-xs tracking-wide cursor-pointer">Terms Of Use</p>
            <p className="md:text-sm text-xs tracking-wide cursor-pointer">FAQ</p>
            <p className="md:text-sm text-xs tracking-wide cursor-pointer">Contact</p>
           </div>
           <div className="button flex flex-col gap-2 md:gap-5">
            <h4 className="md:text-xl text-lg lg:font-semibold tracking-widest mb-2">Download App</h4>
            <p className="text-xs text-white/70 tracking-wide ">Save $3 with App New User Only</p>
            <div className='flex gap-3'>
                <div className="qr">
                    <img src="/Qr Code.png" alt="" />
                </div>
                <div className='flex flex-col gap-3'>
                    <div className="GPlay">
                        <img src="googlePlay.png" alt="" />
                    </div>
                    <div className="app">
                        <img src="App-Store.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="icons">
             <nav className="flex justify-center lg:justify-start gap-5">
                <Link href="/">
                <BiLogoFacebook className="size-6" />
                </Link>
                <Link href="/">
                <TfiTwitter className="size-6" />
                </Link>
                <Link href="/">
                <FaInstagram className="size-6" />
                </Link>
                <Link href="/">
                <BiLogoLinkedin className="size-6" />
                </Link>
             </nav>
            </div>
           </div>
        </div>
      </div>

        <div className="copyright flex justify-center py-2 md:py-5">
            <p className="text-white/30 tracking-wider lg:text-sm text-[0.5rem] sm:text-xs">Copyright Fiza 2024.All right reserved</p>
        </div>
    </div>
  )
}

export default Footer