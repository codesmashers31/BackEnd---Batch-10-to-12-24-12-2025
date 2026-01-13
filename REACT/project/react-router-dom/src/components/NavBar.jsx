import {NavLink} from 'react-router-dom'

const NavBar = () => {
 

    const baseclass=""



  return (
    <div className='bg-black text-white p-4 flex justify-between items-center'>
      <div>
        Logo
      </div>
      <div className='flex gap-15'>

          <NavLink to="/" className={({isActive})=>isActive?"bg-amber-300 p-2 w-20 text-center rounded text-black":""}>Home</NavLink>
          <NavLink to="/about" className={({isActive})=>isActive?"bg-amber-300 p-2 w-20 text-center rounded text-black":""}>About</NavLink>
          <NavLink to="/contect" className={({isActive})=>isActive?"bg-amber-300 p-2 w-20 text-center rounded text-black":""}>Contect</NavLink>
          <NavLink to="/login"  className={({isActive})=>isActive?"bg-blue-500 text-white p-2 w-30 text-center":""}>Login</NavLink>
      </div>
    </div>
  )
}

export default NavBar
