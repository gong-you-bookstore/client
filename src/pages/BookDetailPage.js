import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useCookies } from "react-cookie"
import { getBookDetails } from "../lib/api/book";
import { toastMaker } from "../lib/utils";

import SingleRecommendedBookContainer from "../containers/store/SingleRecommendedBookContainer";
const BookDetailPage = () => {
  const {state} = useLocation();
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);
  const [book, setBook] = useState({})
  
  useEffect(() => {
    getBookDetails(state, cookies.userData.accessToken)
      .then(response => {
      console.log(response)
      setBook(response.data.data)
    })
      .catch(error => {
        console.log(error)
    })
  }, [])

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
  
      <div className='container lh-2'>
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
        <SingleRecommendedBookContainer isbn = {book.isbn}/>
        <div className="bg-white-full-px">
          <h1 className="">등록한사람</h1>
          {
            book.userList ? (<>{
              book.userList.map(user => (
                <p>{user}</p>
              ))
            }</>) : (<></>)
          }
        </div>
      </div>
      </>
    )
  }

  return (<></>)
  
}

export default BookDetailPage;