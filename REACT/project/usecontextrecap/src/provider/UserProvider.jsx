import { useState } from 'react'
import UserContext from '../context/UserContext'

const UserProvider = ({children}) => {

console.log('this is error');

const [count,setCount] = useState(1)

const handlechange = ()=>{

    setCount(count+1)

}


  return (<>
    <UserContext.Provider value={{count,handlechange}}>
        {children}
    </UserContext.Provider>
  </>)
 
}

export default UserProvider