import BookCarousel from "./BookCarousel";

const Shelf = ({
  books,
  isRecommended
}) => {
  return (
    <>
      {/* <h1 className="fc-white fw-bold t-c mb-10"></h1> */}
      <BookCarousel
        books = {books} 
        isRecommended = {isRecommended}
      />
    </>
  )
}

export default Shelf;