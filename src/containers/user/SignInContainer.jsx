import { useCookies } from "react-cookie"
import { useState } from "react";
import SignInForm from "../../components/user/SignInForm";
import { postSignInData } from "../../lib/api/user";
import { useNavigate } from "react-router-dom";
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
    postSignInData(signInData).then(res => {
      alert(res.data.msg)
      setCookie("userData", res.data.data, { path: "/" });
      navigate("/")
      
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