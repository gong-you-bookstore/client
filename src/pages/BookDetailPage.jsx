import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { getBookDetails } from '../lib/api/book';
import SellerContainer from '../containers/store/SellerContainer';
import SingleRecommendedBookContainer from '../containers/store/SingleRecommendedBookContainer';

const BookDetailPage = () => {
  const { state } = useLocation();
  const [cookies] = useCookies(['userData']);
  const [book, setBook] = useState({});

  useEffect(() => {
    getBookDetails(state.registered, cookies.userData.accessToken)
      .then((response) => {
        setBook(response.data.data);
      })
      .catch((error) => {
        setBook(state.notRegistered);
      });
  }, []);

  if (book) {
    return (
      <div className="white-cement-bg">
        <div
          className="book-banner"
          style={{
            backgroundImage: `url(${book.thumbnail})`,
          }}
        >
          <div className="book-banner-cover">
            <div className="book-info-grid container lh-2">
              <img src={book.thumbnail} className="thumbnail" alt="img" />
              <h1>{book.title}</h1>
              <p>{book.author}</p>
              <p className="">{book.content}</p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="detail-content-box">
            {book.userList ? <SellerContainer sellers={book.userList} isbn={book.isbn} /> : <></>}
            {book.isbn ? <SingleRecommendedBookContainer book={book} setBook={setBook} /> : <></>}
          </div>
        </div>
      </div>
    );
  }

  return <></>;
};

export default BookDetailPage;
