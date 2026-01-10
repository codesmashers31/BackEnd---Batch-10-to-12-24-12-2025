import { useState } from "react"
import Banner from "./Banner"


const Adding = () => {
const [theme,setTheme] = useState(true)

    const handleclick = ()=>{

        setTheme(!theme)

    }

    const themedata = {
        backgroundColor:theme?"black":"white",
        color:theme?"white":"black",
        padding:"10px"
    }
    
  return (
    <div style={themedata}>
      <div>
        LOGO
      </div>
      <div>
        <a href="">Home</a>
        <button onClick={handleclick} style={{background:"white",color:"black",border:"none"}}>Light</button>
      </div>



      <Banner  mytheme={theme}   />
    </div>
  )
}

export default Adding
