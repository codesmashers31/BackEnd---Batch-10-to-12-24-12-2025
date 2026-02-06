// import { useReducer } from "react"

import { useReducer } from "react"


// const initvalue = 0

// const countReducer = (state,action)=>{

// if(action.type==="INC") return state+1
// if(action.type==="DEC") return state-1
// if(action.type==="RES") return initvalue

// return state;

// }

// const App = () => {

//  const [count,stateDispatch] = useReducer(countReducer,initvalue)



//   return (
//     <>
//     <h1>{count}</h1>
//     <button onClick={()=>stateDispatch({type:"INC"})}>Increment</button>
//     <button onClick={()=>stateDispatch({type:"DEC"})}>Decrement</button>
//     <button onClick={()=>stateDispatch({type:"RES"})}>Reset</button>
//     </>
//   )
// }

// export default App






const initvalue = false


const themeReduce = (state,action)=>{

  if(action.type === "THEME") return !state

  return state

}

const App = () => {

  const [theme,themechange] = useReducer(themeReduce,initvalue)

  return (
    <>
    
   <h1>{theme?"This is ON":"This is Off"}</h1>

   <button onClick={()=>themechange({type:"THEME"})}>{theme?"On":"Off"}</button>

    </>
  )
}

export default App