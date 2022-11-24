import { useEffect,useState } from "react";
import logo from '../assets/images/logo_row_white.png'
import useScrollTo from "../lib/hooks/useScrollTo";
import SearchBarContainer from "../containers/store/SeachBarContainer";
import { getBooks } from '../lib/api/book';
import BooksContainer from "../containers/store/BooksContainer";
const FullPage = () => {
  const [storeRef, setIsScrollToStore] = useScrollTo();
  const [totalBooks, setTotalBooks] = useState([]);
  const [searchWord, setSearchWord] = useState("");


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
        <BooksContainer 
          totalBooks = {totalBooks}
          searchWord = {searchWord}
        />
      </div>
    </div>
    </>
  )
}

export default FullPage;