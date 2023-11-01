import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Layout } from './layout/Layout'
import { Preview } from './layout/Preview'

const MainLayout = ({ children }) => {
  return (
    <div>
        <Header />
          {children}
        <div className='w-full h-full flex pb-1'>
          <Layout />
          <Preview />
        </div>
        <Footer />
    </div>
  )
}

export default MainLayout