import { useState } from "react";
import $ from 'jquery'
import SignUpForm from "../../components/user/SignUpForm";
import { postSignUpData } from "../../lib/api/user";

const SignUpContainer = ({
  setIsSignIn
}) => {
  const [errorMsg, setErrorMsg] = useState("");
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
      setErrorMsg("이메일을 입력해주세요.");
      $("#email").focus();
      return;
    }

    if (signUpData.password === "") {
      setErrorMsg("패스워드를 입력해주세요.");
      $("#password").focus();
      return;
    }

    if (signUpData.rePassword === "") {
      setErrorMsg("확인 패스워드를 입력해주세요.");
      $("#rePassword").focus();
      return;
    }

    if (signUpData.name === "") {
      setErrorMsg("이름을 입력해주세요.");
      $("#name").focus();
      return;
    }

    if (signUpData.password !== signUpData.rePassword) {
      setErrorMsg("비밀번호와 확인 비밀번호가 같지 않습니다.");
      setSignUpData({
        ...signUpData,
        password: "",
        rePassword: "",
      });
      $("#password").focus();
      return;
    }
    postSignUpData(signUpData).then(res => {
      alert(res.data.msg);
      setIsSignIn(true)
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
      errorMsg = {errorMsg}
    />
  )
}

export default SignUpContainer;