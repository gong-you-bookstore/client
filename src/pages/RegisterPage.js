import { useState } from "react";

import useScrollTo from "../lib/hooks/useScrollTo";
import SearchContainer from "../containers/register/SearchContainer";
import SelectContainer from "../containers/register/SelectContainer";
import RegisterContainer from "../containers/register/RegisterContainer";

const RegisterPage = () => {
  const [step2Ref, setIsScrollToStep2] = useScrollTo();
  const [step3Ref, setIsScrollToStep3] = useScrollTo();
  const [searchResults, setSearchResults] = useState([]);
  const [result, setResult] = useState({})

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
            step3Ref = {step3Ref}
          />
        ) : (<></>)
      }
    </>
  )
}

export default RegisterPage