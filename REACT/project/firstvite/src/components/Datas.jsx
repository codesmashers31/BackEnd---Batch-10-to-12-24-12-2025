import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


const Datas = () => {
 
    const navigate = useNavigate()

    const [datas] = useState(12)
   
    const handlemove = ()=>{

        navigate("/button",{state:datas})

    } 

  return (
   <>
    <div>Datas</div>
    <button onClick={handlemove}>Move data</button>
   </>
    
  )
}

export default Datas