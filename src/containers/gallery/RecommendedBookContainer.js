import { useEffect, useState } from "react";
import { getMultiRecommendedBook } from "../../lib/api/recommend";
import Shelf from "../../components/gallery/Shelf";
import books from '../../assets/bookmini.json'

const RecommendedBookContainer = ({registeredBooks}) => {
  const [recommendedBooks, setRecommendedBooks] = useState([])

  useEffect(()=>{
    if (registeredBooks.length !== 0) {
      getMultiRecommendedBook(registeredBooks).then(response => {
        setRecommendedBooks(response.data.data)
      }).catch(error => {
        console.log(error)
      })    
    }
  },[registeredBooks])

  return (
    <>
      {
        recommendedBooks.length !== 0 ? (
          <Shelf books = {recommendedBooks} />
        ) : (
          <Shelf books = {books} />
        )
      }
    </>
    
  )
}

export default RecommendedBookContainer;