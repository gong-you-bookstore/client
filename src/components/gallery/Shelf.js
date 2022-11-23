import BookCarousel from "./BookCarousel";

const Shelf = ({
  books
}) => {
  return (
    <>
      {/* <h1 className="fc-white fw-bold t-c mb-10"></h1> */}
      <BookCarousel books = {books} />
      <div className="wood-shelf" />
    </>
  )
}

export default Shelf;