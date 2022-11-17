import useScrollTo from "../lib/hooks/useScrollTo";
import { useEffect, useState } from "react";
import { getBooks } from "../lib/api/book";
import books from "../assets/bookmini.json"
import { useNavigate } from "react-router-dom";
import Loading from "../components/common/Loading";

import React, { lazy, Suspense } from 'react';

const CategoryCarousel = lazy(() => import('../components/bookstore/CategoryCarousel'));
const Shelf = lazy(() => import('../components/bookstore/Shelf'));

const BookstorePage = () => {
  const [gallaryRef, setIsScrollTo] = useScrollTo();
  const [registeredBooks, setRegisteredBooks] = useState([])
  const navigate = useNavigate();


  useEffect(()=>{
    getBooks().then(response => {
      setRegisteredBooks(response.data.data)
    })
  },[])

  return (
    <>
      <Suspense fallback={<Loading />}>
      <div className="cement-wallpaper" ref={gallaryRef} >
        <div className="gallery-area container" >
          {/* <Shelf books = {registeredBooks} /> */}
          <CategoryCarousel />
          <Shelf books = {books} />
          <Shelf books = {books} />
          <Shelf books = {books} />
        </div>
      </div>
      </Suspense>
    </>
      
  )
}

export default BookstorePage;