import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Scanner from "./Scanner";
import SearchCarousel from "./SearchCarousel";

const Search = ({result, setResult, setIsRegister})=> {
  const [searchWord, setSearchWord] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [camera, setCamera] = useState(false);

  const navigate = useNavigate();

  const onDetected = searchWord => {
    setSearchWord(searchWord);
  };

  useEffect(()=>{
    if(searchResults.length === 1){
      setResult(searchResults[0])
    } else {
      setResult({})
    }
  },[searchResults])

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

      <div className="section-container">
        {camera && <Scanner onDetected={onDetected} />}
      </div>

    <div className="search-container" style={{margin:"120px 0 0 0"}}>
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
        onClick={() => setCamera(!camera)}
        className="mb-20 mt-20 color-btn w-100p"
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

      {
        searchResults.length ? (
          <>
            <SearchCarousel 
              searchResults={searchResults} 
              setResult={setResult}
            />
          </>
        ) : (
          <></>
        )
      
      }

    </>
  )
}

export default Search;