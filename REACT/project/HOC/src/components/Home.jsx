import withPage from "../hoc/withPage"
import BaseComponent from "./BaseComponent"


const Homepage = withPage(BaseComponent,"Home")

const Home = ()=>{



return (<>

<Homepage/>

</>)

}


export default Home