import { apiClient } from ".";

/**
 * 회원가입
 * @param {string[]} signUpData 
 * @returns 
 */
export const postSignUpData = async (signUpData) => {
  return await apiClient({
    method: "post",
    url: `/user/signup`,
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
    url: `/user/signin`,
    data: signInData,
  })
}; 

/**
 * 유저 정보 조회
 * @param {*} accessToken 
 * @returns 
 */
export const getUserInfo = async (accessToken) => {
  return await apiClient({
    method: "get",
    url: 'user/info',
    headers: {
      'X-AUTH-TOKEN': accessToken
    }
  })
}

/**
 * 이메일 중복 검사
 * @param {*} email 
 * @returns 
 */
export const checkDuplicatedEmail = async (email) => {
  return await apiClient({
    method: "get",
    url: `user/check?email=${email}`,
  })
}