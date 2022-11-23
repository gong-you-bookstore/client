import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import books from "../assets/bookmini.json"
import logo from '../assets/images/logo_row_white.png'
import $ from 'jquery'
import useScrollTo from "../lib/hooks/useScrollTo";
import { Rotate, Fade } from "react-awesome-reveal";


const GenrePage = () => {
  const {state} = useLocation();
  const [storeRef, setIsScrollToStore] = useScrollTo();
  
  useEffect(()=>{
    $(".genre-header").addClass(`bg${state.code}`)

    setTimeout(() => {
      setIsScrollToStore(true);
    }, 1100)
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
      <div className="container grid-store gallery-area">
        <Fade direction="down" cascade triggerOnce damping={0.1}>
        
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
        </Fade>
      </div>
    </div>
    </>
  )
}

export default GenrePage;