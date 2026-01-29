import { useEffect, useState } from "react"


const Unmount = () => {

    const [time,seTime] = useState(0)

  useEffect(()=>{
    const timer = setInterval(()=>{
        console.log("1 RUnning");

        seTime(time+1)
    },1000)
   
    return ()=>{
        clearInterval(timer)
    }



  },[time])  

  return (
    <>
    <h1>Clienup function</h1>
    <p>Timer:{time}</p>
    </>
  )
}

export default Unmount