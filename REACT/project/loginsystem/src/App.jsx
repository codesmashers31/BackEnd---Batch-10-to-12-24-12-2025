import DashBoard from './components/DashBoard'
import Register from './components/Register'
import AppRoute from './routes/AppRoute'
import { lazy, Suspense } from 'react'

const Login = lazy(()=>import("./components/Login"))

const App = () => {
  return (
    <>
    {/* <AppRoute/> */}
    <Register/>


    <div>
      <Suspense fallback={<h1>Loadding...</h1>}>
   
           <Login/>
   
    </Suspense>
     </div>
     <DashBoard/>
    </>
  )
}

export default App