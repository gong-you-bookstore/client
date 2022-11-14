import {useEffect, useState} from "react";
import MapMaker from "../../components/register/MapMaker";

const Kakaomap = ({
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
            <MapMaker 
              result = {result}
              setResult = {setResult}
            />
            </>
          ) : (<></>)
        }
    </div>
  )
}

export default Kakaomap;