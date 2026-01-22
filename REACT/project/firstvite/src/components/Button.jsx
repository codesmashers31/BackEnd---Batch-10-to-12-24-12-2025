import React from 'react'
import { useLocation } from 'react-router-dom'

const Button = () => {

  const location = useLocation()

  console.log(location.state);
  
   
  return (
    <div>
      <button>{location.state}</button>
    </div>
  )
}

export default Button
