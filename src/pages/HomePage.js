import Banner from './../components/common/Banner'
import { Rotate, Fade } from "react-awesome-reveal";
import tokenImg from './../assets/images/coin2.png'
import useScrollTo from "../lib/hooks/useScrollTo";
import { CATEGORIES } from '../lib/statics';
import { useNavigate } from 'react-router-dom';

const HomePage = ()=>{
  const [introRef, setIsScrollTo] = useScrollTo();
  const navigate = useNavigate();
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
          <div className="content-info-center">
            {/* <Rotate>
              <img src={tokenImg} className="w-200" alt="img" />
            </Rotate> */}
            <p className="info-text center-text fc-dark fs-28 fw-bold">

            <Fade direction="up" cascade damping={0.1}>
              다양한 장르의 책들을 찾아보세요
            </Fade>
            </p>


          </div>
        </div>
      </div>

      


      <div className="content-section">
        <div className="container flex-col-box">
          <div className='card-grid-2'>
            <div className='genre-card card000'
              onClick={() => {
                navigate(
                  `/bookstore/genre/${CATEGORIES[0].code}`, 
                  { state: CATEGORIES[0] }
                )
              }}
            >
              <h1 className='fc-white fs-28'>
              Computer Science, Information & General Works
              </h1>
            </div>

            <div className='genre-card card100'
              onClick={() => {
                navigate(
                  `/bookstore/genre/${CATEGORIES[1].code}`, 
                  { state: CATEGORIES[1] }
                )
              }}
            >
              <h1 className='fc-white fs-28'>
                Philosophy 
              </h1>
            </div>
          </div>
          <div className='card-grid-3'>
            <div className='genre-card card200'
              onClick={() => {
                navigate(
                  `/bookstore/genre/${CATEGORIES[2].code}`, 
                  { state: CATEGORIES[2] }
                )
              }}
            >
              <h1 className='fc-white fs-28'>
              Religion
              </h1>
            </div>
            <div className='genre-card card300'
              onClick={() => {
                navigate(
                  `/bookstore/genre/${CATEGORIES[3].code}`, 
                  { state: CATEGORIES[3] }
                )
              }}
            >
              <h1 className='fc-white fs-28'>
              Social Sciences
              </h1>
            </div>
            <div className='genre-card card400'
              onClick={() => {
                navigate(
                  `/bookstore/genre/${CATEGORIES[4].code}`, 
                  { state: CATEGORIES[4] }
                )
              }}
            >
              <h1 className='fc-white fs-28'>
              Natural Science
              </h1>
            </div>
            <div className='genre-card card500'
              onClick={() => {
                navigate(
                  `/bookstore/genre/${CATEGORIES[5].code}`, 
                  { state: CATEGORIES[5] }
                )
              }}
            >
              <h1 className='fc-white fs-28'>
              Technology
              </h1>
            </div>
            <div className='genre-card card600'
              onClick={() => {
                navigate(
                  `/bookstore/genre/${CATEGORIES[6].code}`, 
                  { state: CATEGORIES[6] }
                )
              }}
            >
              <h1 className='fc-white fs-28'>
              Arts & Recreation
              </h1>
            </div>
            <div className='genre-card card700'
              onClick={() => {
                navigate(
                  `/bookstore/genre/${CATEGORIES[7].code}`, 
                  { state: CATEGORIES[7] }
                )
              }}
            >
              <h1 className='fc-white fs-28'>
              Language
              </h1>
            </div>
          </div>
          <div className='card-grid-2'>
            <div className='genre-card card800'
              onClick={() => {
                navigate(
                  `/bookstore/genre/${CATEGORIES[8].code}`, 
                  { state: CATEGORIES[8] }
                )
              }}
            >
              <h1 className='fc-white fs-28'>
              Literature
              </h1>
            </div>
            <div className='genre-card card900'
              onClick={() => {
                navigate(
                  `/bookstore/genre/${CATEGORIES[9].code}`, 
                  { state: CATEGORIES[9] }
                )
              }}
            >
              <h1 className='fc-white fs-28'>
              History & Geography
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default HomePage;