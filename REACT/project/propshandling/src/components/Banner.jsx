

const Banner = ({mytheme}) => {

 
console.log(mytheme);


      const themedata = {
        backgroundColor:mytheme?"black":"white",
        color:mytheme?"white":"black",
        padding:"10px",
        height:"100vh"
    }
     
  return (
    <div style={themedata}>
      I am Banner
    </div>
  )
}

export default Banner


Banner.defaultProps = {

    mytheme:true

}