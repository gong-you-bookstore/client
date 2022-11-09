import React from 'react';
import BookCarousel from "./BookCarousel"
const Gallery = () => {
  return (
    <>
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

export default Gallery