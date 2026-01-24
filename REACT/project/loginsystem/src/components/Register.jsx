import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Register = () => {
    const [formdatas,setFormData] = useState({username:"",email:"",password:""})
    const navigate = useNavigate() 
    const handleChange = (e)=>{

      const {name,value} = e.target
      
      setFormData({...formdatas,[name]:value})


    }
   
    const handleSubmit = (e)=>{

        e.preventDefault()
     
        localStorage.setItem("regsiterdata",JSON.stringify(formdatas))

        alert("Succfully Done")
       
        setFormData({username:"",email:"",password:""})

        navigate('/login')

    }



  return (
    <>
    <form className="p-10 bg-green-500" onSubmit={handleSubmit}>
        <input onChange={handleChange} className="bg-black rounded text-white ml-4" type="text" name="username" value={formdatas.username} placeholder="Enter the Name" />
        <input onChange={handleChange} className="bg-black rounded text-white ml-4" type="email" name="email" value={formdatas.email} placeholder="Enter the Email" />
        <input onChange={handleChange} className="bg-black rounded text-white ml-4" type="password" name="password" value={formdatas.password} placeholder="Enter the Password" />
        <input  className="bg-black rounded p-2 text-white ml-4" type="submit" value={"Register"} />
    </form>
    </>
  )
}

export default Register