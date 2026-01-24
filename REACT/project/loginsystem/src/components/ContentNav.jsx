import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const ContentNav = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default ContentNav