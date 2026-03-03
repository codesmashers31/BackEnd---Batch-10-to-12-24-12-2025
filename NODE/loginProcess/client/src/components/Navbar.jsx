import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
const Navbar = () => {


  const navigate = useNavigate()

  const handleClick = ()=>{

    localStorage.removeItem("jwtToken")

     navigate("/")
  }


  return (
   <>
   <div>
    <div>LOGO</div>

    <div>
        <Link to="/">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/dashboard">Dashboard</Link>

        <button onClick={handleClick}>Logout</button>
    </div>
   </div>
   
   </>
  )
}

export default Navbar