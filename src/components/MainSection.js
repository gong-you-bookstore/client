import { Slide, Rotate } from "react-awesome-reveal";
import { useEffect, useRef } from "react";

import DoorHeader from "./DoorHeader";

import tokenImg from './../assets/images/coin2.png'
import mapImg from './../assets/images/map2.png'
import locationImg from './../assets/images/chat.png'



const MainSection = () => {

  const mainRef = useRef();

  const onClickDownBtn = () => {
    mainRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <DoorHeader onClickDownBtn={onClickDownBtn}/>

      <div className="main-section" ref={mainRef}>
        <div className="container">
          <span className="fc-main fs-32 fw-bold">Step 1</span>
          <div className="flex-box">
            <div className="content-info-left">
              <Slide direction="up" cascade triggerOnce>
                <p className="info-text fc-dark fs-28">
                잠들어 있는 <br/> 
                책을 <span className="fc-main fw-bold">검색</span>하고<br/>
                책방에 <span className="fc-main fw-bold">등록</span>하세요
                </p>
                <img src="https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg" className="main-book-1" />
              </Slide>
            </div>
            <div className="content-info-right">
              <Slide direction="up" cascade triggerOnce>
                <img src="https://i.pinimg.com/originals/a8/b9/ff/a8b9ff74ed0f3efd97e09a7a0447f892.jpg" className="main-book-1" />
                <p className="info-text fc-muted fs-28">
                주변 친구들과<br/>
                책을 <span className="fc-main fw-bold">공유</span>하고<br/>
                새로운 책을<br/><span className="fc-main fw-bold">추천</span>받으세요
                </p>
              </Slide>
            </div>
          </div>
        </div>
      </div>

      <div className="main-section grey-background">
        <div className="container">
          <span className="fc-main fs-32 fw-bold">Step 2</span>
          <div className="content-info-center">
            <Rotate>
              <img src={tokenImg} className="w200" />
            </Rotate>
            <p className="info-text center-text fc-dark fs-28">
              책을 <span className="fc-main fw-bold">토큰</span>으로 바꿔보세요
            </p>
          </div>
        </div>
      </div>

      <div className="main-section">
        <div className="container">
          <span className="fc-main fs-32 fw-bold">Step 3</span>
          <div className="content-info-between-1">
            <img src={mapImg} className="w200" />
            <Slide direction="right" cascade triggerOnce>
              <p className="info-text fc-dark fs-28">
                내 주변 사람들의 책을 확인하세요.
              </p>
            </Slide>
          </div>
          <div className="content-info-between-2">
            <Slide direction="left" cascade triggerOnce>
              <p className="info-text fc-dark fs-28">
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