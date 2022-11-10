import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import books from '../assets/bookmini.json'

const BookDetailPage = () => {
  const params = useParams();

  const [book, setBook] = useState({})

  useEffect(()=>{
    // console.log(book);
  }, [book])

  useEffect(() => {

    books.map((item) => {
      if (item.isbn13 == params.isbn13) {
        setBook(item);
      }
    })
  }, [params])

  return (
    <>
    <div 
        className="store-banner"
        style={{
          backgroundImage:
            `url(${book.img_url})`,
        }}
      >
        <div className='store-banner-cover '>
          <div className='container flex-sp-box w-100p'>
          <img 
            src = {book.img_url}
            className="main-book-2" 
            alt="img" 
          />
          </div>
        </div>
      </div>


    </>
  )
}

export default BookDetailPage;