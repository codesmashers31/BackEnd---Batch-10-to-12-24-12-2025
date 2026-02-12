// // import { useMemo, useState } from 'react'

import { useCallback,  useState } from "react"
import Child from "./Child"

// // const App = () => {
 
// //   const [count,setCount] = useState(0)
// //   const [theme,setTheme] = useState(false)


// //   const heavyLoop = (num)=>{

// //     console.log("Heavy Loop Running...");

// //     for(let i=0;i<10000;i++){console.log(i);
// //     }

// //     return num*2
    

// //   }
  
// //   //  const double = heavyLoop(count)
// //   const double = useMemo(()=>heavyLoop(count),[count])

// //   return (
// //     <>
// //      <div className='bg-blue-900 text-white h-100 flex justify-center items-center flex-col gap-5'>
// //       <h1 className='bg-white text-black p-3 w-auto  rounded-full'>{double}</h1>
// //       <button className='bg-white text-black p-2 rounded' onClick={()=>setCount(count+1)}>Click To Double</button>
// //      </div>

     
// //      <div className={theme?'mt-5 p-10 bg-black text-white':'mt-5 p-10 bg-blue-600 text-white'}>
// //         <button onClick={()=>setTheme(!theme)} className='bg-white text-black p-2 rounded'>Theme Change</button>
// //      </div>


// //     </>
// //   )
// // }

// // export default App







// import { useCallback,    useState } from 'react'
// import Child from './Child'

// const App = () => {
 
//   const [count,setCount] = useState(0)
//   const [theme,setTheme] = useState(false)


//   const heavyLoop = (num)=>{

//     console.log("Heavy Loop Running...");

//     for(let i=0;i<10000;i++){console.log(i);
//     }

//     return num*2
    

//   }
  
    
//   // const double = useMemo(()=>heavyLoop(count),[count])


//    const handelchange = useCallback(()=>{

//     heavyLoop(count)
  
//     setCount(count+1)

    
//    },[count])



//   return (
//     <>
//      <div className='bg-blue-900 text-white h-100 flex justify-center items-center flex-col gap-5'>
//       <h1 className='bg-white text-black p-3 w-auto  rounded-full'>{count}</h1>
//       <Child onchnage = {handelchange}   />
//      </div>

     
//      <div className={theme?'mt-5 p-10 bg-black text-white':'mt-5 p-10 bg-blue-600 text-white'}>
//         <button onClick={()=>setTheme(!theme)} className='bg-white text-black p-2 rounded'>Theme Change</button>
//      </div>


//     </>
//   )
// }

// export default App







// import React, { useMemo, useState } from 'react'

// const App = () => {

//   const [theme, setTheme] = useState(false)
//   const [number, setNumber] = useState(0)

//   const themechange = () => {
//     setTheme(!theme)
//   }

//   // 🔥 Heavy calculation
//   const slowFunction = (num) => {
//     console.log("Slow function running...")
//     for (let i = 0; i < 1000000000; i++) {} // delay
//     return num * 2
//   }

//   // ✅ useMemo caches the result
//   const doubleNumber = useMemo(() => slowFunction(number), [number])

//   return (
//     <>
//       <h2>Number: {number}</h2>
//       <h2>Double: {doubleNumber}</h2>

//       {theme ? <h1>Yes this theme</h1> : <p>Theme not change</p>}

//       <button onClick={() => setNumber(number + 1)}>Increase Number</button>
//       <button onClick={themechange}>Change Theme</button>
//     </>
//   )
// }

// export default App






const App = () => {

  const [theme,setTheme] = useState(false)
  const [value,setvalue] = useState(0)

  const slowfunction = (num)=>{

    console.log('Havey Function');
    

     return num*10  
    
  }

  const chnage = useCallback(()=>
    
    slowfunction(value),[value]
  
  )

  return (
    <>
    <h1>{value}</h1>
    <div>{chnage()}</div>

    <Child value={chnage} valueone={value} />

    <button onClick={()=>setvalue(value+1)}>Click to change</button>

    <button onClick={()=>setTheme(!theme)}>theme Change</button>

    {theme?"True":"False"}
    </>


  )
}

export default App