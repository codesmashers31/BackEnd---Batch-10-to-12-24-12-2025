import React, { useEffect, useState } from 'react'

const Products = () => {
   

    console.log('Component running');
    
    const [product,setProduct] = useState([])
   

        const fetchdatas = async()=>{
        try {

            const res = await fetch("https://dummyjson.com/products?limit=4")
            if(!res.ok){
                throw new Error("Data Fecting issue")
            }

         const data = await res.json()
         setProduct(data.products)

        } catch (error) {

            console.log('Something error',error);
            
            
        }
    }




useEffect(()=>{

console.log('UseEffect Running');

      
    fetchdatas()

    console.log('data running');
    
    
},[])


  return (
    <>
    <div className='bg-blue-600 flex justify-between items-center text-white p-10 h-auto'>
        {product.map((e)=>(

            <div key={e.id} className='bg-white p-3 w-50 h-100 flex rounded flex-col gap-4 text-black'>
           <img src={e.images} alt="" />
           <h1>{e.title}</h1>
           <p>{e.category}</p>
           <p>{e.price}</p>
           <button className='bg-black text-white p-1 rounded'>Buy Now</button>
        </div>

        ))}
       
    </div>
    </>
  )
}

export default Products