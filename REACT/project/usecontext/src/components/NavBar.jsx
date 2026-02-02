
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from '../context/ThemeContext'

const NavBar = () => {

const {changeTheme,theme} = useContext(ThemeContext)


  return (
    <>
    <div className={theme?'bg-black text-white p-4 flex justify-between items-center':'bg-blue-500 text-white p-4 flex justify-between items-center'}>
        <div className=''>
           <h1>Logo</h1>
        </div>
        <div className='flex gap-10 justify-center items-center'>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <button onClick={changeTheme} className={theme?'bg-white rounded w-50 text-black p-2':'bg-black rounded w-50 text-white p-2'}>{theme?"Light":"Dark"}</button>
        </div>

       
    </div>
    </>
  )
}

export default NavBar