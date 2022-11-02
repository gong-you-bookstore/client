import BookCarousel from "../components/BookCarousel"
import Banner from "../components/Banner"
const Test = () => {
  return (
    <>
  {/* <header className="header-shelf">
    <Banner />
    </header> */}

    <div className="main-wrapper">

    <aside>
      ed
    </aside>

    <div className="gallery gallery-area">
      <div className="container w-100p">
        <div className="book-container">
        <BookCarousel/>
        </div>
        <div className="wood-shelf" />
      </div>

      <div className="container w-100p">
        <div className="book-container">
        <BookCarousel/>
        </div>
        <div className="wood-shelf" />
      </div>

      <div className="container w-100p">
        <div className="book-container">
        <BookCarousel/>
        </div>
        <div className="wood-shelf" />
      </div>
      

      
    </div>
    </div>

    </>
  )
}

export default Test