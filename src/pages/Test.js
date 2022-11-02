import BookCarousel from "../components/BookCarousel"
import Banner from "../components/Banner"
const Test = () => {
  return (
    <>
  <header className="header-shelf">
    <Banner />
    </header>

    <div className="main-wrapper">

    <aside>
      ed
    </aside>

    <div className="gallery gallery-area">
      <div className="container w-100p">
            <BookCarousel/>
          </div>
      <div className="wood-shelf" />
      <div className="container w-100p">
            <BookCarousel/>
          </div>
          <div className="wood-shelf" />

          <div className="container w-100p">
            <BookCarousel/>
          </div>
          <div className="wood-shelf" />
      </div>
    </div>
    </>
  )
}

export default Test