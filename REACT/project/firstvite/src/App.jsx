import { Component } from 'react' 
import { Route, Routes } from 'react-router-dom';
import ImagesAdding from './components/ImagesAdding';
import Navbar from './components/Navbar';

class App extends Component{

constructor(props){
    console.log('Compoent');
  super(props)
  this.state = {
      
    count:0

  }
  
}

componentDidMount(){
  console.log('This is Mounting');
  
}

increment = ()=>{
  this.setState({count:this.state.count+1})
}


componentDidUpdate(){
  console.log('This is Update');
  
}

componentWillUnmount(){
  console.log('Unmount');
}


render(){
  return (
    <>

    <Navbar/>

    <Routes>

      <Route path='/home/:id' element={<ImagesAdding/>} />
    </Routes>
    <h1>Data:{this.state.count}</h1>

    <button onClick={this.increment}>Click Count</button>
    
    </>
  )
}


}

export default App