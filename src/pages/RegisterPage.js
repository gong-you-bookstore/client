import SearchForm from "../components/SearchForm"
import RegisterForm from "../components/RegisterForm";
import { useEffect, useState, useRef } from "react";
import $ from 'jquery'

import SelectForm from "../components/SelectForm";
const RegisterPage = () => {
  const step2Ref = useRef();
  const step3Ref = useRef();

  const ScrollToStep2 = () => {
    step2Ref.current?.scrollIntoView({ behavior: 'smooth', block:"center"});
  }

  const ScrollToStep3 = () => {
    step3Ref.current?.scrollIntoView({ behavior: 'smooth'});
  }

  const [searchWord, setSearchWord] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [result, setResult] = useState({});

  useEffect(()=>{
    if(searchResults.length){
      ScrollToStep2()
    }
  },[searchResults])

  useEffect(()=>{
    if(result.title) {
      ScrollToStep3()
    }
  },[result])

  return (
    <>
      <div className="bg-full-v flex-col-box lh-2">
        <SearchForm
          searchWord={searchWord}
          setSearchWord={setSearchWord}
          setSearchResults={setSearchResults}
        />
      </div>

      <div className="bg-full-v flex-col-box lh-2" ref={step2Ref}>
        <SelectForm 
          searchResults={searchResults}
          setResult={setResult}
        />
      </div>

      <div className="bg-full-p flex-col-box lh-2" ref={step3Ref}>
      {
        result.title ? (
          <>
            <RegisterForm
              result={result}
            />
          </>
        ) : (<></>)
      }
      </div>

    </>
  )
}

export default RegisterPage