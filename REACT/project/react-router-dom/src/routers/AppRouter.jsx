import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Contect from '../components/Contect'
import Login from '../components/Login'
import Layout from '../components/Layout'

const AppRouter = () => {
  return (
    <>
    <Routes>

      <Route element={<Layout/>}>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />  
    <Route path='/contect' element={<Contect/>} /> 

      </Route>
 
    <Route path='/login' element={<Login/>} />  
    </Routes>
    </>
  )
}

export default AppRouter
