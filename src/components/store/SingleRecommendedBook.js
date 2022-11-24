import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from 'react-router-dom';
import { responsiveCarousel } from "../../lib/styles";
const SingleRecommendedBook = ({books}) => {

  useEffect(() => {
  }, [books])
  return (
    <div className="content-">
      <Carousel responsive={responsiveCarousel}>
      {
        books.map((book, index) => (
          <img
            key={index}
            src={book.thumbnail}
            alt="img"
            className="book-static btn-shadow" 
          />
        ))
      }
      </Carousel>
    </div>
  )
}

export default SingleRecommendedBook;