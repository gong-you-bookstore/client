import { useEffect } from "react";
import { useState } from "react";
import SignUpForm from "../../components/user/SignUpForm";
import { sendSignUpData } from "../../lib/api/user";

const SignUpContainer = ({
  setIsSignIn
}) => {
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    name: "",
  });
  
  const onChangeSignUpData = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const onClickSignUpBtn = () => {
    sendSignUpData(signUpData).then(res => {
      alert(res.data.msg);
    }).catch(err => {
      alert(err.data.msg);
    })
  }

  return (
    <SignUpForm 
      setIsSignIn = {setIsSignIn}
      signUpData = {signUpData}
      onChangeSignUpData = {onChangeSignUpData}
      onClickSignUpBtn = {onClickSignUpBtn}
    />
  )
}

export default SignUpContainer;