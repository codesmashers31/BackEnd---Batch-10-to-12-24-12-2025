import ProductShow from "./components/ProductShow"
import useFetchData from "./hooks/useFetchData"

const App = () => {

 const {count,increment,decrement,reset} = useFetchData(10)

  return (
    <>
    <div>
      <h1>Custome Hooks</h1>
      <p>{count}</p>
      <button onClick={increment}>increment</button>
       <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
    </div>


<hr />
    <ProductShow/>
    </>
  )
}

export default App