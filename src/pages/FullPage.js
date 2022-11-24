import { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
import logo from '../assets/images/logo_row_white.png'
import $ from 'jquery'
import useScrollTo from "../lib/hooks/useScrollTo";
import { useNavigate } from 'react-router-dom';
import SearchBarContainer from "../containers/store/SeachBarContainer";
import { getBooks } from '../lib/api/book';

const FullPage = () => {
  const [storeRef, setIsScrollToStore] = useScrollTo();
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

    setTimeout(() => {
      setIsScrollToStore(true);
    }, 1100)
  }, [])

  
  return (
    <>
    <header className="genre-header bg-full">
      <div className="overlay">
        <h1 className="subtitle">우리가 만드는 공유책방</h1>
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
                    navigate(
                      `/detail`,
                      { state: book.isbn }
                    )
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

export default FullPage;