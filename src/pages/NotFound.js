import logoColorImg from './../assets/images/logo-color.png'
import { Hinge } from "react-awesome-reveal";


const NotFound = () => {
  return (
    <>
    <div className="bg-dark-full-vh flex-col-box-center ">
      <Hinge triggerOnce duration="2500">
      <img src={logoColorImg} className="w-150" alt="img" />
      </Hinge>
      <div className="fc-white fs-32" title="404">
        Page Not Found.
      </div>
    </div>
    </>
    
  )
}

export default NotFound;