import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import books from "../assets/bookmini.json"
import logo from '../assets/images/logo_row_white.png'
import $ from 'jquery'
import useScrollTo from "../lib/hooks/useScrollTo";


const StoreByGenrePage = () => {
  const {state} = useLocation();
  const params = useParams();
  const [storeRef, setIsScrollToStore] = useScrollTo();
  
  useEffect(()=>{
    $(".genre-header").addClass(`kdc${params.kdc}`)
  }, [])

  
  return (
    <>
    <div className="genre-header">
    <div className="overlay">
    <h1 className="subtitle">#{state}</h1>
        <img className="w-150 mb-20 logo" src={logo} alt="img" />
    </div>
    </div>
    <div className="white-wallpaper" ref={storeRef}>
    <div className="container grid-store">
      
    {
      books.map((book, index) => (
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
    </>
  )
}

export default StoreByGenrePage;