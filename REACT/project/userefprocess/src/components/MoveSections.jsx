import { useRef } from "react"


const MoveSections = () => {

  const secRefOne = useRef()
  const secReftwo = useRef()
  const secRefthree = useRef()
  const secReffour = useRef()
  const movetotop = useRef()
const handleclick = (ref)=>{

    ref.current.scrollIntoView({behavior:"smooth"})

}

  return (
    <>
     <div ref={movetotop}>
    <button onClick={()=>handleclick(secRefOne)} className="bg-amber-300 p-2 w-40 rounded m-3">Section 1</button>
    <button onClick={()=>handleclick(secReftwo)} className="bg-amber-300 p-2 w-40 rounded m-3">Section 2</button>
    <button onClick={()=>handleclick(secRefthree)} className="bg-amber-300 p-2 w-40 rounded m-3">Section 3</button>
    <button onClick={()=>handleclick(secReffour)} className="bg-amber-300 p-2 w-40 rounded m-3">Section 4</button>
     </div>


     <div ref={secRefOne} className="text-center bg-green-600 h-100 flex justify-center items-center text-white text-3xl">
       <section>Setion 1</section>
     </div>


      <div ref={secReftwo} className="text-center bg-blue-600 h-100 flex justify-center items-center text-white text-3xl">
       <section>Setion 2</section>
     </div>

      <div ref={secRefthree} className="text-center bg-orange-600 h-100 flex justify-center items-center text-white text-3xl">
       <section>Setion 3</section>
     </div>


      <div ref={secReffour} className="text-center bg-red-600 h-100 flex justify-center items-center text-white text-3xl">
       <section>Setion 4</section>
     </div>


     <div>
        <button onClick={()=>handleclick(movetotop)} className="bg-amber-300 p-2 w-40 rounded m-3">Move to Top</button>
     </div>
    </>
  )
}

export default MoveSections