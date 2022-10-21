import { useState } from "react";


const SignUpForm = ({setIsSignIn})=>{
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

  return (
    <>
      <h1 className="mb-20">Sign Up</h1>
      <div className="login-form flex-col-box">
      
        <label htmlFor="password" className="form-label"></label>

        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={signUpData.email}
          onChange={onChangeSignUpData}
        />
        <label htmlFor="password" className="form-label"></label>

        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={signUpData.password}
          onChange={onChangeSignUpData}
        />
        <label htmlFor="password" className="form-label"></label>

        <input
          id="rePassword"
          name="rePassword"
          type="password"
          placeholder="re-Password"
          value={signUpData.rePassword}
          onChange={onChangeSignUpData}
        />
        <label htmlFor="password" className="form-label"></label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          value={signUpData.name}
          onChange={onChangeSignUpData}
        />
        <button 
          type="button" 
          onClick={()=>{}}
          className="mb-20 mt-20 color-btn"
        >
          Sign Up
        </button>

      <p className="message">
        Already registered?{" "}
        <span>
          <strong
            className="c-p"
            onClick={()=>{
              setIsSignIn(true)
            }}>Let`s Sign In</strong>
        </span>
      </p>
      </div>
    </>
  )
}

export default SignUpForm;