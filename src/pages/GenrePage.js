import { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
import logo from '../assets/images/logo_row_white.png'
import $ from 'jquery'
import useScrollTo from "../lib/hooks/useScrollTo";
import SearchBarContainer from "../containers/store/SeachBarContainer";
import BooksContainer from "../containers/store/BooksContainer";
import { getBooksByGenre } from "../lib/api/book";

const GenrePage = () => {
  const {state} = useLocation();
  const [storeRef, setIsScrollToStore] = useScrollTo();
  const [totalBooks, setTotalBooks] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    getBooksByGenre(state.code).then(response => {
      // console.log(response)
      setTotalBooks(response.data.data);
    }).catch(error => {
      console.log(error)
    })

    $(".genre-header").addClass(`bg${state.code}`)
    setTimeout(() => {
      setIsScrollToStore(true);
    }, 800)
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
        <BooksContainer 
          totalBooks = {totalBooks}
          searchWord = {searchWord}
        />
      </div>
    </div>
    </>
  )
}

export default GenrePage;