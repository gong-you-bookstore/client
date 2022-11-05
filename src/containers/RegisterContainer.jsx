import { useEffect, useState } from "react";

import SearchForm from "../components/register/SearchForm"
import RegisterForm from "../components/register/RegisterForm";
import SelectForm from "../components/register/SelectForm";
import useScrollTo from "../lib/hooks/useScrollTo";

const RegisterContainer = () => {
  const [step2Ref, setIsScrollToStep2] = useScrollTo();
  const [step3Ref, setIsScrollToStep3] = useScrollTo();

  const [searchWord, setSearchWord] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [result, setResult] = useState({})


  // useEffect(()=>{
  //   console.log(result)
  // },[result])
  return (
    <>
        <SearchForm
          searchWord = {searchWord}
          setSearchWord = {setSearchWord}
          setSearchResults = {setSearchResults}
          setIsScrollToStep2 = {setIsScrollToStep2}

        />
      {
        searchResults.length ? (
          <SelectForm 
            searchResults = {searchResults}
            step2Ref = {step2Ref}
            setResult = {setResult}
            setIsScrollToStep3 = {setIsScrollToStep3}
          />
        ) : (<></>)
      }
      {
        result.title ? (
          <RegisterForm
            result = {result}
            step3Ref = {step3Ref}
          />
        ) : (<></>)
      }
    </>
  )
}

export default RegisterContainer