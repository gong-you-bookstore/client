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

const SearchCarousel = ({searchResults, setResult})=>{
  
  return (
    <>
        <span className="fc-main fs-32 fw-bold">Step 2</span>
        <p className="fc-dark fs-28">
        맞는 책을 고르세요
        </p>
          <Carousel responsive={responsive}>
            {searchResults.map((item, index)=>(
              <>
                <img 
                  key={index} 
                  src={item.thumbnail} 
                  className=""
                  onClick={()=>{
                    setResult(item);
                  }}
                
                />
              </>
            ))}
          </Carousel>
    </>
  )
}

export default SearchCarousel