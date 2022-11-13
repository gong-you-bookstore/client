/*global kakao */
import {useEffect, useState} from "react";
const { kakao } = window;


const KakaoMap = ({
  result,
  setResult,
}) => {

  useEffect(()=>{
    let container = document.getElementById('map');
    let options = {
      center: new kakao.maps.LatLng(result.latitude, result.longitude),
      level: 3
    };

    let map = new kakao.maps.Map(container, options);
    let markerPosition  = new kakao.maps.LatLng(result.latitude, result.longitude); 
    let marker = new kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);
  }, [])

  return (
    <>
    <div id="map"></div>
    </>
  )
}

export default KakaoMap;