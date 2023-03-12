/*global kakao */
import { useEffect } from 'react';
const { kakao } = window;

const KakaoMap = ({ latitude, longitude }) => {
  useEffect(() => {
    let container = document.getElementById('map');
    let options = {
      center: new kakao.maps.LatLng(latitude, longitude),
      level: 8,
    };
    let map = new kakao.maps.Map(container, options);
    let markerPosition = new kakao.maps.LatLng(latitude, longitude);
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  return <div id="map" />;
};

export default KakaoMap;
