import axios from "axios";

export const sendSignUpData = async (signUpData) => {
  return await axios({
    method: "post",
    url: `${process.env.REACT_APP_SERVER_URL}/user/signup`,
    data: signUpData,
  })
};

export const sendSignInData = async (signInData) => {
  return await axios({
    method: "post",
    url: `${process.env.REACT_APP_SERVER_URL}/user/signin`,
    data: signInData,
  })
}; 