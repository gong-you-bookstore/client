const SignUpForm = ({
  setIsSignIn,
  signUpData,
  onChangeSignUpData,
  onClickSignUpBtn,
  errorMsg
})=>{
  return (
    <>
      <h1 className="mb-20">Sign Up</h1>
      <form className="flex-col-box-center">
        <label htmlFor="email" className="form-label"></label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={signUpData.email}
          onChange={onChangeSignUpData}
          className="input-styled w-100p"
        />
        <label htmlFor="password" className="form-label"></label>

        <input
          id="password"
          name="password"
          type="password"
          autoComplete="off"
          placeholder="Password"
          value={signUpData.password}
          onChange={onChangeSignUpData}
          className="input-styled w-100p"
        />
        <label htmlFor="password" className="form-label"></label>

        <input
          id="rePassword"
          name="rePassword"
          type="password"
          autoComplete="off"
          placeholder="re-Password"
          value={signUpData.rePassword}
          onChange={onChangeSignUpData}
          className="input-styled w-100p"
        />
        <label htmlFor="name" className="form-label"></label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          value={signUpData.name}
          onChange={onChangeSignUpData}
          className="input-styled w-100p"
        />
        <p className="error">{errorMsg}</p>
        <button 
          type="button" 
          onClick={()=>{
            onClickSignUpBtn();
          }}
          className="mb-20 mt-20 color-btn w-100p"
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
      </form>
    </>
  )
}

export default SignUpForm;