import { Fade, Slide, Flip, Rotate, Roll } from "react-awesome-reveal";

import DoorHeader from "./DoorHeader";

import tokenImg from './../assets/images/coin2.png'
import mapImg from './../assets/images/map.png'
import locationImg from './../assets/images/location.png'



const MainSection = () => {
  return (
    <>
      <DoorHeader />

      <div className="main-section">
        <div className="container">
          <span className="main-title">공유, 추천</span>
          <div className="flex-box">
            <div className="content-info-left">
              <Slide direction="up" cascade triggerOnce>
                <p className="info-text">
                  주변 친구들과<br/> 책을 공유하고<br/>교환하세요.
                </p>
                <img src="https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg" className="main-book-1" />
              </Slide>
            </div>
            <div className="content-info-right">
              <Slide direction="up" cascade triggerOnce>
                <img src="https://i.pinimg.com/originals/a8/b9/ff/a8b9ff74ed0f3efd97e09a7a0447f892.jpg" className="main-book-1" />
                <p className="info-text">
                  내 관심사의<br/>새로운 책을<br/>추천받으세요
                </p>
              </Slide>
            </div>
          </div>
        </div>
      </div>

      <div className="main-section grey-background">
        <div className="container">
          <span className="main-title">교환</span>
          <div className="content-info-center">
            <Rotate>
              <img src={tokenImg} className="w200" />
            </Rotate>
            <p className="info-text center-text">
              잠들어있는 책을 토큰으로 바꿔보세요 !
            </p>
          </div>
        </div>
      </div>

      <div className="main-section">
        <div className="container">
          <span className="main-title">지역</span>
          <div className="content-info-between-1">
            <img src={mapImg} className="w200" />
            <Slide direction="right" cascade triggerOnce>
              <p className="info-text">
                내 주변 사람들의 책을 확인하세요.
              </p>
            </Slide>
          </div>
          <div className="content-info-between-2">
            <Slide direction="left" cascade triggerOnce>
              <p className="info-text">
                지역 사람들과 커뮤니티를 형성해 보세요.
              </p>
            </Slide>
            <img src={locationImg} className="w200" />
          </div>
        </div>
      </div>
      </>
  )
}

export default MainSection