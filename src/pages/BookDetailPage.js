import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie"

import { getBookDetails } from "../lib/api/book";
import { toastMaker } from "../lib/utils";
const BookDetailPage = () => {
  const params = useParams();
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);
  const [book, setBook] = useState({})


  useEffect(() => {
    getBookDetails(params.isbn13, cookies.userData.accessToken)
      .then(response => {
      console.log(response.data.data)

      setBook(response.data.data)
    })
      .catch(error => {
      toastMaker.error(error.message)
    })
    
  }, [params])

  if (book) {
    return (
      <>
      <div 
        className="book-banner"
        style={{
          backgroundImage:
            `url(${book.thumbnail})`,
        }}
      >
        <div className='book-banner-cover '>
          
        </div>
      </div>
  
      <div className='container'>
        <div className="detail-grid">
          <h1 className="fc-white">{book.title}</h1>
          <img 
            src = {book.thumbnail}
            className="thumbnail" 
            alt="img" 
          />
          <p>{book.author}</p>
          <p>{book.content}</p>
        </div>
  
        <h1 className="">등록한사람</h1>
        {
          book.userList ? (<>{
            book.userList.map(user => (
              <p>user</p>
            ))
          }</>) : (<></>)
        }
      </div>
      </>
    )
  }

  return (<></>)
  
}

export default BookDetailPage;