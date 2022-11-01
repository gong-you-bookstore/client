import axios from "axios";

// 카카오 api: 검색어를 통하여 일치하는 책들의 리스트 얻음
export const getBooksByKakao = async (searchWord) => {
  return await axios.get(
    `https://dapi.kakao.com/v3/search/book?&size=20&query=${searchWord}`, {
      headers:{
        Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY_JH}`
      }
    }
  );
};

// 국립중앙도서관 api: isbn값을 통하여 책의 정보 얻음
export const getBookByNLK = async (isbn13) => {
  return await axios.get(
    `https://www.nl.go.kr/NL/search/openApi/search.do?key=${process.env.REACT_APP_NLK_API_KEY}&apiType=json&kwd=${isbn13}&pageSize=1&category=도서`
  );
};  