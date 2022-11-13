import SignInContainer from "../containers/user/SignInContainer";
import SignUpContainer from "../containers/user/SignUpContainer";
import $ from 'jquery'
import { useState } from "react";
import logoColorImg from '../assets/images/logo-color.png'
import { customModal } from "../lib/styles";
import Modal from "react-modal";

Modal.setAppElement("#root");



const LoginModal = ({
  isOpen, 
  setOpen
}) => {
  const [isSignIn, setIsSignIn] = useState(true);
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => {
        $("body").css("overflow", "auto");
        setOpen(false);
      }}
      style={customModal}
    >
      <div className="flex-col-box-center">
        <img 
          src={logoColorImg} 
          className="w-120 mb-10 c-p"
          alt="img" 
        />
        {
          isSignIn ? (
            <SignInContainer
              setOpen = {setOpen} 
              setIsSignIn={setIsSignIn}
            />
          ) : (
            <SignUpContainer setIsSignIn={setIsSignIn}/>
          )
        }
        </div>
    </Modal>
  )
}

export default LoginModal;