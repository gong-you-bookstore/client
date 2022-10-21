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
      <h1 className="mb-20">Sign In</h1>

      <div className="login-form flex-col-box">
        <label htmlFor="email" className="form-label"></label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Email"
          value={signInData.email}
          onChange={onChangeSignInData}
        />
        <label htmlFor="password" className="form-label"></label>
        <input
          type="password"
          placeholder="Password"
          onChange={onChangeSignInData}
          name="password"
          id="password"
          value={signInData.password}
        />
        <button 
          type="button" 
          onClick={()=>{
            console.log("1")
            // onClickLoginButton()
          }}
          className="mb-20 mt-20 color-btn"
        >
          Login
        </button>


        <p className="message">
          Not registered?{"  "}
          <span>
            <strong
              className="c-p"
              onClick={()=>{
                setIsSignIn(false)
              }}>Create an Account</strong>
          </span>
        </p>
      </div>
    </>
  )
}

export default SignInForm;