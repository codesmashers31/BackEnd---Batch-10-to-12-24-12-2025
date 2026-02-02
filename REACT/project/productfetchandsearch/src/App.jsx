import { useEffect, useState } from "react"


const App = () => {

 const [products,setProducts] = useState([])

 const [search,setSerach] = useState("")

//  const [seletedvalue_new,setSeletedvalue_New] = useState([""])

  
 useEffect(()=>{
  const fetchdata = async ()=>{
     
    const takedata = await fetch("https://dummyjson.com/products?limit=10")
    const changedata = await takedata.json()

    // console.log(changedata.products);
    
    setProducts(changedata.products)

  }
  fetchdata()
 },[])



//  const selectednew = (e)=>{

//   // alert(e.target.value)

//   const seletedvalue = e.target.value

//   //alert(seletedvalue)

//   // setSeletedvalue_New(seletedvalue)

//  }

 

const searchproduct = (e)=>{

    const save = e.target.value

    setSerach(save)

    //alert(search)

}


const filetrData  = products.filter((e)=>e.title.toLowerCase().includes(search.toLowerCase()))

// "One,Two,theree" = "one,two,theree"

// one,two,theree.includes(o) = one,two
console.log(filetrData);


  return (
    <>
    <h1 className="bg-blue-700 text-white p-3 text-center text-2xl">Product Fetch and Search</h1>

    


   <div className="bg-green-600 text-white p-10 flex  gap-15">
    <input onChange={searchproduct} className="p-2 bg-white w-70 rounded text-black" placeholder="Serach the Product"  type="text" />




    {/* <select  required className="p-2 bg-white w-70 rounded text-black">
      <option value=""  selected disabled>Select your Product</option>

      {products.map((e,i)=>(
        <option key={i+1} value={i+1}>{e.category}</option>

      ))}
    </select> */}




    {/* <select className="p-2 bg-white w-70 rounded text-black" required onChange={selectednew}>
      <option value="">Select your Option</option>
      {["Low to High","High to Low"].map((e,i)=>(
        <option key={i+1} value={i+1}>{e}</option>
      ))}
    </select> */}
   </div>
    
    <div className="bg-green-700 h-auto text-white flex flex-wrap p-10 gap-10 items-center">


      {filetrData.map((element)=>(

         <div key={element.id} className="bg-white text-black w-50 h-80 flex flex-col gap-3 p-3 h-auto rounded">
        <img src={element.images} alt="" />
        <h1>{element.title}</h1>
        <p>{element.category}</p>
        <p>{element.price}</p>
        <button className="bg-black text-white p-1 rounded">Add to Cart</button>
      </div>

      ))}
     
    </div>
    </>
  )
}

export default App