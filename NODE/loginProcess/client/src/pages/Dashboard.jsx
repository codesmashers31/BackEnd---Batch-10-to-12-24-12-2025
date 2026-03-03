
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Dashboard = () => {

  const [datas,setDatas] = useState([])

const navigate = useNavigate()


useEffect(()=>{

  const token = localStorage.getItem("jwtToken")

  if(!token){

    alert("Ungaluku access Ellai token eruntha vaa")
    navigate("/")
    return
  }

const fetchdata = async()=>{

 try {

   const res = await axios.get("http://localhost:5000/api/auth/dashboard",{headers:{Authorization:token}})
   //console.log(res);
   
  setDatas(res.data.datasnew)
  
 } catch (error) {

  alert(error.response.data.msg)
  localStorage.removeItem("jwtToken")
   navigate("/")
 }

}

fetchdata()

},[])
 




  return (
    <>
    <Navbar />
    <div>DashBoard</div>
    
    {datas.map((e)=>(
     <div key={e._id}> 
      <h1>{e.name}</h1>
    </div>
    ))}
    
    </>
  )
}

export default Dashboard