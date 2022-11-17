import Banner from "../components/common/Banner"
import useScrollTo from "../lib/hooks/useScrollTo";
import { useEffect, useState } from "react";
import Shelf from "../components/bookstore/Shelf";
import { getBooks } from "../lib/api/book";
import books from "../assets/bookmini.json"
import { CATEGORIES } from "../lib/statics";
import { useNavigate } from "react-router-dom";

import React, { lazy, Suspense } from 'react';
const CategoryCarousel = lazy(() => import('../components/bookstore/CategoryCarousel'));

const BookstorePage = () => {
  const [gallaryRef, setIsScrollTo] = useScrollTo();
  const [registeredBooks, setRegisteredBooks] = useState([])
  const navigate = useNavigate();


  useEffect(()=>{
    getBooks().then(res => {
      setRegisteredBooks(res.data.data)
    })
  },[])

  return (
    <>
      {/* <header className="header-shelf">
        <Banner />
      </header> */}

      <div className="cement-wallpaper" ref={gallaryRef} >
        <div className="gallery-area container" >
          
          {/* <Shelf books = {registeredBooks} /> */}
          <Suspense fallback={<p>loading</p>}>
            <CategoryCarousel />
          </Suspense>
            <Shelf books = {books} />
            <Shelf books = {books} />
            <Shelf books = {books} />
          

        </div>
      </div>
    </>
      
  )
}

export default BookstorePage;