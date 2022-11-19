import Banner from './../components/common/Banner'
import { Fade } from "react-awesome-reveal";
import useScrollTo from "../lib/hooks/useScrollTo";
import React, { lazy, Suspense } from 'react';
import Loading from '../components/common/Loading';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../lib/statics';
const About = lazy(() => import('../components/home/About'));
const Card = lazy(() => import('../components/bookstore/Card'));


const HomePage = ()=>{
  const [introRef, setIsScrollTo] = useScrollTo();
  const navigate = useNavigate();

  return(
    <>
    <Suspense fallback={<Loading />}> 
      <header className="header-door">
        <Banner setIsScrollTo={setIsScrollTo} />
      </header>
      <span className="pointer" ref={introRef} />
      
      <div className="content-section">
        <div className="container">
          <div className="content-info-center">
            <div className="info-text center-text fc-dark fs-28 fw-bold">
              <Fade cascade damping={0.1}>
                다양한 장르의 책들을 만나보세요
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div className="content-section">
      <div className="container">
        <div className='home-card-grid'>
          <div className='card-gallery genre-card'
            onClick={() => {
              navigate("/gallery")
            }}
          >
            <h1 className='fc-white '>
            MY GALLERY
            </h1>
          </div>
          {
            CATEGORIES.map((category, index) => (
              <Card key={index} category={category}/>
            ))
          }
        </div>
      </div>
    </div>
    <About />

    </Suspense>
    </>
    
  )
}

export default HomePage;