/*global kakao */
import {useEffect, useState} from "react";
const { kakao } = window;

// 위도 경도를 넘겨 지도 출력
const MapMaker = ({lat, lon}) => {

  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(lat, lon),
      level: 3
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(lat, lon); 
    var marker = new kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);
  }, [])

  return (
    <div id="map" style={{width:"80%",height:"300px"}}></div>
  );
}

// 위도 경도를 찾은 후, 맵을 호출
const Kakaomap = ({setBookData,bookData}) => {
  const [lat, setLat] = useState(0)
  const [lon, setLon] = useState(0)

  useEffect(()=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        }, 
      );
    }
  },[])

  useEffect(()=>{
    setBookData({
      ...bookData,
      lat,
      lon
    })
  },[lat])
  
  // 위치 값을 찾으면 출력
  if (lat || lon) {
    return (
      <MapMaker 
        lat={lat} 
        lon={lon} 
      />
    )
  } else {
    return <></>
  }
}

export default Kakaomap;