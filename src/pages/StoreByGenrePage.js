import { useEffect } from "react";
import { useParams } from "react-router-dom";
import books from "../assets/bookmini.json"
const StoreByGenrePage = () => {
  const params = useParams();

  useEffect(()=>{
    console.log(params.kdc);
  }, [])

  return (
    <div className="flex-">
    {
      books.map((book, index) => (
        <img 
          key={index} 
          src={book.thumbnail} 
          className="book-dynamic" 
          alt="img"
          onClick={()=>{
            // navigate(`/${book.isbn13}/detail`)
          }} 
        />
      ))
    }
    </div>
  )
}

export default StoreByGenrePage;