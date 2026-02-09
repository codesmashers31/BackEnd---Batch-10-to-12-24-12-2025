import './App.css'
import Useid_Value from './components/Useid_Value'

const App = () => {
  return (
    <>
   <div style={{backgroundColor:"black",gap:20, display:"flex",flexDirection:"column",justifyContent:"center",color:"white", padding:"50px"}}>
     <h1>App Other Hooks</h1>
     <h2>UseID</h2>
     <h2>UseTransition</h2>
      <h2>useDeferredValue</h2>
      <h2>useImperativeHandle</h2>
   </div>

   <div>
    <Useid_Value/>
   </div>
    </>
  )
}

export default App