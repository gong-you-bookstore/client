import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <div className="content-section" >
      <div className="container">
        <div className="flex-box">
          <div className="content-info-left">
            <Fade direction="up" cascade triggerOnce>
              <p className="info-text fc-dark fs-28">
              잠들어 있는 <br/> 
              책을 <span className="fc-main fw-bold">검색</span> 하고<br/>
              책방에 <span className="fc-main fw-bold">등록</span> 하세요
              </p>
            </Fade>

              <img src="https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg" className="concept-book" alt="img" />
          </div>
          <div className="content-info-right">
              <img src="https://i.pinimg.com/originals/a8/b9/ff/a8b9ff74ed0f3efd97e09a7a0447f892.jpg" className="concept-book" alt="img" />
            <Fade direction="up" cascade triggerOnce>

              <p className="info-text fc-dark fs-28">
              주변 친구들과<br/>
              책을 <span className="fc-main fw-bold">공유</span> 하고<br/>
              새로운 책을<br/><span className="fc-main fw-bold">추천</span> 받으세요
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About