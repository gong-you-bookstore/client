import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsiveCarousel } from '../../lib/styles';

const SearchCarousel = ({ searchResults, onClickSelectImg }) => {
  return (
    <Carousel responsive={responsiveCarousel}>
      {searchResults.map((searchResult, index) => (
        <img
          key={index}
          src={searchResult.thumbnail}
          className="book"
          alt="img"
          onClick={() => {
            onClickSelectImg(searchResult);
          }}
        />
      ))}
    </Carousel>
  );
};

export default SearchCarousel;
