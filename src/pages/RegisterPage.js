import { useState } from "react";

import useScrollTo from "../lib/hooks/useScrollTo";
import SearchContainer from "../containers/register/SearchContainer";
import SelectContainer from "../containers/register/SelectContainer";
import RegisterContainer from "../containers/register/RegisterContainer";
import { useEffect } from "react";

import Kakaomap from '../components/register/Kakaomap'

const RegisterPage = () => {
  const [step2Ref, setIsScrollToStep2] = useScrollTo();
  const [step3Ref, setIsScrollToStep3] = useScrollTo();
  const [step4Ref, setIsScrollToStep4] = useScrollTo();

  const [searchResults, setSearchResults] = useState([]);
  const [result, setResult] = useState({})

  useEffect(()=>{
    console.log(result)
  },[result])
  return (
    <>
      <SearchContainer 
        setSearchResults = {setSearchResults}
        setIsScrollToStep2 = {setIsScrollToStep2}
      />
      {
        searchResults.length ? (
          <SelectContainer 
            searchResults = {searchResults}
            step2Ref = {step2Ref}
            setResult = {setResult}
            setIsScrollToStep3 = {setIsScrollToStep3}
          />
        ) : (<></>)
      }
      {
        result.title ? (
          <RegisterContainer
            result = {result}
            setResult = {setResult}
            step3Ref = {step3Ref}
            setIsScrollToStep4 = {setIsScrollToStep4}
          />
        ) : (<></>)
      }
      {
        result.status ? (
          <Kakaomap
            result = {result}
            setResult = {setResult}
            step4Ref = {step4Ref}
          />
        ) : (<></>)
      }
    </>
  )
}

export default RegisterPage