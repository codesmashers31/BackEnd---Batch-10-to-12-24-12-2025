import { useState } from "react"


const App = () => {

  const [form,setForm] = useState([])
  const [dataform,setDataform] = useState("")

  const handleChange = (e)=>{

    //console.log('This is event object',e);
    const data = e.target.value

    console.log(data);
    

    setForm(data)

  
  }
 

  const handleClick =(e)=>{

    // console.log(form)
    const changearrat = [...form]

    console.log(changearrat);


    const datas = changearrat.filter((e)=>e%2===0)
    
       e.preventDefault()
       

          setDataform(`Even Number - ${datas}`)
              

  }



  return (
    <>
    <div className="bg-blue-700 justify-center items-center flex flex-col gap-10 text-2xl p-5 text-center h-100 text-white font-light">
      <h1>Form Handling</h1>

      <div className="bg-white rounded-2xl w-100  h-60 ">
          <input onChange={handleChange} type="number" className="mb-5 text-center bg-black rounded mt-10 text-white w-50"  placeholder="Enter the Number" />
          <button onClick={handleClick} className="text-white bg-black rounded ml-4 w-30">Check</button>
        <div>
        <h1 className="text-black">This is My Number</h1>
        <p className={form>=18?"text-green-500":"text-red-600"}>{dataform}</p>
      </div>
      </div>
      
    </div>
    </>
  )
}

export default App