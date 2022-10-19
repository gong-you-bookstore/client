import { Fade, Slide, Flip, Rotate, Roll } from "react-awesome-reveal";

import DoorHeader from "./DoorHeader";

import tokenImg from './../assets/images/coin2.png'
import mapImg from './../assets/images/map.png'
import locationImg from './../assets/images/location.png'



const MainSection = () => {
  return (
    <>
    <DoorHeader />
      {/* <div className="main-section-1">
        <div className="overlay">
        <div className="header- ">
        

        <img src={logoColImg} style={{width:"100px"}}/>
        <h1 className="subtitle">우리가 만드는 공유책방</h1>
        <button
          type="button"
        >
          Get started
        </button>



        </div>
        </div>
      </div> */}

      <div className="main-section">
        <div className="container">
        <span className="main-title">공유</span>
        <div className="flex-box">
          <div className="content-info-left">
            <Slide direction="up" cascade triggerOnce>
              <p className="info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <img src="https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg" className="main-book-1"></img>
            </Slide>
          </div>

          <div className="content-info-right">
            <Slide direction="up" cascade triggerOnce>
              <img src="https://i.pinimg.com/originals/a8/b9/ff/a8b9ff74ed0f3efd97e09a7a0447f892.jpg" className="main-book-1"></img>
              <p className="info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
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
      <img src={tokenImg} className="w200"></img>
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
        <img src={mapImg} className="w200"></img>
        <Slide direction="right" cascade triggerOnce>
        <p className="info-text">
        잠들어있는 책을 토큰으로 바꿔보세요 !
        </p>
        </Slide>
        </div>

        <div className="content-info-between-2">
        <Slide direction="left" cascade triggerOnce>
        <p className="info-text">
        잠들어있는 책을 토큰으로 바꿔보세요 !
        </p>
        </Slide>
        <img src={locationImg} className="w200"></img>

        </div>
      </div>
      </div>

      </>

  )
}

export default MainSection