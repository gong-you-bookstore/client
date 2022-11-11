import axios from "axios";

const SERVER_URL = "/api"
export const sendSignUpData = async (signUpData) => {
  return await axios({
    method: "post",
    url: `${SERVER_URL}/user/signup`,
    data: signUpData,
  })
};

export const sendSignInData = async (signInData) => {
  return await axios({
    method: "post",
    url: `${SERVER_URL}/user/signin`,
    data: signInData,
  })
}; 