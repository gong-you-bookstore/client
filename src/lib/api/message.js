import { apiClient } from ".";

/**
 * 메시지 전송
 * @param {*} accessToken 
 * @param {*} data 
 * @returns 
 */
export const postMessage = async (accessToken, data) => {
  return await apiClient({
    method: "post",
    url: `/message`,
    headers: {
      'X-AUTH-TOKEN': accessToken,
    },
    data
  })
};

/**
 * 메시지 확인
 * @param {*} accessToken 
 * @param {*} data 
 * @returns 
 */
export const getChattingLog = async (accessToken, data) => {
  return await apiClient({
    method: "get",
    url: `/message`,
    headers: {
      'X-AUTH-TOKEN': accessToken,
    },
    data
  })
};

/**
 * 내 메시지함
 * @param {*} accessToken 
 * @returns 
 */
export const getMyMessage = async (accessToken) => {
  return await apiClient({
    method: "get",
    url: `/message/box`,
    headers: {
      'X-AUTH-TOKEN': accessToken,
    },
  })
};
