import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
const Login = () => {

  const [formdatas,setFormData] = useState({email:"",password:""})
    const navigate = useNavigate() 
    const handleChange = (e)=>{

      const {name,value} = e.target
      
      setFormData({...formdatas,[name]:value})


    }
   
    const handleSubmit = (e)=>{

        e.preventDefault()
     
        
       const takedata = JSON.parse(localStorage.getItem("regsiterdata"))

       if(takedata.email === formdatas.email && takedata.password === formdatas.password){
        setFormData({username:"",email:"",password:""})
        navigate('/dashboard')
       }else{
        alert("Invalid Data use The correct Datas on you login")
       }
      
       
        

        

    }

  return (
    <>
    <p>
      <Link to={"/"}>Back</Link>
    </p>
    <form className="p-10 bg-green-500" onSubmit={handleSubmit}>
        <input onChange={handleChange} className="bg-black rounded text-white ml-4" type="email" name="email" value={formdatas.email} placeholder="Enter the Email" />
        <input onChange={handleChange} className="bg-black rounded text-white ml-4" type="password" name="password" value={formdatas.password} placeholder="Enter the Password" />
        <input  className="bg-black rounded p-2 text-white ml-4" type="submit" value={"Register"} />
    </form>
    </>
  )
}

export default Login