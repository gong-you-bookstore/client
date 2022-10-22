import { useEffect } from "react";
import $ from 'jquery';
import logoWhiteImg from './../assets/images/logo_row_white.png'
import logoColorImg from './../assets/images/logo-color.png'


const ErrorPage = () => {
  return (
    <>
    <div className="bg-full-v flex-col-box ">
      <img src={logoColorImg} className="w-150" />
      <div className="fc-white fs-32" title="404">
        Page Not Found.
      </div>
    </div>
    </>
    
  )
}

export default ErrorPage;