import { useEffect, useState } from "react";
import Loading from "../components/common/Loading";
import logo from '../assets/images/logo_row_white.png'
import React, { lazy, Suspense } from 'react';
import useScrollTo from "../lib/hooks/useScrollTo";
const MultiRecommendedBookContainer = lazy(() => import('../containers/gallery/MultiRecommendedBookContainer'));
const RegisteredBookContainer = lazy(() => import('../containers/gallery/RegisteredBookContainer'));

const GalleryPage = () => {
  const [registeredBooks, setRegisteredBooks] = useState([])
  const [galleryRef, setIsScrollToGallery] = useScrollTo()
  
  useEffect(()=>{
    setTimeout(() => {
      setIsScrollToGallery(true);
    }, 800)
  },[])

  return (
    <>
      <Suspense fallback={<Loading />}>
      <header className="genre-header bg-gallery">
        <div className="overlay">
          <h1 className="subtitle">우리가 만드는 공유책방</h1>
          <img className="w-150 logo" src={logo} alt="img" />
          <div className="mouse-icon" >
            <div className="wheel" />
          </div>
        </div>
      </header>

      <div className="dark-cement-bg" ref={galleryRef}>
        <div className="gallery-area container" >
          <>
          <RegisteredBookContainer 
            registeredBooks = {registeredBooks}
            setRegisteredBooks = {setRegisteredBooks}
          />
          <div className="wood-shelf" />

          <MultiRecommendedBookContainer 
            books = {registeredBooks} 
          />
          <div className="wood-shelf" />

          
          </>
        </div>
      </div>
      </Suspense>
    </>
      
  )
}

export default GalleryPage;