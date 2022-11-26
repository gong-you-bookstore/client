/*global kakao */
import {useEffect} from "react";
const { kakao } = window;

const KakaoMap = ({
  latitude,
  longitude,
}) => {
  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(latitude, longitude),
      level: 3
    };
    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(latitude, longitude); 
    var marker = new kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);
  }, [])

  return (
      <div id="map" />
  );
}

export default KakaoMap;