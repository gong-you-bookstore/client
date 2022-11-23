import SearchBarContainer from "./SeachBarContainer"
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getBooks } from "../../lib/api/book";

// const filteredBooks
const BooksContainer = ({
  filteredBooks
}) => {
  const navigate = useNavigate()
  

  return (
    <>
      

      <div className="content-section">
        <div className='container grid-store'>
          {
            filteredBooks.map((book, index) => (
              <img 
                key={index} 
                src={book.thumbnail} 
                className="book-static book-sd btn-shadow" 
                alt="img"
                onClick={()=>{
                  navigate(`/${book.isbn}/detail`)
                }} 
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default BooksContainer