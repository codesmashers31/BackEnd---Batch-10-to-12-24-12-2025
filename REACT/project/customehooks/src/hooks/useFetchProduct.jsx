import  { useEffect, useState } from 'react'

const useFetchProduct = (url) => {


   const [data,setData] = useState([])

   useEffect(()=>{
    const fetchdata = async()=>{

        const res = await fetch(url)
        
        
        const change = await res.json()
        //console.log(change);
        setData(change.products)
        

    }
    fetchdata()
   },[url])




  return {data};
}

export default useFetchProduct