import axios from 'axios';

const host = window.location.hostname === "localhost" 
  ? process.env.REACT_APP_RS_SERVER_URL 
  : "recommend";

const recommendClient = axios.create({
  baseURL: host,
});

/**
 * 책 한권을 넣어서 추천 책을 받아온다
 * @param {*} isbn 
 * @returns 
 */
export const getOneRecommendedBook = async (isbn) => {
  return await recommendClient({
    method: "get",
    url: `/recommend/one?isbn=${isbn}`,
  })
};

/**
 * 여러 책을 넣어서 추천책을 받아온다
 * @param {string[]} books 
 * @returns 
 */
export const getMultiRecommendedBook = async (books) => {
  return await recommendClient({
    method: "post",
    url: `/recommend/multi`,
    data: {
      data: books
    }
  })
};