import  { useEffect, useState } from 'react'
import UserList from '../components/UserList'



const UserContainer = () => {
//   console.log('Con');
  
    const [user,SetUser] = useState([])

  
    
   
    useEffect(()=>{
        const fetchdatas = async()=>{

            const datafetch = await fetch("https://dummyjson.com/products?limit=5")
            const changedata = await datafetch.json()
            SetUser(changedata.products)

            

        }
        fetchdatas()

       
        
    },[])


return (
    <>
    <UserList senduser = {user}    />
    </>
)

}

export default UserContainer
