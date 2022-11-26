import { useEffect, useState } from "react";
import { getMultiRecommendedBook } from "../../lib/api/recommend";
import Shelf from "../../components/gallery/Shelf";
import Empty from "../../components/common/Empty";
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
          <Shelf books = {recommendedBooks} />
        ) : (
          <Empty />
        )
      }
    </>
    
  )
}

export default MultiRecommendedBookContainer;