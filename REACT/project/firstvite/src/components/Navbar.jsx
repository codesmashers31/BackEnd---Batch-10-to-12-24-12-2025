
import { Link } from 'react-router-dom'

const Navbar = () => {

   
 
    const a = 12


  return (
   <>
   <Link to={`/home/${a}`}>Move to new</Link>
   </>
  )
}

export default Navbar
