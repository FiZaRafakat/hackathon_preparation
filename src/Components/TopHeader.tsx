import Link from 'next/link'
import React from 'react'

const TopHeader = () => {
  return (
    <div className='xl:pl-[18rem] lg:pl-[11rem] px-2 sm:px-10  lg:pr-28 bg-black'>
    <div className='flex  text-white xl:text-base text-xs tracking-wider sm:text-sm py-2 justify-between '>
        <div className='capitalize flex'>
          <p>Summer Sale <span className='md:inline-block hidden'>For All swim suits and free express delivery</span>- OFF 50%! <Link href="/" className='underline-offset-1'>ShopNow</Link></p></div>
        <div><select name="language" id="language" className='bg-inherit outline-none'>
            <option value="Eng">English</option>
            <option value="Urdu">Urdu</option>
            <option value="Turkey">Turkey</option>
            <option value="Chineese">Chineese</option>
            <option value="Hindi">Hindi</option>
            </select></div>
    </div>
    </div>
  )
}

export default TopHeader