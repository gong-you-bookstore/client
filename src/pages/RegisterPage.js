import { useState, useEffect } from "react";

import useScrollTo from "../lib/hooks/useScrollTo";
import SearchContainer from "../containers/register/SearchContainer";
import SelectContainer from "../containers/register/SelectContainer";
import FillContainer from "../containers/register/FillContainer";
import PictureContainer from "../containers/register/PictureContainer";
import KakaoMapContainer from "../containers/register/KakaoMapContainer";
const RegisterPage = () => {
  const [step2Ref, setIsScrollToStep2] = useScrollTo();
  const [step3Ref, setIsScrollToStep3] = useScrollTo();
  const [step4Ref, setIsScrollToStep4] = useScrollTo();
  const [step5Ref, setIsScrollToStep5] = useScrollTo();

  const [searchResults, setSearchResults] = useState([]);
  const [result, setResult] = useState({})
  const [bookImage, setBookImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png")
  const [isView, setIsView] = useState({
    step2: false,
    step3: false,
    step4: false,
    step5: false,
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
            setResult = {setResult}
            step2Ref = {step2Ref}
            setIsScrollToStep3 = {setIsScrollToStep3}
            isView = {isView}
            setIsView = {setIsView}
          />
        ) : (<></>)
      }
      {
        isView.step3 ? (
          <FillContainer
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
          <PictureContainer
            step4Ref = {step4Ref}
            setIsScrollToStep5 = {setIsScrollToStep5}
            isView = {isView}
            setIsView = {setIsView}
            bookImage ={bookImage}
            setBookImage = {setBookImage}
          />
        ) : (<></>)
      }
      {
        isView.step5 ? (
          <KakaoMapContainer
            result = {result}
            setResult = {setResult}
            bookImage = {bookImage}
            step5Ref = {step5Ref}
          />
        ) : (<></>)
      }
    </>
  )
}

export default RegisterPage