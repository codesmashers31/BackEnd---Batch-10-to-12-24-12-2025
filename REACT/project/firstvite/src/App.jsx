import { Component } from 'react' 

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
    <h1>Data:{this.state.count}</h1>

    <button onClick={this.increment}>Click Count</button>
    
    </>
  )
}


}

export default App