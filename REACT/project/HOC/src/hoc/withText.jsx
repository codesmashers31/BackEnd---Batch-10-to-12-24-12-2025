import React from 'react'

const withText = (Warpedcom) =>  (props)=> {

    //console.log(Warpedcom);
    
  return <Warpedcom  {...props} />
}

export default withText
