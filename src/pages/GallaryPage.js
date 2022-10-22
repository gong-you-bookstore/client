import ShelfHeader from "../components/ShelfHeader";
import BookCarousel from "../components/BookCarousel";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import { useEffect, useRef } from "react";
import GallaryContainer from "../containers/GallaryContainer";

const GallaryPage = ()=>{

  const gallaryRef = useRef();

  const onClickDownBtn = () => {
    gallaryRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return(
    <>
      <ShelfHeader onClickDownBtn={onClickDownBtn}/>
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