import { Rotate, Fade } from "react-awesome-reveal";
import { useEffect, useRef } from "react";


import tokenImg from './../assets/images/coin2.png'
import mapImg from './../assets/images/map2.png'
import locationImg from './../assets/images/chat.png'



const Intro = ({introRef}) => {

  return (
    <>
      <span className="pointer" ref={introRef} />
      <div className="content-section" >
        <div className="container">
          <span className="fc-main fs-32 fw-bold">Step 1</span>
          <div className="flex-box">
            <div className="content-info-left">
              <Fade direction="up" cascade triggerOnce>
                <p className="info-text fc-dark fs-28">
                잠들어 있는 <br/> 
                책을 <span className="fc-main fw-bold">검색</span> 하고<br/>
                책방에 <span className="fc-main fw-bold">등록</span> 하세요
                </p>
              </Fade>

                <img src="https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg" className="main-book-1" />
            </div>
            <div className="content-info-right">
                <img src="https://i.pinimg.com/originals/a8/b9/ff/a8b9ff74ed0f3efd97e09a7a0447f892.jpg" className="main-book-1" />
              <Fade direction="up" cascade triggerOnce>

                <p className="info-text fc-muted fs-28">
                주변 친구들과<br/>
                책을 <span className="fc-main fw-bold">공유</span> 하고<br/>
                새로운 책을<br/><span className="fc-main fw-bold">추천</span> 받으세요
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section grey-background">
        <div className="container">
          <span className="fc-main fs-32 fw-bold">Step 2</span>
          <div className="content-info-center">
            <Rotate>
              <img src={tokenImg} className="w-200" />
            </Rotate>
            <p className="info-text center-text fc-dark fs-28">
              책을 <span className="fc-main fw-bold">토큰</span> 으로 바꿔보세요
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <div className="container">
          <span className="fc-main fs-32 fw-bold">Step 3</span>
          <div className="content-info-between-1">
            <img src={mapImg} className="w-200" />
            <Fade direction="right" cascade triggerOnce>
              <p className="info-text fc-dark fs-28">
                내 주변 사람들의 책을 확인하세요.
              </p>
            </Fade>
          </div>
          <div className="content-info-between-2">
            <Fade direction="left" cascade triggerOnce>
              <p className="info-text fc-dark fs-28">
                지역 사람들과 커뮤니티를 형성해 보세요.
              </p>
            </Fade>
            <img src={locationImg} className="w-200" />
          </div>
        </div>
      </div>
      </>
  )
}

export default Intro