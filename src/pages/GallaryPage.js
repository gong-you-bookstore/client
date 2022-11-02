import Banner from "../components/Banner";
import BookCarousel from "../components/BookCarousel";
import useScrollTo from "../lib/hooks/useScrollTo";

const GallaryPage = ()=>{
  const [gallaryRef, setIsScrollTo] = useScrollTo();

  return(
    <>
    {/* <header className="header-shelf">
    <Banner setIsScrollTo={setIsScrollTo}/>
    </header> */}
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