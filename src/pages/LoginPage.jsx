import SignInContainer from '../containers/user/SignInContainer';
import SignUpContainer from '../containers/user/SignUpContainer';
import { useState } from 'react';
import logoColorImg from '../assets/images/logo-color.png';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();
  const [cookies] = useCookies(['userData']);
  return (
    <>
      {cookies.userData ? (
        <></>
      ) : (
        <>
          <div className="full-vh-bg flex-col-box-center">
            <div className="flex-col-box-center">
              <img
                src={logoColorImg}
                className="w-120 mb-10 c-p"
                alt="img"
                onClick={() => {
                  navigate('/');
                }}
              />
              {isSignIn ? <SignInContainer setIsSignIn={setIsSignIn} /> : <SignUpContainer setIsSignIn={setIsSignIn} />}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default LoginPage;
