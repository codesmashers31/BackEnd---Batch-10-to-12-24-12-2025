import { useRef } from "react"


const RefProcess = () => {
   console.log('This componented is Updated');
   
    const title = useRef(null)
    const myinputRef = useRef("")
   const data = useRef("")
    const handleClick = ()=>{

        console.log(title.current);

        title.current.innerText = "This is Data Change Not Rerender the compoennet"
        title.current.style.color = "blue" 

    }
    

    const handlechange = ()=>{

        const mydatas = myinputRef.current.value

        //alert(mydatas)
        data.current.innerText = mydatas
        data.current.style.color = "blue"
    }
    

  return (
    <>
    <h1 ref={title}>This is Ref</h1>
    <button className="m-3 p-2 bg-blue-600 text-white text-center rounded"  onClick={handleClick}>This is My Ref</button>
    
    <p ref={data}></p>
    <input onChange={handlechange} ref={myinputRef} type="text" className="bg-black text-white rounded w-80 h-10 p-2" />
   
    </>
  )
}

export default RefProcess