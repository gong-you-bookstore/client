import {useEffect, useState} from "react";
import KakaoMap from "../../components/register/KakaoMap";

const KakaoMapContainer = ({
  setResult,
  step4Ref,
  result,
}) => {
  // const [cookies, setCookie, removeCookie] = useCookies(["userData"]);
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
  
  return (
    <div className="bg-white-full-vh flex-col-box-center lh-2" ref={step4Ref}>
      {
        result.latitude || result.longitude ? (
          <>
          <KakaoMap 
            result = {result}
            setResult = {setResult}
          />
          </>
        ) : (<></>)
      }
    </div>
  )
}

export default KakaoMapContainer;