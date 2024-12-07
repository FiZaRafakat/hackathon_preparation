import Footer from '@/components/Footer'
import Header from '@/components/Header'
import LoginPage from '@/components/LoginPage'
import TopHeader from '@/components/TopHeader'
import React from 'react'

const Page = () => {
  return (
    <div>
        <TopHeader />
        <Header />
        <LoginPage />
        <Footer/>
    </div>
  )
}

export default Page