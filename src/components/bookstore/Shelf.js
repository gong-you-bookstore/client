import BookCarousel from "./BookCarousel";

const Shelf = ({
  category,
}) => {
  return (
    <>
    <h1 className="fc-white fw-bold t-c mb-10">{category.name}</h1>
    <BookCarousel/>
    <div className="wood-shelf" />
    </>
  )
}

export default Shelf;