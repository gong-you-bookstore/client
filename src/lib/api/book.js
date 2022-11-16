import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

/**도서 등록**/
export const postBookData = async (formData, accessToken) => {
  return await axios({
    method: "post",
    url: `${SERVER_URL}/book`,
    headers: {
      'X-AUTH-TOKEN': accessToken,
      'Content-Type': 'multipart/form-data'
    },
    data: formData
  })
};

/**모든 도서 조회**/
export const getBooks = async () => {
  return await axios({
    method: "get",
    url: `${SERVER_URL}`,
  })
}; 

/**도서 상세 조회**/
export const getBookDetails = async (isbn13, accessToken) => {
  return await axios({
    method: "get",
    url: `${SERVER_URL}/book/${isbn13}`,
    headers: {
      'X-AUTH-TOKEN': accessToken,
    }
  })
};

/**도서 정보 조회**/
export const deleteBook = async () => {
  return await axios({
    method: "delete",
    url: `${SERVER_URL}`,
  })
}; 