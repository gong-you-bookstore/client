import ShelfHeader from "../components/ShelfHeader";
import Nav from "../components/Nav";
import Shelf from "../components/Shelf";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import { useEffect, useRef } from "react";
import Sidebar from "../components/Sidebar";


const Bookstore = ()=>{

  const gallaryRef = useRef();

  const onClickDownBtn = () => {
    gallaryRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return(
    <>
      <Nav />
      <ShelfHeader onClickDownBtn={onClickDownBtn}/>
      
      <div className="stone-wrapper" ref={gallaryRef}>
    
      <h1>Gallery</h1>
        <div className="gallery-area" >
          <Shelf/>
          <Shelf/>
          <Shelf/>
          <Shelf/>
        </div>
      </div>




    </>
  )
}

export default Bookstore;