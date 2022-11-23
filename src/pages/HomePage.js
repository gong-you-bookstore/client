import Banner from './../components/common/Banner'
import { Fade, Rotate } from "react-awesome-reveal";
import useScrollTo from "../lib/hooks/useScrollTo";
import React, { lazy, Suspense } from 'react';
import Loading from '../components/common/Loading';
import pop from '../assets/images/pop-coin.png'
const About = lazy(() => import('../components/home/About'));
const Slider = lazy(() => import('../components/home/Slider'));
const Cards = lazy(() => import('../components/common/Cards'));

const HomePage = ()=>{
  const [introRef, setIsScrollTo] = useScrollTo();
  return(
    <>
    <Suspense fallback={<Loading />}> 
      <header className="header-door">
        <Banner setIsScrollTo={setIsScrollTo} />
      </header>
        
      <span className="pointer" ref={introRef} />

      <About />

      <div className="content-section">
        <div className="container">
          <div className="content-info-center">
            <div className="info-text center-text fc-dark fs-28 fw-bold">
              <Fade cascade damping={0.1}>
                다양한 장르의 책들을 찾아보세요
              </Fade>
            </div>
          </div>
        </div>
      </div>


      <div className="content-section">
        <div className="container">
          <div className='home-card-grid'>
            <Cards />
          </div>
        </div>
      </div>

      

      <div className="content-section">
      </div>

    </Suspense>
    </>
    
  )
}

export default HomePage;