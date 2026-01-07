import { useState } from "react";


const App = ()=>{

 const [title] = useState("This is my Stroy")

  return (<>
  
      <div>
        <h1>Heading   {title}</h1>
        <p></p>
      </div>
  
  </>)

}


export default App;