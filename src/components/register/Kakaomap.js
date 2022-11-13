/*global kakao */
import {useEffect, useState} from "react";
import { postBookData } from "../../lib/api/book";
import { useCookies } from "react-cookie"

const { kakao } = window;

// 위도 경도를 넘겨 지도 출력
const MapMaker = ({
  result,
  setResult
}) => {

  useEffect(()=>{
    
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(result.latitude, result.longitude),
      level: 3
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(result.latitude, result.longitude); 
    var marker = new kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);
  }, [])

  return (
    <div id="map" ></div>
  );
}

// 위도 경도를 찾은 후, 맵을 호출
const Kakaomap = ({
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
    <div className="bg-white-full-p flex-col-box-center lh-2" ref={step4Ref}>
      <div className="container w-100p">
      <span className="fc-main fs-32 fw-bold">
          Step 4
        </span>
        <p className="fc-dark fs-28" >
          위치를 확인해주세요
        </p>
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
        
        <button
            type="button"
            className="mtb-10 color-btn w-100p"
          >
            등록하기
          </button>
      </div>
    </div>
  )
}

export default Kakaomap;