import React, { useRef } from 'react'

const Inputvalidation = () => {
    console.log('c running');
    const inputRef = useRef(null)
    const dispalyRef = useRef(null) 


    const handleclick = ()=>{

      const age =   inputRef.current.value

      if(age%2===0){
        dispalyRef.current.innerText = "Even"
        dispalyRef.current.style.color = "green"
      }else{
        dispalyRef.current.innerText = "Odd Number"
        dispalyRef.current.style.color = "red"
      }

    }
  return (
    <>
    <div className='m-2'>
        <h1 className='mb-2'>Input Validation</h1>
    <input ref={inputRef} type="text" placeholder='Enter The Valid Age only 18+' className='w-100 p-2 m-2 text-black bg-amber-400 ' />
    <button onClick={handleclick} className='bg-black text-white p-2 rounded w-50'>Click To Validate</button>
    <p ref={dispalyRef}></p>
    </div>
    </>
  )
}

export default Inputvalidation