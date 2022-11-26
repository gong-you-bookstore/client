import { useEffect, useState } from "react";
import { getMultiRecommendedBook } from "../../lib/api/recommend";
import Empty from "../../components/common/Empty";
import BookCarousel from "../../components/gallery/BookCarousel";
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
      })    
    }
  },[books])

  return (
    <>
      {
        recommendedBooks.length !== 0 ? (
          <>
          <BookCarousel 
            books = {recommendedBooks}
            isRecommended = {true}
          />
          </>
        ) : (
          <Empty message = {"추천책이 없습니다.."}/>
        )
      }
    </>
    
  )
}

export default MultiRecommendedBookContainer;