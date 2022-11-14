import {useEffect, useState} from "react";
import KakaoMap from "../../components/register/KakaoMap";
import { useCookies } from "react-cookie"
import { postBookData } from "../../lib/api/book";
const KakaoMapContainer = ({
  result,
  setResult,
  step5Ref,
  bookImage
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

  const onClickRegisterBtn = () => {
    let formData = new FormData();

    formData.append("imgs", bookImage);
    formData.append(
      "request", 
      new Blob(
        [JSON.stringify(result)], 
        {type: "application/json"}
      )
    );
    for (let key of formData.keys()) {
      console.log(key, ":", formData.get(key));
    }

    postBookData(formData, cookies.userData.accessToken)
      .then(res=>{
        console.log(res)
      })
      .catch(err=>{
        console.log(err)
      })
  }
  
  
  return (
    <div 
      className="bg-white-full-vh flex-col-box-center lh-2" 
      ref={step5Ref}
    >
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
      <button
        type="button"
        className="mtb-10 color-btn w-100p"
        onClick={()=>{
          onClickRegisterBtn();
        }}
      >
        등록하기
      </button>
    </div>
  )
}

export default KakaoMapContainer;