import { useEffect } from "react";
import $ from 'jquery';
import Nav from "../components/Nav";
import logoWhiteImg from './../assets/images/logo_row_white.png'
import logoColorImg from './../assets/images/logo-color.png'


const ErrorPage = () => {
  return (
    <>
    <Nav />
    <div className="grey-col-background">
      <img src={logoColorImg} className="w150" />
      <div className="fc-white fs-32" title="404">
        Page Not Found.
      </div>
    </div>
    </>
    
  )
}

export default ErrorPage;