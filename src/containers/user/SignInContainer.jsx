import { useCookies } from "react-cookie"
import { useState } from "react";
import SignInForm from "../../components/user/SignInForm";
import { sendSignInData } from "../../lib/api/user";
const SignInContainer = ({
  setOpen,
  setIsSignIn
}) => {
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);

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
    sendSignInData(signInData).then(res => {
      alert(res.data.msg)
      setCookie("userData", res.data.data, { path: "/" });
      setOpen(false)
    }).catch(err => {
      alert(err.data.msg)
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