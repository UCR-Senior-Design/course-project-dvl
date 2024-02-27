import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Navbar from './NavBar'
import Starting from './Starting'
import HomePage from './HomePage'

const MainLayout = ({ children }) => {
  return (
    <div>
          <Starting/>
          <Navbar/>
          {children}
    </div>
  )
}

export default MainLayout