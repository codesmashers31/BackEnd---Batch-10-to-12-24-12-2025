import React from 'react'

const Button = ({text}) => {



const handleclick = ()=>{
    alert('button')
}
  return (
    <button className='bg-black text-white p-2 w-30' onClick={handleclick}>{text}</button>
  )
}

export default Button
