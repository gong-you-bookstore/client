import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsiveCarousel } from "../../lib/styles";
import { scrollToTop } from "../../lib/utils";
const SingleRecommendedBook = ({
  books,
  setBook
}) => {
  return (
    <div className="content-section">
      <Carousel responsive={responsiveCarousel}>
      {
        books.map((book, index) => (
          <img
            key={index}
            src={book.thumbnail}
            alt="img"
            className="book-static btn-shadow"
            onClick={()=>{
              setBook(book);
              scrollToTop();
            }} 
          />
        ))
      }
      </Carousel>
    </div>
  )
}

export default SingleRecommendedBook;