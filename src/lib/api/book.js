import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const sendBookData = async (bookData, accessToken) => {
  return await axios({
    method: "post",
    url: `${SERVER_URL}/book`,
    headers: {
      'X-AUTH-TOKEN': accessToken
    },
    data: bookData
  })
};

export const getBooksList = async () => {
  return await axios({
    method: "get",
    url: `${SERVER_URL}`,
  })
}; 