import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import About from './About'

const Layout = () => {
  return (
    <>
     <NavBar/>
     <Outlet/>
   
    </>
  )
}

export default Layout