import { useEffect, useState } from "react";
import { getOneRecommendedBook } from "../../lib/api/recommend";
import tempBooks from '../../assets/bookmini.json'
import SingleRecommendedBook from "../../components/store/SingleRecommendedBook";
import { toastMaker } from '../../lib/utils'
import Empty from "../../components/common/Empty";
const SingleRecommendedBookContainer = ({
  isbn,
  setBook
}) => {
  const [recommendedBooks, setRecommendedBooks] = useState([])

  useEffect(() => {
    if(isbn) {
      getOneRecommendedBook(isbn).then(response => {
        setRecommendedBooks(response.data.data);
      }).catch(error => {
        // toastMaker.info("추천 책이 없습니다..!")
      })
    }
    
  })
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