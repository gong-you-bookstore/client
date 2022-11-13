import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

// TODO 사진 파일
export const postBookData = async (bookData, accessToken) => {
  return await axios({
    method: "post",
    url: `${SERVER_URL}/book`,
    headers: {
      'X-AUTH-TOKEN': accessToken
    },
    data: bookData
  })
};

export const getBooks = async () => {
  return await axios({
    method: "get",
    url: `${SERVER_URL}`,
  })
}; 