import Banner from "../components/common/Banner"
import BookCarousel from "../components/bookstore/BookCarousel";
import useScrollTo from "../lib/hooks/useScrollTo";
import { useEffect, useState } from "react";
import CategoryBox from "../components/bookstore/CategoryBox";
import Shelf from "../components/bookstore/Shelf";
import { CATEGORIES } from "../lib/static";

const BookstorePage = () => {
  const [gallaryRef, setIsScrollTo] = useScrollTo();
  const [isView, setIsView] = useState({
    "000": true,
    "100": true,
    "200": true,
    "300": true,
    "400": true,
    "500": true,
    "600": true,
    "700": true,
    "800": true,
    "900": true,
    "111": true,
  });

  // useEffect(()=>{
  //   console.log(isView)
  // },[isView])

  useEffect(() => {
    setTimeout(() => {
      setIsScrollTo(true);
    }, 1100)
  }, [])

  return (
    <>
      <header className="header-shelf">
        <Banner />
      </header>

      <div className="cement-wallpaper" ref={gallaryRef} >
      <div className="gallery-area container" >
        <CategoryBox
          isView={isView}
          setIsView={setIsView}
        />
        <div>
          {
            CATEGORIES.map((category, index) => {
              return isView[category.code] ? (
                <div key={index}>
                  <Shelf 
                    category = {category}
                  />
                </div>
              ) : (<></>)
            })
          }
        </div>
      </div>
    </div>
    </>
      
  )
}

export default BookstorePage;