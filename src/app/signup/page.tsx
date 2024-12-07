import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SignUp from '@/components/SignUp'
import TopHeader from '@/components/TopHeader'
import React from 'react'

const Page = () => {
  return (
    <div>
        <TopHeader />
        <Header />
        <SignUp />
        <Footer/>
    </div>
  )
}

export default Page