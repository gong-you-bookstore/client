import { useEffect, useState } from "react";
import { getOneRecommendedBook } from "../../lib/api/recommend";
import tempBooks from '../../assets/bookmini.json'
import SingleRecommendedBook from "../../components/store/SingleRecommendedBook";

const SingleRecommendedBookContainer = ({isbn}) => {
  const [recommendedBooks, setRecommendedBooks] = useState([])

  useEffect(() => {
    getOneRecommendedBook(isbn).then(response => {
      setRecommendedBooks(response.data.data);
    }).catch(error => {
      setRecommendedBooks(tempBooks);
    })
  })
  return (
    <>
      <SingleRecommendedBook books = {recommendedBooks} />
    </>
  )
}

export default SingleRecommendedBookContainer;