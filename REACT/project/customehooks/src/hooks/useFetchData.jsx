import { useState } from "react"


const useFetchData = (intialvalue = 0) => {
  
  const [count,setCount] = useState(intialvalue)

  const increment = ()=>{

setCount(count+1)
  }

  const decrement = ()=>{

    setCount(count-1)
    
  }

  const reset = ()=>{

    setCount(intialvalue)
    
  }
  
  
  
    return {increment,decrement,reset,count}


}

export default useFetchData