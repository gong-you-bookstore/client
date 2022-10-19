import { useEffect } from "react";
import $ from 'jquery';
import Nav from "../components/Nav";
import logoWhiteImg from './../assets/images/logo_row_white.png'
import logoColorImg from './../assets/images/logo-color.png'


const ErrorPage = () => {
  return (
    <>
    <Nav />
    <div className="black-background">
      <div className="error">
      <img src={logoColorImg} className="w150" />
      </div>
      <div className="error" title="404">
        404:<br/>Page Not Found.
      </div>
    </div>
    </>
    
  )
}

export default ErrorPage;