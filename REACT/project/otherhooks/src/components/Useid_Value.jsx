import { useId, useState } from "react"

const Useid_Value = () => {

    const name_id = useId() 
    const email_id = useId()
    const userid=useId()
    const [form,setForm] = useState({name:"",email:""})
    
    const handleChange = (e)=>{

        setForm({ ...form,[e.target.name]:e.target.value })

    }

   const handleSubmit = (e)=>{

    e.preventDefault()

   const userdata = {

    useriduniqu:userid,
    username:form.name,
    useremail:form.email
   }

   localStorage.setItem("userdatas",JSON.stringify(userdata))
  alert("Succfully done")

   }


  return (
   <>
    <div>Useid_Value</div>
    <form  onSubmit={handleSubmit}>
        <label htmlFor={name_id}>Enter the Name</label>
        <input id={name_id} type="text" name="name"  onChange={handleChange} />
         <label htmlFor={email_id}>Enter the Email</label>
        <input id={email_id} type="text" onChange={handleChange} name="email"  />
        <input type="submit" value={"Register"} />
    </form>
   </>
  )
}

export default Useid_Value