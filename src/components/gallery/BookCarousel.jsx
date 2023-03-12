import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';
import { responsiveCarousel } from '../../lib/styles';

const BookCarousel = ({ books, isRecommended }) => {
  const navigate = useNavigate();

  return (
    <>
      <Carousel responsive={responsiveCarousel}>
        {books.map((book, index) => (
          <img
            key={index}
            src={book.thumbnail}
            className="book book-dynamic book-carousel-margin"
            alt="img"
            onClick={() => {
              if (isRecommended) {
                navigate(`/detail`, {
                  state: {
                    notRegistered: book,
                  },
                });
                return;
              }
              navigate(`/detail`, {
                state: {
                  registered: book.isbn,
                },
              });
            }}
          />
        ))}
      </Carousel>
    </>
  );
};

export default BookCarousel;
