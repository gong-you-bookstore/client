import Banner from "../components/common/Banner"
import BookCarousel from "../components/BookCarousel";
import { useNavigate } from "react-router-dom";
import { CATEGORIES } from "../assets/data";
import $ from 'jquery'
const GalleryPage = () => {
  return (
    <>
      <header className="header-shelf">
        <Banner />
      </header>
    
      <div className="cement-wallpaper" >
      <div className="gallery-area container" >
        <div className=" mtb-50">
            <ul className="category-box">
              <li>
                <button
                  className='transparent-btn btn-shadow m-5 active'
                  type="button"
                  onClick={()=>{
                    $(`.category-box li:nth-child(1) button`).toggleClass("active")

                    if($(`.category-box li:nth-child(1) button`).hasClass("active")) {
                      $(`.category-box li:nth-child(n+2) button`).removeClass("active")
                    }
                  }}
                  >
                  # 전체
                </button>
              </li>
              {
                CATEGORIES.map((category, index) => (
                  <li key={index}>
                    <button
                    className='transparent-btn btn-shadow m-5'
                    type="button"
                    onClick={()=>{
                      $(`.category-box li:nth-child(1) button`).removeClass("active");
                      $(`.category-box li:nth-child(${index + 2}) button`).toggleClass("active");
                    }}
                    >
                    #{category.code} {category.name}
                    </button>
                  </li>
                ))
              }
            </ul>
      {/* <h1 className="fc-white fs-28 fw-bold">My Collection</h1> */}
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