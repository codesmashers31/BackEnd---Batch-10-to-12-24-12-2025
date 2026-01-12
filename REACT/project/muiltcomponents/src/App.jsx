import { Link } from "react-router-dom"

import AppRoute from "./routes/AppRoute"


const App = () => {
  return (
  <>
  <NavBar/>
  <AppRoute/>
  </>
  )
}

export default App



const NavBar = ()=>{
  return (
    <>
    <div className="bg-black text-white p-4 flex justify-between items-center">
      <div>
        LOGO
      </div>
      <div className="flex gap-10">
        <Link to="/" className="bg-white p-1 text-black rounded hover:bg-amber-300 hover:text-black">Home</Link>
        <Link to="/about" className="bg-white p-1 text-black rounded hover:bg-amber-300 hover:text-black">About Movie</Link>
        <Link to="/booking" className="bg-white p-1 text-black rounded hover:bg-amber-300 hover:text-black">Booking</Link>
      </div>
    </div>
    </>
  )
}