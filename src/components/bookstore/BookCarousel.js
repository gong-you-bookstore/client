import books from '../../assets/bookmini.json'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from 'react-router-dom';
import { responsiveCarousel } from '../../lib/styles';

const BookCarousel = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <Carousel responsive={responsiveCarousel}>
        {books.map((book, index)=>(
            <img 
              key={index} 
              src={book.img_url} 
              className="book-dynamic" 
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