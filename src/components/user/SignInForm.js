const SignInForm = ({
  setIsSignIn,
  signInData,
  onChangeSignInData,
  onClickSignInBtn
})=>{
  return (
    <>
      <h1 className="mb-20">Sign In</h1>
      <form className="flex-col-box-center">
        <label htmlFor="email" className="form-label"></label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Email"
          value={signInData.email}
          onChange={onChangeSignInData}
          className="input-styled w-100p"
        />
        <label htmlFor="password" className="form-label"></label>
        <input
          type="password"
          placeholder="Password"
          autoComplete="off"
          onChange={onChangeSignInData}
          name="password"
          id="password"
          value={signInData.password}
          className="input-styled w-100p"
        />
        <button 
          type="button" 
          onClick={()=>{
            onClickSignInBtn();
          }}
          className="mb-20 mt-20 color-btn w-100p"
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
      </form>
    </>
  )
}

export default SignInForm;