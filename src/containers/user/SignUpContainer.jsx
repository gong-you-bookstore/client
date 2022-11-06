import { useState } from "react";
import SignUpForm from "../../components/user/SignUpForm";

const SignUpContainer = ({
  setIsSignIn
}) => {
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    rePassword: "",
    name: "",
  });
  
  const onChangeSignUpData = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <SignUpForm 
      setIsSignIn = {setIsSignIn}
      signUpData = {signUpData}
      onChangeSignUpData = {onChangeSignUpData}
    />
  )
}

export default SignUpContainer;