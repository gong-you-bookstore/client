import { apiClient } from ".";

/**
 * 메시지 전송
 * @param {*} accessToken 
 * @param {*} data {shelfId, receiverEmail, content}
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
 * @param {*} data {shelfId, email1, email2}
 * @returns 
 */
export const getMessages = async (accessToken, data) => {
  return await apiClient({
    method: "get",
    url: `/message/${data.shelfId}?email1=${data.email1}&email2=${data.email2}`,
    headers: {
      'X-AUTH-TOKEN': accessToken,
    }
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
