import { useState } from "react"
import { toast } from "react-toastify"

const FromHandling = () => {

 const [formdata,setFormData] = useState({username:"",mobilenumber:""})
//  const [storeData,setStoreData] = useState({})
 const handleChange = (e)=>{

    const store = e.target.value
    const store_the_name = e.target.name

    setFormData({...formdata,[store_the_name]:store})

    // console.log(formdata);
    

 }


 const handleSubmit = (e)=>{
 
    e.preventDefault()
  
    //setStoreData(formdata)
   

    localStorage.setItem("FormDatassave",JSON.stringify(formdata))

    toast.warning('Succfully done')
    setFormData({username:"",mobilenumber:""})

 }


  return (
    <>
    <div className='bg-gray-200 p-10 h-100 text-center flex justify-center items-center'>
        <div className='bg-white p-2 text-center w-100 flex flex-col justify-center items-center p-2 rounded'>
            <h1 className='text-2xl'>Form Handling</h1>
           <form onSubmit={handleSubmit}  className='flex flex-col my-3'>
             <div className='flex mb-5 items-center gap-5'>
                <label>Enter the Name</label>
                <input placeholder='Enter the Full Name' value={formdata.username} onChange={handleChange} name="username" className='border-1 border-blue-600 h-10 rounded w-60' type="text"  />
             </div>
             <div className='flex mb-5 items-center gap-3'>
                <label>Enter the Mobile</label>
                <input placeholder='Enter the 10 Digit Number' value={formdata.mobilenumber} onChange={handleChange} name="mobilenumber" className='border-1 border-blue-600 h-10 rounded w-60' type="text"  />
             </div>
              <input  className='w-40 ml-30 bg-blue-600 text-white p-2 rounded' type="submit" value={"Register"} />
           </form>

           {/* <h1>{storeData.username},{storeData.mobilenumber}</h1> */}
        </div>
    </div>
    </>
  )
}

export default FromHandling