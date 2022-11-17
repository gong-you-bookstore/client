import { CATEGORIES } from "../../lib/statics";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsiveCarousel } from '../../lib/styles';

const CategoryCarousel = () => {
  const navigate = useNavigate();

  return (
    <>
      <Carousel responsive={responsiveCarousel}>
        {
          CATEGORIES.map((category, index) => {
            return (
                <div
                key={index} 
                className={`book-dynamic category-card card${category.code}`}
                onClick={() => {
                  navigate(
                    `/bookstore/genre/${category.code}`, 
                    { state: category }
                  )
                }}
              >
                <h1 className='fc-white fs-20 door-content'>
                # {category.name}
                </h1>
              </div>
            )
          })
        }
      </Carousel>
      <div className="wood-shelf" />
    </>
  )
}

export default CategoryCarousel;

