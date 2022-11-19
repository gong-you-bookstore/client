import {useEffect, useState} from "react";
import KakaoMap from "../../components/register/KakaoMap";
import { useCookies } from "react-cookie"
import { postBookData } from "../../lib/api/book";
import { useNavigate } from "react-router-dom";
import { toastMaker } from "../../lib/utils";

const KakaoMapContainer = ({
  result,
  setResult,
  step5Ref,
  bookImage
}) => {
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);
  const navigate = useNavigate();

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
    // for (let key of formData.keys()) {
    //   console.log(key, ":", formData.get(key));
    // }

    postBookData(formData, cookies.userData.accessToken)
      .then(response => {
        toastMaker.success(response.data.msg);
        navigate("/store");
      })
      .catch(error => {
        toastMaker.error(error.message);
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
            onClickRegisterBtn = {onClickRegisterBtn}
          />
          </>
        ) : (<></>)
      }
      
    </div>
  )
}

export default KakaoMapContainer;