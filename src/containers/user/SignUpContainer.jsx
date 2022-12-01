import { useState } from "react";
import $ from 'jquery'
import SignUpForm from "../../components/user/SignUpForm";
import { postSignUpData, checkDuplicatedEmail } from "../../lib/api/user";
import { toastMaker, isValidateSignUpData } from "../../lib/utils";
const SignUpContainer = ({
  setIsSignIn,
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

  const onClickSignUpBtn = () => {
    if (isValidateSignUpData(signUpData)) {
      checkDuplicatedEmail(signUpData.email).then(response => {
        if (!response.data.success) {
          toastMaker.error("중복된 이메일입니다.");
          $("#email").focus();
          return;
        } else if (response.data.success) {
          postSignUpData(signUpData).then(response => {
            toastMaker.success("환영합니다. 가입 선물로 토큰 3개가 지급되었습니다.");
            setIsSignIn(true)
          }).catch(error => {
            console.log(error)
          })
        }
      }).catch(error => {
        console.log(error)
      })
    }
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