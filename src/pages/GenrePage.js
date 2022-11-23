import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import logo from '../assets/images/logo_row_white.png'
import $ from 'jquery'
import useScrollTo from "../lib/hooks/useScrollTo";
import BooksContainer from "../containers/store/BooksContainer";

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
      <div className="gallery-area">
        <BooksContainer />
      </div>
    </div>
    </>
  )
}

export default GenrePage;