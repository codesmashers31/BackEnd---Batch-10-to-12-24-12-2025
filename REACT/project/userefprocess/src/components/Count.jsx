import React, { useRef } from 'react'

const Count = () => {

    const countRef = useRef(null)
    const showRef = useRef()
  
    const handleclick = ()=>{

     countRef.current = countRef.current+1
     
    //  console.log(datas);
     
  

    // console.log(datas);
    

    showRef.current.innerText = countRef.current


    }
  return (
    <>
    <div ref={showRef}></div>
    <button onClick={handleclick} className='bg-amber-400 text-white p-2 w-50 rounded'>Click to Count</button>
    
    </>
  )
}

export default Count