import Banner from "../components/common/Banner"
import BookCarousel from "../components/BookCarousel";
// import React, { lazy, Suspense } from 'react';
// import Loading from '../components/Loading';
// const Gallery = lazy(() => import('../components/Gallery'));


const GalleryPage = () => {
  return (
    <>
      {/* <Suspense fallback={<Loading />} >
        <Gallery/>
      </Suspense> */}
      <header className="header-shelf">
        <Banner />
      </header>
    
      <div className="cement-wallpaper" >
      <div className="gallery-area container" >
          <div className="flex-col-box-center mtb-50">
            <h1 className="fc-white fs-32 fw-bold">My Collection</h1>
          </div>

          <div>
            <BookCarousel/>
            <div className="wood-shelf" />
            <BookCarousel/>
            <div className="wood-shelf" />
            <BookCarousel/>
            <div className="wood-shelf" />
          </div>
      </div>
    </div>
    </>
      
  )
}

export default GalleryPage;