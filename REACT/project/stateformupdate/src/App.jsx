import FromHandling from "./components/FromHandling"
import {ToastContainer} from 'react-toastify' 
import "react-toastify/dist/ReactToastify.css"  

const App = () => {

// // let [title,setTitle] = useState({name:"Muilt Form Handling"})

// // let title = {name:"Muilt Form Handling"}

// // console.log(`beform update : ${title.name}`);

// const handleClick = ()=>{

//   // title.name = "Datas"

//   // console.log(`After  update : ${title.name}`);

//   // setTitle({...title})

//   // console.log(title);
  
  

// }
  return (
    <>
    <h1 className='bg-blue-600 text-white p-2 text-center'>Muilt Form</h1>
    <FromHandling/>





    <ToastContainer/>
    </>
  )
}

export default App