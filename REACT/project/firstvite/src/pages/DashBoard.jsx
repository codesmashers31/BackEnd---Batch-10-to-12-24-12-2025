import React from 'react'
import { useContext } from 'react'
import LogContext from './context/LogContext'

const DashBoard = () => {

    const {userdata,changedata} = useContext(LogContext)


  return (
  <>
    <div>DashBoard</div>
e
     {userdata.map((e)=>(
        <h1>{e}</h1>
     ))}
    <button onClick={changedata}>Welcome</button>
  </>
  )
}

export default DashBoard