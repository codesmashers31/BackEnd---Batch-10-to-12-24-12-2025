import { useEffect, useState } from "react"


const useFetchData = (url) => {

    const [products,setProducts] = useState([])

    useEffect(()=>{
        const fetchdata = async ()=>{

          try {

             const fetchres =  await fetch(url)
             const change = fetchres.json()
             setProducts(change)
            
          } catch (error) {

            console.log('error',error);
            
            
          }

        }

    fetchdata()


    },[url])






  return products
}

export default useFetchData