import { useCookies } from "react-cookie"
import { useState } from "react";
import SignInForm from "../../components/user/SignInForm";
import { postSignInData } from "../../lib/api/user";
import { useNavigate } from "react-router-dom";
import { toastMaker } from "../../lib/utils";
import $ from 'jquery'
const SignInContainer = ({
  setIsSignIn
}) => {
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);

  const navigate = useNavigate();
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

  const onClickSignInBtn = () => {
    if (signInData.email === "") {
      toastMaker.error("이메일을 입력해주세요.");
      $("#email").focus();
      return;
    }

    if (signInData.password === "") {
      toastMaker.error("패스워드를 입력해주세요.");
      $("#password").focus();
      return;
    }

    postSignInData(signInData).then(response => {
      toastMaker.success(response.data.msg);
      setCookie("userData", response.data.data, { path: "/" });
      navigate("/")
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <SignInForm 
      setIsSignIn = {setIsSignIn}
      signInData = {signInData}
      onChangeSignInData = {onChangeSignInData}
      onClickSignInBtn = {onClickSignInBtn}
    />
  )
}

export default SignInContainer;