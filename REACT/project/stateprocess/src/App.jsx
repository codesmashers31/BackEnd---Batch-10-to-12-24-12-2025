import { useState } from 'react'
import BooleanValues from './components/BooleanValues';

const App = () => {

  console.log('Running...');
  

const [value,setValue] = useState([1,2,3,4,5,6])


const handleclick = ()=>{

  const datas = value.filter((e)=>e%2===0)

  // console.log(datas);
  setValue(datas)

}

  return (
   <>
   <BooleanValues/>
   <h1 onClick={handleclick} className='bg-black text-white p-2 h-20 text-center '>{value}</h1>
   </>
  )
}

export default App
