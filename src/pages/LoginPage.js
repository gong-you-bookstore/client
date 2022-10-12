import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
import Nav from '../components/Nav'
import $ from 'jquery'
import { useState } from "react";

const LoginPage = () => {

  const [isSignIn, setIsSignIn] = useState(true)

  $('#login-button').click(function(){
    $('#login-button').fadeOut("slow",function(){
      $("#container").fadeIn();
      // TweenMax.from("#container", .4, { scale: 0, ease:Sine.easeInOut});
      // TweenMax.to("#container", .4, { scale: 1, ease:Sine.easeInOut});
    });
  });
  
  $(".close-btn").click(function(){
    // TweenMax.from("#container", .4, { scale: 1, ease:Sine.easeInOut});
    // TweenMax.to("#container", .4, { left:"0px", scale: 0, ease:Sine.easeInOut});
    $("#container, #forgotten-container").fadeOut(800, function(){
      $("#login-button").fadeIn(800);
    });
  });
  
  /* Forgotten Password */
  $('#forgotten').click(function(){
    $("#container").fadeOut(function(){
      $("#forgotten-container").fadeIn();
    });
  });
  return (
    <>
    <Nav />
    <header className="header libraryImg">
      <div className="overlay">
        <div className="login-container">
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



    
    </>
  )
}

export default LoginPage;