import  { useEffect, useState } from 'react'

const Mount = () => {

  const [datas,setDatas] = useState(0)

  console.log('Compoented Running...');


    const changedata = ()=>{

  console.log('Inside UseEffect Running');

    setDatas(datas+1)

  }


  
useEffect(()=>{

  console.log('useEffect running',datas);
  

},[datas])



  return (
    <>

    <h1 className='bg-blue-600 text-white text-center text-2xl'>UseEffect</h1>
    <p className='bg-blue-600 text-white text-center text-2xl'>{datas}</p> 
    <button className='bg-black text-white rounded p-2 w-40' onClick={changedata}>Update The value</button>
    </>
  )
}

export default Mount




