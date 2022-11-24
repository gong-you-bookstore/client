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
    url: `book`,
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
    url: `book/${isbn}`,
    headers: {
      'X-AUTH-TOKEN': accessToken,
    }
  })
};

/**
 * 도서 삭제
 * @returns 
 */
export const deleteBook = async () => {
  return await apiClient({
    method: "delete",
    url: `/`,
  })
}; 