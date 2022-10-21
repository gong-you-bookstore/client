import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
import Nav from '../components/Nav'
import $ from 'jquery'
import { useState } from "react";
import logoColorImg from './../assets/images/logo-color.png'
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [isSignIn, setIsSignIn] = useState(true);

  
  return (
    <>
    <Nav />
    {/* <div className="grey-col-background"> */}
    <header className="header-door">
    <div className="overlay" >



        <div className="login-container flex-col-box container">
        <img 
          src={logoColorImg} 
          className="w120 mb-20 c-p"
          onClick={()=>navigate('/')}
        />

        {
          isSignIn ? (
            <SignInForm setIsSignIn={setIsSignIn} />
          ) : (
            <SignUpForm setIsSignIn={setIsSignIn}/>
          )
        }
        </div>  

        </div>
    </header>

    {/* </div> */}



    
    </>
  )
}

export default LoginPage;