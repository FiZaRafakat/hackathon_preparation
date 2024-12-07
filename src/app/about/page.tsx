import About from '@/Components/About'
import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import Member from '@/Components/Member'
import PromotionLine from '@/Components/PromotionLine'
import SecFooter from '@/Components/SecFooter'
import TopHeader from '@/Components/TopHeader'
import React from 'react'

const Page = () => {
  return (
    <div>
        <TopHeader />
        <Header/>
        <About/>
        <PromotionLine />
        <div className='lg:block hidden'>
        <Member />
        </div>
        <SecFooter />
        <Footer />
    </div>
  )
}

export default Page