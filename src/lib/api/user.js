import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const postSignUpData = async (signUpData) => {
  return await axios({
    method: "post",
    url: `${SERVER_URL}/user/signup`,
    data: signUpData,
  })
};

export const postSignInData = async (signInData) => {
  return await axios({
    method: "post",
    url: `${SERVER_URL}/user/signin`,
    data: signInData,
  })
}; 