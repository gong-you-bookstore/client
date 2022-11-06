import { useState } from "react";
import SignInForm from "../../components/user/SignInForm";

const SignInContainer = ({
  setIsSignIn
}) => {
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const onChangeSignInData = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <SignInForm 
      setIsSignIn = {setIsSignIn}
      signInData = {signInData}
      onChangeSignInData = {onChangeSignInData}
    />
  )
}

export default SignInContainer;