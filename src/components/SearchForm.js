import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Scanner from "./Scanner";
import { getBooksByKakao } from "../apis/book";
const SearchForm = ({searchWord,setSearchWord, setSearchResults})=> {
  
  const [camera, setCamera] = useState(false);

  const navigate = useNavigate();

  // const onDetected = searchWord => {
  //   setSearchWord(searchWord);
  // };


  const onChangeSearchWord = (event) => {
    setSearchWord(event.target.value);
  };

  const onClickSearchButton = () => {
    getBooksByKakao(searchWord)
      .then((res) => {
        setSearchResults(res.data.documents)
      })
      .catch((error) => {
        console.log("작성실패", error);
      });
  };

  return (
    <>
      <div className="bg-full-v flex-col-box lh-2">
        <div className="container">
          <div className=" white-box">
            <span className="fc-main fs-32 fw-bold">Step 1</span>
            <p className="fc-muted fs-28">
              등록하고 싶은 책을 검색하세요
            </p>
            {
              // camera && <Scanner onDetected={onDetected} />
            }
            <div className="mt-20" >
              <input
                id="searchWord"
                name="searchWord"
                type="text"
                placeholder="검색어를 입력하세요"
                value={searchWord}
                onChange={onChangeSearchWord}
                className="input-styled w-100p fc-white"
              />
                
              <button 
                type="button"
                // onClick={() => setCamera(!camera)}
                className=" color-btn w-100p mtb-10"
              >
                {camera ? "Stop" : "ISBN SCAN"}
              </button>

              <button
                type="button"
                onClick={() => onClickSearchButton()}
                className="mtb-10 color-btn w-100p"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchForm;