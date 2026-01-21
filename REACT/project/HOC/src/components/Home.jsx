import React from 'react'
import BahavanKeesari from './BahavanKeesari'

import withAlert from '../hoc/withAlert'
import Button from './Button'
import withText from '../hoc/withText'


const Jananayagan_Com = withAlert(BahavanKeesari)

const Mytextnew = withText(Button)

const Home = () => {

  const onclick = ()=>{
    alert("Text")
  }

  return (

    <>
    

    <div>
      <BahavanKeesari text={"This is BahavanKeesari"}     />
      <Jananayagan_Com text={"This is Jananayagan"}  />
    </div>


    <Button text={"This is My button"}     />
    
   <div></div>

    <Mytextnew text="This is my new enhance" onclinew = {onclick}  />
    </>

  )
}

export default Home
