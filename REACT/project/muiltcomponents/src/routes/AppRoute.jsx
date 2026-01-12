import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Booking from '../pages/Booking'
import UserShowing from '../pages/UserShowing'



const AppRoute = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/about' element={<UserShowing/>}  />
        <Route path='/booking' element={<Booking/>}  />
    </Routes>
    </>
  )
}

export default AppRoute
