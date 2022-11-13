import {useEffect, useState} from "react";
import { postBookData } from "../../lib/api/book";
import { useCookies } from "react-cookie"
import KakaoMap from "../../components/register/KakaoMap";

const KakaoMapContainer = ({
  setResult,
  step4Ref,
  result,
}) => {
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);


  useEffect(()=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setResult({
          ...result,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      });
    }
  }, [])
  
  // 위치 값을 찾으면 출력
  return (
    <>
    <div className="bg-white-full-p flex-col-box-center lh-2" ref={step4Ref}>
    {
      result.latitude || result.longitude ? (
        <KakaoMap
          step4Ref = {step4Ref}
          result = {result}
          setResult = {setResult}
        />
      ) : (<></>)
    }
    </div>
    </>
    
  )
}

export default KakaoMapContainer;