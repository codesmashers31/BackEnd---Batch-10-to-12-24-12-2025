import { useState } from "react"


const BooleanValues = () => {
    

    const [theme,setTheme] = useState(false)
    const [formdata,setFromdata] = useState("")
    const [savedatas,setSavedatas] = useState([])
    const handleclick = ()=>{

        setTheme(!theme)

    }


    const handlechange = (e)=>{

        const savedata = e.target.value
        setFromdata(savedata)
        setSavedatas([...formdata])
    }

  return (
    <>
    <div>
        <h1>{theme?"This is True":"This is False"}</h1>

       

        {savedatas.map((e,i)=>(
            <p className="bg-amber-300" key={i}>{e}</p>
        ))}
        <input type="text" onChange={handlechange} />
       <button onClick={handleclick}>Chnage the Theme</button>
    </div>
    </>
  )
}

export default BooleanValues