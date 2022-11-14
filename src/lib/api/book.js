import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

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


export const getBooks = async () => {
  return await axios({
    method: "get",
    url: `${SERVER_URL}`,
  })
}; 