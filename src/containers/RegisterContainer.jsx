import { useEffect, useState } from "react";

import SearchForm from "../components/SearchForm"
import RegisterForm from "../components/RegisterForm";
import SelectForm from "../components/SelectForm";
import useScrollTo from "../lib/hooks/useScrollTo";
const RegisterContainer = () => {
  const [step2Ref, setIsScrollToStep2] = useScrollTo();
  const [step3Ref, setIsScrollToStep3] = useScrollTo();

  const [searchWord, setSearchWord] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [result, setResult] = useState({});

  useEffect(()=>{
    if(searchResults.length){
      setIsScrollToStep2(true);
    }
  },[searchResults])

  useEffect(()=>{
    if(result.title) {
      setIsScrollToStep3(true);
    }
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

export default RegisterContainer