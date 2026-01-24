import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <>
    <div className="bg-black text-white p-2 ">
        <div className="flex gap-5 ml-5">
            <Link to="/">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/dashboard">DashBoard</Link>
        </div>
    </div>
    </>
  )
}

export default Navbar