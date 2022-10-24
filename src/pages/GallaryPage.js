import Banner from "../components/Banner";
import BookCarousel from "../components/BookCarousel";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import { useEffect, useRef } from "react";

const GallaryPage = ()=>{

  const gallaryRef = useRef();

  const onClickDownBtn = () => {
    gallaryRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return(
    <>
    <header className="header-shelf">
    <Banner onClickDownBtn={onClickDownBtn}/>
    </header>
      <div className="cement-wallpaper" ref={gallaryRef}>
    
      <h1>Gallery</h1>
        <div className="gallery-area" >

        <div className="container">
          <BookCarousel/>
        </div>
        <div className="wood-shelf" />

        <div className="container">
          <BookCarousel/>
        </div>
        <div className="wood-shelf" />

        <div className="container">
          <BookCarousel/>
        </div>
        <div className="wood-shelf" />


          
        </div>
      </div>




    </>
  )
}

export default GallaryPage;