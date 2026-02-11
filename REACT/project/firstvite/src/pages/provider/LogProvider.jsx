import React, { useState } from 'react'
import LogContext from '../context/LogContext'
const LogProvider = ({children}) => {

    const [userdata,setUserData] = useState([1,2,3,4,5,6,7])

  const changedata = ()=>{
    
    
    

     const datas =  userdata.filter((e)=>e%2===0)

     setUserData(datas)
  }


  return (
    <LogContext.Provider value={{userdata,changedata}}>
        {children}
    </LogContext.Provider>
  )
}

export default LogProvider