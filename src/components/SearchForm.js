import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Scanner from "./Scanner";
import SearchCarousel from "./SearchCarousel";

const SearchForm = ({searchWord,setSearchWord, setSearchResults})=> {
  
  const [camera, setCamera] = useState(false);

  const navigate = useNavigate();

  // const onDetected = searchWord => {
  //   setSearchWord(searchWord);
  // };

  // useEffect(()=>{
  //   if(searchResults.length === 1){
  //     setResult(searchResults[0])
  //   } else {
  //     setResult({})
  //   }
  // },[searchResults])

  const onChangeSearchWord = (event) => {
    setSearchWord(event.target.value);
  };

  const onClickSearchButton = () => {
    sendSearchWord()
      .then((res) => {
        setSearchResults(res.data.documents)
      })
      .catch((error) => {
        console.log("작성실패", error);
      });
  };

  const sendSearchWord = async () => {
    return await axios.get(
      `https://dapi.kakao.com/v3/search/book?&size=20&query=${searchWord}`, {
        headers:{
          Authorization: "KakaoAK 368665d3b859c18a23d73b9d4665680a"
        }
      }
    );
  };
  
  
  

  return (
    <>
    <div className="container">

    <div className="content-section white-box">
      <span className="fc-main fs-32 fw-bold">Step 1</span>
      <p className="fc-dark fs-28">
        등록하고 싶은 책을 검색하세요
      </p>
      {
        // camera && <Scanner onDetected={onDetected} />
      }
      <div className="search-container" >
        <input
          id="searchWord"
          name="searchWord"
          type="text"
          placeholder="검색어를 입력하세요"
          value={searchWord}
          onChange={onChangeSearchWord}
          className="input-styled w-100p"
        />
          
          <button 
            type="button"
            // onClick={() => setCamera(!camera)}
            className=" color-btn w-100p"
          >
            {camera ? "Stop" : "ISBN SCAN"}
          </button>

          <button
            type="button"
            onClick={() => onClickSearchButton()}
            className="mb-20 mt-20 color-btn w-100p"
          >
            Search
          </button>
        </div>
      </div>
      </div>
      

    </>
  )
}

export default SearchForm;