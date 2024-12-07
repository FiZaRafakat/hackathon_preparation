import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import TopHeader from '@/components/TopHeader'
import React from 'react'

const Page = () => {
  return (
    <div>
        <TopHeader />
        <Header />
        <Contact />
        <Footer/>
    </div>
  )
}

export default Page