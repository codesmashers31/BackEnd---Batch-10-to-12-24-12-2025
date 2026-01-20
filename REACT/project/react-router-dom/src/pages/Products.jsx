import { Link } from "react-router-dom"

const Products = () => {

  const productslist = [{id:1,productName:"Mobile",productprice:2000},
    {id:2,productName:"Laptop",productprice:1000},
    {id:3,productName:"keyboard",productprice:3000}]





  return (
    <>
    <div className="text-center text-3xl font-bold mt-10"> 
        This is Products Page   
    </div>

    <div className="bg-blue-600 text-white p-10 h-100 flex justify-between items-center">
         {productslist.map((e)=>(
             <div className="bg-white text-black p-4 h-50 w-50 rounded flex flex-col gap-10" key={e.id}>
            <h1>{e.productName}</h1>
            <p>{e.productprice}</p>
            <Link to={`/productdetails/${e.id}`} className="bg-black rounded text-white p-2">See More</Link>
          </div>
         ))}
    </div>
    </>
  )
}   
export default Products