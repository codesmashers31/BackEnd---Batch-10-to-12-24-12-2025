import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"


const Home = () => {

 const {theme} = useContext(ThemeContext)

  return (
    <>
    <div className={theme?'bg-black flex justify-center items-center text-5xl text-white p-10 h-100':'bg-blue-500 flex justify-center items-center text-5xl text-white p-10 h-100'}>
      Home
    </div>
    </>
  )
}

export default Home