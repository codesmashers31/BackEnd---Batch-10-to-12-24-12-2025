
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import LogContext from '../pages/context/LogContext'

const Navbar = () => {

   const {userdata} = useContext(LogContext)
 
    const a = 12


  return (
   <>
   {userdata}
   <Link to={`/home/${a}`}>Move to new</Link>
   </>
  )
}

export default Navbar
