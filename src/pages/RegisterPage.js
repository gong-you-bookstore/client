import SearchForm from "../components/SearchForm"
import RegisterForm from "../components/RegisterForm";
import { useEffect, useState, useRef } from "react";
import $ from 'jquery'

import SelectForm from "../components/SelectForm";
const RegisterPage = () => {
  
  const resultRef = useRef();
  const onClickDownBtn = () => {
    resultRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  const [searchWord, setSearchWord] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [result, setResult] = useState({});

  useEffect(()=>{
    onClickDownBtn()
  },[result])

  return (
    <>
        <SearchForm
          searchWord={searchWord}
          setSearchWord={setSearchWord}
          setSearchResults={setSearchResults}
        />
      
        <SelectForm 
          searchResults={searchResults}
          setResult={setResult}
        />

      {
        result.title ? (
          <>
            <RegisterForm
              result={result}
              resultRef={resultRef}
            />
          </>
        ) : (<></>)
      }
    </>
  )
}

export default RegisterPage