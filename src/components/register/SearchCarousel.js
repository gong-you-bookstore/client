import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

const SearchCarousel = ({
  searchResults, 
  onClickSelectImg, 
})=>{
  return (
    <Carousel responsive={responsive}>
      {searchResults.map((searchResult, index)=>(
          <img 
            key={index} 
            src={searchResult.thumbnail} 
            className="h-150 c-p"
            alt="img" 
            onClick={()=>{
              onClickSelectImg(searchResult)
            }}
          
          />
      ))}
    </Carousel>
  )
}

export default SearchCarousel