import axios from "axios";

const KAKAO_HOST_URL = process.env.REACT_APP_KAKAO_HOST_URL
const KAKAO_REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY
const NLK_HOST_URL = process.env.REACT_APP_NLK_HOST_URL
const NLK_API_KEY = process.env.REACT_APP_NLK_API_KEY

// 카카오 API: 검색어를 통하여 일치하는 책들의 리스트 얻음
export const getBooksByKakao = async (searchWord) => {
  return await axios({
    method: "get",
    url: `${KAKAO_HOST_URL}/v3/search/book?&size=20&query=${searchWord}`,
    headers: {
      Authorization: `KakaoAK ${KAKAO_REST_API_KEY}`
    }
  });
};

// 국립중앙도서관 API: isbn값을 통하여 책의 정보 얻음
export const getBookByNLK = async (isbn13) => {
  return await axios({
    method: "get",
    url: `${NLK_HOST_URL}/NL/search/openApi/search.do?key=${NLK_API_KEY}&pageSize=1&category=도서&apiType=json&kwd=${isbn13}`,
  })
}; 

// 카카오 API: 검색을 통해 좌표값 수정
export const getLocationsOnSearch = async (searchWord) => {
  return await axios({
    method: "get",
    url: `${KAKAO_HOST_URL}/v2/local/search/address?&analyze_type=similar&size=20&query=${searchWord}`,
    headers: {
      Authorization: `KakaoAK ${KAKAO_REST_API_KEY}`
    }
  });
};