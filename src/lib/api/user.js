import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

/**
 * 회원가입
 * @param {string[]} signUpData 
 * @returns 
 */
export const postSignUpData = async (signUpData) => {
  return await axios({
    method: "post",
    url: `api/user/signup`,
    data: signUpData,
  })
};

/**
 * 로그인
 * @param {*} signInData 
 * @returns 
 */
export const postSignInData = async (signInData) => {
  return await axios({
    method: "post",
    url: `api/user/signin`,
    data: signInData,
  })
}; 