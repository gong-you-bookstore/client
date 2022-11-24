import { useLocation } from "react-router-dom";
import logo from '../assets/images/logo_row_white.png'
import $ from 'jquery'
import useScrollTo from "../lib/hooks/useScrollTo";
import { useEffect, useState } from "react";
import { getBooks } from "../lib/api/book";
import React, { lazy, Suspense } from 'react';
import Loading from "../components/common/Loading";
import { useNavigate } from 'react-router-dom';



const SearchBarContainer = lazy(() => import('../containers/store/SeachBarContainer'));

const GenrePage = () => {
  const navigate = useNavigate()
  const [totalBooks, setTotalBooks] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const filteredBooks = totalBooks.filter((book) => {
    return book.title
      .replace(" ","")
      .toLocaleLowerCase()
      .includes(searchWord.toLocaleLowerCase().replace(" ",""))
  })
  useEffect(() => {
    // $(".genre-header").addClass(`bg${state.code}`)

    // setTimeout(() => {
    //   setIsScrollToStore(true);
    // }, 1100)

    getBooks().then(response => {
      console.log(response.data.data);
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



          <div className="content-section">
            <div className="container">
              <div className='card-grid'>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>

    </>
  )
}

export default GenrePage;