import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import SignUp from '@/Components/SignUp'
import TopHeader from '@/Components/TopHeader'
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