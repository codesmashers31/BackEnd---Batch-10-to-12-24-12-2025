import React, { useEffect, useState } from 'react'
import axios from  'axios'
const App = () => {

  const [formData,setFormData] = useState({name:"",email:"",password:""})

  const [toggle,setToggle] = useState(0)

  const [showData,setShowData] = useState([])

  const [serchdata,setSerchData] = useState("")

  const handlechange = (e)=>{

        const data = e.target.value

        const namedata = e.target.name

        setFormData({...formData,[namedata]:data})


  }

  const handleSubmit = async (e)=>{

    e.preventDefault()
   
    try {

         const res = await axios.post("http://localhost:3000/api/hashed/passwordhash",formData)

    //console.log(res);

    alert(res.data.msg)

   
    
    setFormData({name:"",email:"",password:""})
      
    } catch (error) {

      //console.log(error.response.data.msg);
      alert(error.response.data.msg)
 
    }
   
 

  }



  useEffect(()=>{

   const fetchData = async ()=>{

      try {

        const getdata = await axios.get("http://localhost:3000/api/hashed/getdatanew")
        
       //console.log(getdata);

        setShowData(getdata.data.info)
       

      } catch (error) {

        console.log('something error ',error);
        
        
      }

   }


   fetchData()

  },[formData])


  const search = (e)=>{

setSerchData(e.target.value)

  }


 const filterdata =  showData.filter((e)=>e.name.toLowerCase().includes(serchdata.toLowerCase()))  

// console.log(filterdata);


  return (
    <>
    <h1>Register</h1>
    
      <form onSubmit={handleSubmit}>

        <input type="text" placeholder='enter the name' name='name' value={formData.name} onChange={handlechange} />
        <input type="email" placeholder='enter the email' name='email' value={formData.email} onChange={handlechange} />
        <input type="password" placeholder='enter the password' value={formData.password} name='password' onChange={handlechange} />
        <input type="submit" value={"Register"} />
    </form>
   

   <input type="text" placeholder='Enter the serch name' onChange={search} />
   
   {filterdata.map((e)=>(

     <div key={e._id}>
      <h1>Name:{e.name}</h1>
      <h2>Email:{e.email}</h2>
      <p>Password:{e.password}</p>
    </div>

   ))}
   

   
   <button onClick={()=>setToggle(1)}>Click Nav</button>

   {toggle}
    
     
    </>
  
  )
}

export default App