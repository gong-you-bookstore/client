import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from 'react-router-dom';
import { responsiveCarousel } from '../../lib/styles';

const BookCarousel = ({books}) => {
  const navigate = useNavigate();
  
  return (
    <>
      <Carousel responsive={responsiveCarousel}>
        {books.map((book, index)=>(
            <img 
              key={index} 
              src={book.thumbnail} 
              className="book-dynamic" 
              alt="img"
              onClick={()=>{
                navigate(
                  `/detail`,
                  { state: {
                    registered: book.isbn
                  } }
                )
              }} 
            />
        ))}
      </Carousel>
    </>
  )
}

export default BookCarousel