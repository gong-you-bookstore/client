import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Scanner from "./Scanner";

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

    </>
  )
}

export default Search;