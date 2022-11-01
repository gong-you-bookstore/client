import axios from "axios";

export const sendSignUpData = async (signUpData) => {
  return await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/user/signup`, 
    signUpData
  );
};

export const sendSignInData = async (signInData) => {
  return await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/user/signin`, 
    signInData
  );
}; 