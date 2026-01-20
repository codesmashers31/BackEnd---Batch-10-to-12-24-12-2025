import { FaHandLizard } from "react-icons/fa"
import { useNavigate, useParams } from "react-router-dom"

const ProductDetails = () => {

  const navigate = useNavigate()
    const {id} = useParams()

    //alert(id)

    const title = "Details Page"

  const productdetails = [{id:1,productName:"Mobile",productprice:2000},
    {id:2,productName:"Laptop",productprice:1000},
    {id:3,productName:"keyboard",productprice:3000}]

 

    const result = productdetails.find((e)=>e.id === parseInt(id))

   //console.log(result);
   
  
   const hechange = (userid)=>{

    alert(userid)

 navigate("/payment", {state:userid})

   }
  return (
    <div className="text-center text-3xl font-bold mt-10"> 
         
   {title}
        <h1>{result.productName}</h1>
        <p>{result.productprice}</p>
        <button onClick={()=>hechange(result.id)} className="bg-black p-2 w-30 text-center text-white">Buy Now</button>
    </div>
  )
}   
export default ProductDetails