import Banner from './../components/common/Banner'
import { Fade } from "react-awesome-reveal";
import useScrollTo from "../lib/hooks/useScrollTo";
import React, { lazy, Suspense } from 'react';
import Loading from '../components/common/Loading';
import GenreInfo from '../components/home/GenreInfo';
const About = lazy(() => import('../components/home/About'));

const HomePage = ()=>{
  const [introRef, setIsScrollTo] = useScrollTo();
  return(
    <>
    <Suspense fallback={<Loading />}> 
      <Banner setIsScrollTo={setIsScrollTo} />
      <span className="pointer" ref={introRef} />

      <About />
      <div className="content-section">
      </div>

      <div className="content-section bg-gallery home-gallery">
        <div className="container">
          <Fade cascade damping={0.1}>
            <div className="info-text center-text fs-28 fw-bold">
                갤러리에서<br/>
                내 책을 관리하고<br/>
                새로운 책을<br/>
                만나보세요
            </div>
            </Fade>
          </div>
      </div>
      <div className="content-section">
      </div>

      
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

      <GenreInfo />
      
      


      <div className="content-section">
      </div>
    </Suspense>
    </>
    
  )
}

export default HomePage;