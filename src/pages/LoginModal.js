import SignInContainer from "../containers/user/SignInContainer";
import SignUpContainer from "../containers/user/SignUpContainer";
import $ from 'jquery'
import { useState } from "react";
import logoColorImg from '../assets/images/logo-color.png'

import Modal from "react-modal";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    backgroundColor: "#fff",
    color: "#333",
    // margin: "10px",
    marginLeft: "auto",
    marginRight: "auto",
    border: "none",
    borderRadius: "20px",
    outline: "none",
    padding: "50px 40px",
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.4)",
    display: "-webkit-box",
    display: "-ms-flexbox",
    display: "-webkit-flex",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    zIndex:"99",

  },
};

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
      style={customStyles}
    >
      <div className="flex-col-box-center">
        <img 
          src={logoColorImg} 
          className="w-120 mb-10 c-p"
          alt="img" 
        />
        {
          isSignIn ? (
            <SignInContainer setIsSignIn={setIsSignIn} />
          ) : (
            <SignUpContainer setIsSignIn={setIsSignIn}/>
          )
        }
        </div>
    </Modal>
  )
}

export default LoginModal;