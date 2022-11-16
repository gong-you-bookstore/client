import Banner from "../components/common/Banner"
import useScrollTo from "../lib/hooks/useScrollTo";
import { useEffect, useState } from "react";
import CategoryBox from "../components/bookstore/CategoryBox";
import Shelf from "../components/bookstore/Shelf";
import { getBooks } from "../lib/api/book";
const BookstorePage = () => {
  const [gallaryRef, setIsScrollTo] = useScrollTo();
  

  const [registeredBooks, setRegisteredBooks] = useState([])

  useEffect(()=>{
    getBooks().then(res => {
      setRegisteredBooks(res.data.data)
    })
  },[])

  useEffect(() => {
    setTimeout(() => {
      setIsScrollTo(true);
    }, 1100)
  }, [])

  const getCode = () => {

  }

  return (
    <>
      <header className="header-shelf">
        <Banner />
      </header>

      <div className="cement-wallpaper" ref={gallaryRef} >
        <div className="gallery-area container" >
          <CategoryBox />
          <Shelf books = {registeredBooks} />
          <Shelf books = {registeredBooks} />
          <Shelf books = {registeredBooks} />
      </div>
    </div>
    </>
      
  )
}

export default BookstorePage;