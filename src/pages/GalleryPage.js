import { useEffect, useState } from "react";
import Loading from "../components/common/Loading";
import logo from '../assets/images/logo_row_white.png'
import books from '../assets/bookmini.json'
import React, { lazy, Suspense } from 'react';
import useScrollTo from "../lib/hooks/useScrollTo";
import { getBooks } from "../lib/api/book";
import { getMultiRecommendedBook } from "../lib/api/recommend";

const Shelf = lazy(() => import('../components/bookstore/Shelf'));

const GalleryPage = () => {
  const [registeredBooks, setRegisteredBooks] = useState([])
  const [recommendedBooks, setRecommendedBooks] = useState([])

  const [galleryRef, setIsScrollToGallery] = useScrollTo()

  useEffect(()=>{
    getBooks().then(response => {
      setRegisteredBooks(response.data.data)
    })

    setTimeout(() => {
      setIsScrollToGallery(true);
    }, 1100)
  },[])

  useEffect(()=>{
    if (registeredBooks.length !== 0) {
      getMultiRecommendedBook(registeredBooks).then(response => {
        setRecommendedBooks(response.data.data)
      }).catch(error => {
        console.log("dd", error)
      })    
    }
  },[registeredBooks])

  return (
    <>
      <Suspense fallback={<Loading />}>
      <header className="genre-header bg-gallery">
        <div className="overlay">
          <h1 className="subtitle">우리가 만드는 공유책방</h1>
          <img className="w-150 logo" src={logo} alt="img" />
          <div className="mouse-icon" >
            <div className="wheel" />
          </div>
        </div>
      </header>

      <div className="dark-cement-bg" ref={galleryRef}>
        <div className="gallery-area container" >
          <Shelf books = {registeredBooks} />
          {
            recommendedBooks.length !== 0 ? (
            <Shelf books = {recommendedBooks} />
          ) : (
            <Shelf books = {books} />
          )
          }
          
        </div>
      </div>
      </Suspense>
    </>
      
  )
}

export default GalleryPage;