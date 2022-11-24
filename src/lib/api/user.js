import { apiClient } from ".";

/**
 * 회원가입
 * @param {string[]} signUpData 
 * @returns 
 */
export const postSignUpData = async (signUpData) => {
  return await apiClient({
    method: "post",
    url: `user/signup`,
    data: signUpData,
  })
};

/**
 * 로그인
 * @param {*} signInData 
 * @returns 
 */
export const postSignInData = async (signInData) => {
  return await apiClient({
    method: "post",
    url: `user/signin`,
    data: signInData,
  })
}; 