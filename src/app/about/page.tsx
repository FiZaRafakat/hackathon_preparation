import About from '@/components/About'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Member from '@/components/Member'
import PromotionLine from '@/components/PromotionLine'
import SecFooter from '@/components/SecFooter'
import TopHeader from '@/components/TopHeader'
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