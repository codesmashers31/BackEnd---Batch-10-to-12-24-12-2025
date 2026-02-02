import { useState } from "react"
import ThemeContext from "../context/ThemeContext"


const ThemeProvider = ({children}) => {

const [theme,setTheme] = useState(true)

 const changeTheme = ()=>{

    setTheme(!theme)

 }



  return (

    <ThemeContext.Provider value={{changeTheme,theme}}>
         {children}
    </ThemeContext.Provider>
   
  )
}

export default ThemeProvider