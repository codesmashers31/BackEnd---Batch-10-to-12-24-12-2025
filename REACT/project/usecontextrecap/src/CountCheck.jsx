import React, { useContext } from 'react'
import UserContext from './context/UserContext'

const CountCheck = () => {
 
    const {count} = useContext(UserContext)


  return (
    <>
    <div>Count Check</div>
    {count===1?count+10:count}
    <div>CountCheck</div>
    </>
  )
}

export default CountCheck