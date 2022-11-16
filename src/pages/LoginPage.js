import SignInContainer from "../containers/user/SignInContainer";
import SignUpContainer from "../containers/user/SignUpContainer";
import { useState } from "react";
import logoColorImg from '../assets/images/logo-color.png'
import { useCookies } from "react-cookie"


const LoginPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);
  
  return (
    <>
      {
        cookies.userData ? (<></>) : (
          <>
          <div className="full-vh-bg flex-col-box-center">
            <div className="flex-col-box-center">
              <img 
                src={logoColorImg} 
                className="w-120 mb-10 c-p"
                alt="img" 
              />
              {
                isSignIn ? (
                  <SignInContainer
                    setIsSignIn={setIsSignIn}
                  />
                ) : (
                  <SignUpContainer setIsSignIn={setIsSignIn}/>
                )
              }
            </div>
          </div>
          </>
        )
      }
    </>
    
  )
}

export default LoginPage;