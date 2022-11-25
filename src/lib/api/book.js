import { apiClient } from ".";

/**
 * 도서 등록
 * @param {*} formData 사진 + 책 정보
 * @param {*} accessToken 
 * @returns 
 */
export const postBookData = async (formData, accessToken) => {
  return await apiClient({
    method: "post",
    url: `/book`,
    headers: {
      'X-AUTH-TOKEN': accessToken,
      'Content-Type': 'multipart/form-data'
    },
    data: formData
  })
};

/**
 * 등록된 책들의 리스트 요청
 * @returns 
 */
export const getBooks = async () => {
  return await apiClient({
    method: "get",
    url: `/`,
  })
}; 

/**
 * 도서 상세 조회
 * @param {*} isbn 
 * @param {*} accessToken 
 * @returns 
 */
export const getBookDetails = async (isbn, accessToken) => {
  return await apiClient({
    method: "get",
    url: `/book/${isbn}`,
    headers: {
      'X-AUTH-TOKEN': accessToken,
    }
  })
};

/**
 * 장르별 조회
 * @param {`*`} genre 
 * @returns 
 */
export const getBooksByGenre = async (kdc) => {
  return await apiClient({
    method: "get",
    url: `/genre?kdc=${kdc}`,
  })
}

/**
 * 사용자 등록 게시물 조회
 * @param {*} data {isbn: "2222222", userEmail: "aaa@email.com"}
 * @param {*} accessToken 
 * @returns 
 */
export const getUserBook = async (isbn, userEmail, accessToken) => {
  return await apiClient({
    method: "get",
    url: `/book/shelf?isbn=${isbn}&userEmail=${userEmail}`,
    headers: {
      'X-AUTH-TOKEN': accessToken
    }
  })
}

/**
 * 내가 등록한 책
 * @param {*} accessToken 
 * @returns 
 */
export const getMyBooks = async (accessToken) => {
  return await apiClient({
    method: "get",
    url: "/book/my",
    headers: {
      'X-AUTH-TOKEN': accessToken
    }
  })
}

/**
 * 책 거래 요청
 * @param {*} accessToken 
 * @param {*} data {shelfId, receiverEmail}
 * @returns 
 */
export const requestTrade = async (accessToken, data) => {
  return await apiClient({
    method: 'post',
    url: 'book/trade/request',
    headers: {
      'X-AUTH-TOKEN': accessToken
    },
    data
  })
}

/**
 * 책 거래 수락
 * @param {*} accessToken 
 * @param {*} data {shelfId, receiverEmail}
 * @returns 
 */
export const respondTrade = async (accessToken, data) => {
  return await apiClient({
    method: 'post',
    url: 'book/trade/respond',
    headers: {
      'X-AUTH-TOKEN': accessToken
    },
    data
  })
}