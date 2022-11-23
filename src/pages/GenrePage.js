import { useLocation, useParams } from "react-router-dom";
import logo from '../assets/images/logo_row_white.png'
import $ from 'jquery'
import useScrollTo from "../lib/hooks/useScrollTo";
import BooksContainer from "../containers/store/BooksContainer";
import SearchBarContainer from "../containers/store/SeachBarContainer";
import { useEffect, useState } from "react";
import { getBooks } from "../lib/api/book";
import { useNavigate } from 'react-router-dom';

const GenrePage = () => {
  const {state} = useLocation();
  const [storeRef, setIsScrollToStore] = useScrollTo();
  const navigate = useNavigate()
  
  useEffect(()=>{
    $(".genre-header").addClass(`bg${state.code}`)

    setTimeout(() => {
      setIsScrollToStore(true);
    }, 1100)
  }, [])




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
    <header className="genre-header">
      <div className="overlay">
        <h1 className="subtitle">#{state.code} {state.name}</h1>
        <img className="w-150 logo" src={logo} alt="img" />
        <div className="mouse-icon" >
          <div className="wheel" />
        </div>
      </div>
    </header>

    <div className="white-cement-bg" ref={storeRef}>
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
      </div>
    </div>
    </>
  )
}

export default GenrePage;