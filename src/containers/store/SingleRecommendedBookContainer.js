import { useEffect, useState } from "react";
import { getOneRecommendedBook } from "../../lib/api/recommend";
import SingleRecommendedBook from "../../components/store/SingleRecommendedBook";
import Empty from "../../components/common/Empty";
const SingleRecommendedBookContainer = ({
  book,
  setBook
}) => {
  const [recommendedBooks, setRecommendedBooks] = useState([])

  useEffect(() => {
    if(book.isbn) {
      getOneRecommendedBook(book.isbn).then(response => {
        setRecommendedBooks(response.data.data);
      }).catch(error => {

      })
    }
  }, [book])
  return (
    <>
    {
      recommendedBooks.length !== 0 ? (
        <SingleRecommendedBook 
          books = {recommendedBooks} 
          setBook = {setBook}
        />
      ) : (
        <Empty />
      )
    }
    </>
  )
}

export default SingleRecommendedBookContainer;