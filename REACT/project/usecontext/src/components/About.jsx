import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const About = () => {
    const {theme} = useContext(ThemeContext)
  return (
    <>
    <div className={theme?'bg-green-600 flex justify-center items-center text-5xl text-white p-10 h-100':'bg-blue-600 flex justify-center items-center text-5xl text-white p-10 h-100'}>
      About
    </div>
    </>
  )
}

export default About