import { useState } from "react";

const SignInForm = ({setIsSignIn})=>{
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
    <>
      <h1>Login</h1>
      <p>등록된 이메일로 로그인을 진행해주세요.</p>

      <div className="login-form">
        <label htmlFor="email" className="form-label">Email address</label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Email"
          value={signInData.email}
          onChange={onChangeSignInData}
        />
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          placeholder="Password"
          onChange={onChangeSignInData}
          name="password"
          id="password"
          value={signInData.password}
        />
        <button type="button" onClick={()=>{
          console.log("1")
          // onClickLoginButton()
        }}>
          login
        </button>


        <p className="message">
          Not registered?{"  "}
          <span>
            <strong
              onClick={()=>{
                setIsSignIn(false)
              }}>Create an account</strong>
          </span>
        </p>
      </div>
    </>
  )
}

export default SignInForm;