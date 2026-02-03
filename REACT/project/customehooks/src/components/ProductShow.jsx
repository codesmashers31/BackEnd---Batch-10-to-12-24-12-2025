import React, { useState } from 'react'
import useFetchProduct from '../hooks/useFetchProduct'

const ProductShow = () => {
  const [save,setSave] = useState("")
  
 

  const {data} = useFetchProduct("https://dummyjson.com/products?limit=10")

  //console.log('data',data);
  
  

  
  const handlechange = (e)=>{

   setSave(e.target.value)

  }





  

  //console.log(uniqueCat);
  
  
//    const datanew =  data;

   //console.log(data);
   
  const filterdata = data.filter((e)=>e.title.toLowerCase().includes(save.toLowerCase()))
   
  //console.log(filterdata);

const catdata = [...new Set(data.map((e)=>e.category))]

  
   //const catdata = []
  return (
   <>
   <div>
    Product Showing <br /><br />
   <input onChange={handlechange} type="text" placeholder='Enter the title' />

   <select>
    <option selected disabled value="">Select Catogory</option>
   
   {catdata.map((e)=>(
    <option key={e} value={e}>{e}</option>
   ))}

   </select>
    {filterdata.map((e)=>(

        <h1 key={e.id}>{e.title}</h1>
        
    ))}
   </div>
   </>
  )
}

export default ProductShow