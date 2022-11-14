import { useState, useEffect } from "react";

import useScrollTo from "../lib/hooks/useScrollTo";
import SearchContainer from "../containers/register/SearchContainer";
import SelectContainer from "../containers/register/SelectContainer";
import RegisterContainer from "../containers/register/RegisterContainer";
import KakaoMapContainer from "../containers/register/KakaoMapContainer";
const RegisterPage = () => {
  const [step2Ref, setIsScrollToStep2] = useScrollTo();
  const [step3Ref, setIsScrollToStep3] = useScrollTo();
  const [step4Ref, setIsScrollToStep4] = useScrollTo();

  const [searchResults, setSearchResults] = useState([]);
  const [result, setResult] = useState({})

  const [isView, setIsView] = useState({
    step2: false,
    step3: false,
    step4: false
  })

  // useEffect(()=>{
  //   console.log(isView)
  // },[isView])
  return (
    <>
      <SearchContainer 
        setSearchResults = {setSearchResults}
        setIsScrollToStep2 = {setIsScrollToStep2}
        isView = {isView}
        setIsView = {setIsView}
      />
      {
        isView.step2 ? (
          <SelectContainer 
            searchResults = {searchResults}
            step2Ref = {step2Ref}
            setResult = {setResult}
            setIsScrollToStep3 = {setIsScrollToStep3}
            isView = {isView}
            setIsView = {setIsView}
          />
        ) : (<></>)
      }
      {
        isView.step3 ? (
          <RegisterContainer
            result = {result}
            setResult = {setResult}
            step3Ref = {step3Ref}
            setIsScrollToStep4 = {setIsScrollToStep4}
            isView = {isView}
            setIsView = {setIsView}
          />
        ) : (<></>)
      }
      {
        isView.step4 ? (
          <KakaoMapContainer
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