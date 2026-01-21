

import logo from '../assets/react.svg'
import Button from './Button'
import withButton from './withButton'


const Buttondata = withButton(Button)

const ImagesAdding = () => {

 

  return (
    <div>
      <img src="./vite.svg" alt="" />
      <img src={logo} alt={logo} />

      {location.state}

      <Button nameprops={"Main Button"}  />
      <Buttondata nameprops={"Click Now"}  />
    </div>
  )
}

export default ImagesAdding
