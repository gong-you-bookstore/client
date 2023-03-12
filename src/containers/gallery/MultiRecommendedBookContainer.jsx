import { useEffect, useState } from 'react';
import { getMultiRecommendedBook } from '../../lib/api/recommend';
import Empty from '../../components/common/Empty';
import BookCarousel from '../../components/gallery/BookCarousel';
const MultiRecommendedBookContainer = ({ books }) => {
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const isbns = [];
  useEffect(() => {
    books.forEach((book) => {
      isbns.push(book.isbn);
    });

    if (isbns.length !== 0) {
      getMultiRecommendedBook(isbns).then((response) => {
        setRecommendedBooks(response.data.data);
      });
    }
  }, [books]);

  return (
    <>{recommendedBooks.length !== 0 ? <BookCarousel books={recommendedBooks} isRecommended={true} /> : <Empty />}</>
  );
};

export default MultiRecommendedBookContainer;
