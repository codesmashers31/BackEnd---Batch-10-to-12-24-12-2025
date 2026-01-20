import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Contect from '../components/Contect'
import Login from '../components/Login'
import Layout from '../components/Layout'
import Products from '../pages/Products'
import ProductDetails from '../pages/ProductDetails'

const AppRouter = () => {
  return (
    <>
    <Routes>

      <Route element={<Layout/>}>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />  
    <Route path='/contect' element={<Contect/>} /> 


      </Route>
    <Route path='/Products' element={<Products/>} />
     <Route path='/productdetails/:id' element={<ProductDetails/>} />
    <Route path='/login' element={<Login/>} />  
    </Routes>
    </>
  )
}

export default AppRouter
