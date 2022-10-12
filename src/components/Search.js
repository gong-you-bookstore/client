import axios from "axios";
import { useEffect, useState } from "react";
import Scanner from "./Scanner";

const Search = ()=> {
  const [searchWord, setSearchWord] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [camera, setCamera] = useState(false);
  // const [searchWord, setSearchWord] = useState(null);
  const [result, setResult] = useState({});

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

  useEffect(()=>{
    console.log('result', result)
  },[result])

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
  
  
  const onClickLibraryButton = () => {
    sendLibrary()
      .then((res) => {
        console.log("dddddddddd", res)
      })
      .catch((error) => {
        console.log("작성실패", error);
      });
  };

  const sendLibrary = async () => {
    return await axios.get(
      `https://www.nl.go.kr/NL/search/openApi/search.do?key=844178c1b1ab808edc1094993a1e3aec8f8565712a5ab9bf69b8bf793ebc633d&apiType=json&srchTarget=total&kwd=${searchWord}&pageSize=10&category=도서`

    );
  };  

  return (
    <>
      <div className="section-container">
        {camera && <Scanner onDetected={onDetected} />}
      </div>

    <div style={{marginTop:"100px"}}>
    <input
        id="searchWord"
        name="searchWord"
        type="text"
        placeholder="searchWord"
        value={searchWord}
        onChange={onChangeSearchWord}
      />
      
      <button onClick={() => setCamera(!camera)}>
        {camera ? "Stop" : "ISBN SCAN"}
      </button>

      <button
        type="button"
        onClick={() => onClickSearchButton()}
      >
        Search
      </button>
      <button
        type="button"
        onClick={() => onClickLibraryButton()}
      >
        Library
      </button>
      <ul>
      {
        searchResults.map((item, index)=>(
          <li key={index} style={{display:"inline-block"}}>
            <img src={item.thumbnail} onClick={()=>{
              setResult(item)
            }} />
          </li>
        ))
      }
      </ul>
      </div>

      {
        result ? (
          <>
            <h1>{result.title}</h1>
            <h3>{result.isbn}</h3>
            <p>{result.contents}</p>
          </>
        ) : (<></>)
      }
    </>
  )
}

export default Search;