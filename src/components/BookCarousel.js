import books from './../assets/bookmini.json'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from 'react-router-dom';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const BookCarousel = ()=>{
  const navigate = useNavigate();
  
  return (
    <>
          <Carousel responsive={responsive}>
            {books.map((book, index)=>(
                <img 
                  key={index} 
                  src={book.img_url} 
                  className="book h-150" 
                  alt="img"
                  onClick={()=>{
                    navigate(`/${book.isbn13}/detail`)
                  }} 
                />
            ))}
          </Carousel>
    </>
  )
}

export default BookCarousel