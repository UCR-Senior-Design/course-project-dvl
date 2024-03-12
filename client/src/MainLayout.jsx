import React from 'react'
import Navbar from './NavBar'
import Starting from './Starting'

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