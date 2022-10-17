/*global kakao */
import {useRef,useEffect} from "react";
import KakaoMapScript from "./KakaoMapScript";


function Kakaomap(){
  useEffect(() => {
    KakaoMapScript();
}, []);

useEffect(() => {
console.log(navigator)
}, []);

return (
  <div id="map" style={{width:"100%",height:"400px"}}></div>
    // <div id='myMap' style={{
    //     width: '100%',
    //     height: '50vw'
    // }}></div>
);
}

export default Kakaomap;