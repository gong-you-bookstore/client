import SearchForm from "../components/SearchForm"
import RegisterForm from "../components/RegisterForm";
import { useEffect, useState, useRef } from "react";
import $ from 'jquery'

import SelectForm from "../components/SelectForm";
const RegisterPage = () => {
  const step2Ref = useRef();
  const step3Ref = useRef();

  const ScrollToStep2 = () => {
    step2Ref.current?.scrollIntoView({ behavior: 'smooth'});
  }

  const ScrollToStep3 = () => {
    step3Ref.current?.scrollIntoView({ behavior: 'smooth' });
  }

  const [searchWord, setSearchWord] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [result, setResult] = useState({});

  useEffect(()=>{
    ScrollToStep2()
  },[searchResults])

  useEffect(()=>{
    ScrollToStep3()
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
          step2Ref={step2Ref}
        />

      {
        result.title ? (
          <>
            <RegisterForm
              result={result}
              step3Ref={step3Ref}
            />
          </>
        ) : (<></>)
      }
    </>
  )
}

export default RegisterPage