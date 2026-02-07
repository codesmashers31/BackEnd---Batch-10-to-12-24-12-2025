import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Register from '../components/Register'
import Login from '../components/Login'
import DashBoard from '../components/DashBoard'
import ContentNav from '../components/ContentNav'

const AppRoute = () => {
  return (

  <>
   
    <Routes>
      
      <Route path='/' element={<Register/>}  />
      <Route path='/login' element={<Login/>}  />
      <Route element={<ContentNav/>}>
      <Route path='/dashboard' element={<DashBoard/>}  />         
      </Route>
      

    </Routes>
  </>
  )
}

export default AppRoute