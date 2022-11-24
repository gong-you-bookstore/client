import React, { lazy, Suspense } from 'react';
import Loading from "../components/common/Loading";
import { Rotate, Fade } from "react-awesome-reveal";
import { useEffect, useState } from "react";
import { getBooks } from '../lib/api/book';
import { useNavigate } from 'react-router-dom';
import Cards from '../components/store/Cards';
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
                <Cards />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
    </>
  )
}

export default GenrePage