"use client"
import Link from 'next/link'
import { LuSearch } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";
import { IoPersonOutline } from "react-icons/io5";
import { usePathname } from 'next/navigation';
import { RiMenu3Line } from "react-icons/ri";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const Header = () => {
 
  const currentPath = usePathname(); 


  // Simulating user authentication state
  const isSignedIn = true; // Change to false to simulate logged-out state


  return (
  <div className='lg:pl-20 lg:pr-28 px-3 border-b-2 sm:px-10 border-[#D9DBE9] md:pb-5 pb-2'>
      <div className='flex  justify-between md:mt-4 mt-2  items-center '>
        <div className="logo">
            <h2 className='text-2xl font-bold'>Exclusive</h2>
        </div>
        <div className='lg:block hidden'>
        <div className="nav">
            <nav className='flex gap-7'>
                <Link href="/"  className={`hover:border-b-2 hover:border-[#D9DBE9] ${currentPath === '/' ? 'border-b-2 border-[#D9DBE9]' : ''}`} id='home' >Home</Link>
                <Link href='/contact' className={`hover:border-b-2 hover:border-[#D9DBE9] ${currentPath === '/contact' ? 'border-b-2 border-[#D9DBE9]' : ''}`}>Contact</Link>
                <Link href="/about" className={`hover:border-b-2 hover:border-[#D9DBE9] ${currentPath === '/about' ? 'border-b-2 border-[#D9DBE9]' : ''}`}>About</Link>
                <Link href='/signup' className={`hover:border-b-2 hover:border-[#D9DBE9] ${currentPath === '/signup' ? 'border-b-2 border-[#D9DBE9]' : ''}`}>Sign Up</Link>
            </nav>
        </div>
        </div>
        <div className='lg:block hidden'>
        <div className="icon flex items-center gap-5 ">
          {/* Show only search section on signup page */}
          { currentPath === "/signup" || currentPath === "/Login" ? (
            <div className="search flex items-center">
              <input 
                type="text" 
                placeholder='What are you looking for?' 
                className='bg-[#f5f5f5] text-sm py-2 px-4 w-[250px] rounded-lg' 
              />
              <LuSearch className='size-5 -translate-x-10' />
            </div>
          ) : (
            <div className="icon flex items-center gap-5">
              {/* Search Section */}
              <div className="search flex items-center">
                <input 
                  type="text" 
                  placeholder='What are you looking for?' 
                  className='bg-[#f5f5f5] text-sm py-2 px-4 w-[250px] rounded-lg' 
                />
                <LuSearch className='size-5 -translate-x-10' />
              </div>
               {/* Wishlist and Cart Icons */}
               <Link href="/whishlist"> <CiHeart className='size-7' /></Link>
              <Link href="/cart"><PiShoppingCartLight className='size-7' /></Link>

              {/* User Icon: Only show when signed in, and not on the Home page */}
              {isSignedIn && currentPath !== '/' && (
                <Link href="/account">
                  <span className='p-2 bg-[#DB4444] rounded-full flex text-white'>
                    <IoPersonOutline className='size-5' />
                  </span>
                </Link>
              )}
            </div>
          )}
        </div>
        </div>
        <div className='lg:hidden block'>
          <Sheet>
            <SheetTrigger className='flex items-center'><RiMenu3Line className='size-7'/></SheetTrigger>
            <SheetContent className='flex flex-col-reverse gap-10 justify-center items-center '>
              <SheetHeader className='space-y-5'>
                 <SheetTitle><Link href="/"  className={`hover:border-b-2 hover:border-[#D9DBE9] ${currentPath === '/' ? 'border-b-2 border-[#D9DBE9]' : ''}`} id='home' >Home</Link></SheetTitle>
                 <SheetTitle><Link href='/contact' className={`hover:border-b-2 hover:border-[#D9DBE9] ${currentPath === '/contact' ? 'border-b-2 border-[#D9DBE9]' : ''}`}>Contact</Link></SheetTitle>
                 <SheetTitle><Link href="/about" className={`hover:border-b-2 hover:border-[#D9DBE9] ${currentPath === '/about' ? 'border-b-2 border-[#D9DBE9]' : ''}`}>About</Link></SheetTitle>
                 <SheetTitle><Link href='/signup' className={`hover:border-b-2 hover:border-[#D9DBE9] ${currentPath === '/signup' ? 'border-b-2 border-[#D9DBE9]' : ''}`}>Sign Up</Link></SheetTitle>
              </SheetHeader>
              <SheetHeader>
              { currentPath === "/signup" || currentPath === "/Login" ? (
            <div className="search flex items-center">
              <input 
                type="text" 
                placeholder='What are you looking for?' 
                className='bg-[#f5f5f5] text-sm py-2 px-4 w-[250px] rounded-lg' 
              />
              <LuSearch className='size-5 -translate-x-10' />
            </div>
               ) : (
              <div className="icon flex flex-col gap-5">
              {/* Search Section */}
              <div className="search flex items-center">
                <input 
                  type="text" 
                  placeholder='What are you looking for?' 
                  className='bg-[#f5f5f5] text-xs py-2 px-4 w-[200px] outline-none border-none focus:outline-none rounded-lg' 
                />
                <LuSearch className='size-5 -translate-x-8' />
              </div>
               {/* Wishlist and Cart Icons */}
              <div className='flex justify-center mt-5 gap-5'>
              <Link href="/whishlist"> <CiHeart className='size-7 text-[#DB4444]' /></Link>
               <Link href="/cart"><PiShoppingCartLight className='size-7 text-[#DB4444]' /></Link>

              {/* User Icon: Only show when signed in, and not on the Home page */}
              {isSignedIn && currentPath !== '/' && (
                <Link href="/account">
                  <span className='p-2 bg-[#DB4444] rounded-full flex text-white'>
                    <IoPersonOutline className='size-5' />
                  </span>
                </Link>
              )}
              </div>
               </div>
               )}
              </SheetHeader>
           </SheetContent>
          </Sheet>
        </div>
    </div>
  </div>
  )
}

export default Header




// mery khayal sy ye approach theek nhi

// What i want listen carefully first mei jis page py ho ye jo hover effect sy nav mei border AA raha hai ye jn mei jis page mei ho us page mei aye

// or 2nd home page py userIcon show na ho jb user sigup kry to usericon show ho us sy pehly nhi or signup page mei koi icon show na ho just search section show ho 
// jb usersignin kr lei to phir hr page py usericon show ho 


// okay now do it