import { useEffect, useState } from "react";
import { getMultiRecommendedBook } from "../../lib/api/recommend";
import Shelf from "../../components/gallery/Shelf";
import books from '../../assets/bookmini.json'

const MultiRecommendedBookContainer = ({books}) => {
  const [recommendedBooks, setRecommendedBooks] = useState([])
  const isbns = [];
  useEffect(()=>{
    books.map(book => {
      isbns.push(book.isbn)
    })

    if (isbns.length !== 0) {
      getMultiRecommendedBook(isbns).then(response => {
        setRecommendedBooks(response.data.data)
      }).catch(error => {
        setRecommendedBooks(books)
        console.log(error)
      })    
    }
  },[books])

  return (
    <>
      <Shelf books = {recommendedBooks} />
    </>
    
  )
}

export default MultiRecommendedBookContainer;