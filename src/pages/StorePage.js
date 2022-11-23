import React, { lazy, Suspense } from 'react';
import Loading from "../components/common/Loading";
import { Rotate, Fade } from "react-awesome-reveal";
import { useEffect, useState } from "react";
import { getBooks } from '../lib/api/book';

const Cards = lazy(() => import('../components/common/Cards'));
const SearchBarContainer = lazy(() => import('../containers/store/SeachBarContainer'));

const StorePage = () => {
  const [totalBooks, setTotalBooks] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  const filteredBooks = totalBooks.filter((book) => {
    return book.title
      .replace(" ","")
      .toLocaleLowerCase()
      .includes(searchWord.toLocaleLowerCase().replace(" ",""))
  })
  
  useEffect(() => {
    getBooks().then(response => {
      setTotalBooks(response.data.data);
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <>
    <Suspense fallback={<Loading />}>
      <div className="white-cement-bg">
        <div className="gallery-area">
          <div className="content-section">
            <div className="container">
              <div className='card-grid'>
                <Cards />
              </div>
            </div>
          </div>

          <SearchBarContainer 
            searchWord = {searchWord}
            setSearchWord = {setSearchWord}
          />

          <div className="content-section">
            <div className='container grid-store'>
            {
              filteredBooks.map((book, index) => (
                <img 
                  key={index} 
                  src={book.thumbnail} 
                  className="book-static book-sd" 
                  alt="img"
                  onClick={()=>{
                    // navigate(`/${book.isbn13}/detail`)
                  }} 
                />
              ))
            }
            </div>
          </div>
          
        </div>
      </div>
    </Suspense>
    </>
  )
}

export default StorePage