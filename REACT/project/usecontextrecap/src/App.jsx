import { useContext } from "react"
import UserContext from "./context/UserContext"
import CountCheck from "./CountCheck";


const App = () => {
  console.log('running');
  
  const {count,handlechange} = useContext(UserContext)
 
  

  return (
    <>
    <h1>{count}</h1>
    <button onClick={handlechange}>Click</button>
    {/* <h1>This is proces</h1> */}


    <CountCheck/>
    </>
  )
}

export default App