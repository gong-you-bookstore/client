import { Fade, Slide } from "react-awesome-reveal";

import tokenImg from './../assets/images/token.png'

const MainSection = () => {
  return (
    <>
      <div className="main-section-1">
        <div className="containers">
        <div className="banner-contents">
        <h1>우리가 만드는 공유책장</h1>
        
        <button
          type="button"
          // onClick={() => onClickSearchButton()}
        >
          Get started
        </button>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet</p>

        </div>
        </div>
      </div>

      <div className="main-section-2">
        <div className="container">
          <div className="content-info-between">
          <Slide direction="up" cascade triggerOnce>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

            <img src="https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg" className="main-book-1"></img>
            </Slide>

          </div>
          <div className="content-info-between">
          <Slide direction="up" cascade triggerOnce>

            <img src="https://i.pinimg.com/originals/a8/b9/ff/a8b9ff74ed0f3efd97e09a7a0447f892.jpg" className="main-book-1"></img>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </Slide>


          </div>

        </div>
      </div>

      <div className="main-section-3">
      <div className="container">
      <div className="content-info-center">
      <Slide direction="down" cascade triggerOnce>

      <img src={tokenImg}></img>
      <p>책장에 잠들어 있는 책을 깨우세요!</p>
      </Slide>

      </div>
      </div>

      </div>

      <div className="main-section-4">
      main-section-4
      </div>
      </>

  )
}

export default MainSection