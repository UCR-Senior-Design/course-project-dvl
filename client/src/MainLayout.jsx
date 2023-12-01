import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Navbar from './NavBar'

const MainLayout = ({ children }) => {

  return (
    <div>
        <Header />
          {children}
        <Footer />
    </div>
  )
}

export default MainLayout