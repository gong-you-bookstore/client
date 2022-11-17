import { useState } from "react";
import $ from 'jquery'
import SignUpForm from "../../components/user/SignUpForm";
import { postSignUpData } from "../../lib/api/user";
import { toastMaker } from "../../lib/utils";
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

  const onClickSignUpBtn = () => {
    if (signUpData.email === "") {
      toastMaker.error("이메일을 입력해주세요.");
      $("#email").focus();
      return;
    }

    if (signUpData.password === "") {
      toastMaker.error("패스워드를 입력해주세요.");
      $("#password").focus();
      return;
    }

    if (signUpData.rePassword === "") {
      toastMaker.error("확인 패스워드를 입력해주세요.");
      $("#rePassword").focus();
      return;
    }

    if (signUpData.name === "") {
      toastMaker.error("이름을 입력해주세요.");
      $("#name").focus();
      return;
    }

    if (signUpData.password !== signUpData.rePassword) {
      toastMaker.error("비밀번호와 확인 비밀번호가 같지 않습니다.");
      setSignUpData({
        ...signUpData,
        password: "",
        rePassword: "",
      });
      $("#password").focus();
      return;
    }
    postSignUpData(signUpData).then(response => {
      toastMaker.success(response.data.msg);
      setIsSignIn(true)
    }).catch(error => {
      toastMaker.error(error.data.msg);
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