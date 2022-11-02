import Banner from './../components/Banner'
import { Rotate, Fade } from "react-awesome-reveal";
import tokenImg from './../assets/images/coin2.png'
import mapImg from './../assets/images/map2.png'
import locationImg from './../assets/images/chat.png'
import useScrollTo from "../lib/hooks/useScrollTo";

const HomePage = ()=>{
  const [introRef, setIsScrollTo] = useScrollTo();

  return(
    <>
    <header className="header-door">
    <Banner 
      setIsScrollTo={setIsScrollTo}
    />
    </header>
    <span className="pointer" ref={introRef} />
      <div className="content-section" >
        <div className="container">
          {/* <span className="fc-main fs-32 fw-bold">Info 1</span> */}
          <div className="flex-box">
            <div className="content-info-left">
              <Fade direction="up" cascade triggerOnce>
                <p className="info-text fc-dark fs-28">
                잠들어 있는 <br/> 
                책을 <span className="fc-main fw-bold">검색</span> 하고<br/>
                책방에 <span className="fc-main fw-bold">등록</span> 하세요
                </p>
              </Fade>

                <img src="https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg" className="main-book-1" alt="img" />
            </div>
            <div className="content-info-right">
                <img src="https://i.pinimg.com/originals/a8/b9/ff/a8b9ff74ed0f3efd97e09a7a0447f892.jpg" className="main-book-1" alt="img" />
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

      <div className="content-section">
        <div className="container">
          {/* <span className="fc-main fs-32 fw-bold">Info 2</span> */}
          <div className="content-info-center">
            <Rotate>
              <img src={tokenImg} className="w-200" alt="img" />
            </Rotate>
            <p className="info-text center-text fc-dark fs-28">
              책을 <span className="fc-main fw-bold">토큰</span> 으로 바꿔보세요
            </p>
          </div>
        </div>
      </div>

      <div 
        className="book-bg"
        style={{
          backgroundImage:
            "url(https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg)",
        }}
      >
        <div className='book-bg-cover '>
          <div className='container flex-sp-box w-100p'>
          
          <div className='flex-col-box'>
            <h1 class="fc-white fs-32">The Great Gatsby</h1>
            <p class="fc-white">The Great Gatsby, F. Scott Fitzgerald’s third book,<br/> stands as the supreme achievement of his career.</p>
          </div>

          <img 
            src = "https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg"
            className="main-book-2" 
            alt="img" 
          />
          </div>
        </div>
      </div>

      

      <div className="content-section">
        <div className="container">
          {/* <span className="fc-main fs-32 fw-bold">Info 3</span> */}
          <div className="content-info-between-1">
            <img src={mapImg} className="w-200" alt="img" />
            <Fade direction="right" cascade triggerOnce>
              <p className="info-text fc-muted fs-28">
                내 주변 사람들의 책을 확인하세요.
              </p>
            </Fade>
          </div>
          <div className="content-info-between-2">
            <Fade direction="left" cascade triggerOnce>
              <p className="info-text fc-muted fs-28">
                지역 사람들과 커뮤니티를 형성해 보세요.
              </p>
            </Fade>
            <img src={locationImg} className="w-200" alt="img" />
          </div>
        </div>
      </div>
    </>
    
  )
}

export default HomePage;