import Banner from "../components/common/Banner"
import BookCarousel from "../components/BookCarousel";

const GalleryPage = () => {
  return (
    <>
      <header className="header-shelf">
        <Banner />
      </header>
    
      <div className="cement-wallpaper" >
      <div className="gallery-area container" >
        <div className="flex-col-box-center mtb-50">
          <h1 className="fc-white fs-28 fw-bold">My Collection</h1>
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