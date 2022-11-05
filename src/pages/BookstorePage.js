import Banner from "../components/common/Banner";
import BookCarousel from "../components/BookCarousel";
import useScrollTo from "../lib/hooks/useScrollTo";
import { useEffect } from "react";

const BookstorePage = ()=>{
  const [gallaryRef, setIsScrollTo] = useScrollTo();

  useEffect(()=>{
    setTimeout(()=>{
      setIsScrollTo(true);
    }, 1100)
  }, [])

  return(
    <>
    <header className="header-shelf">
    <Banner setIsScrollTo={setIsScrollTo}/>
    </header>
      <div className="cement-wallpaper" ref={gallaryRef}>
    
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

export default BookstorePage;