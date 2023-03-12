import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { getMyBooks } from '../../lib/api/book';
import Empty from '../../components/common/Empty';
import BookCarousel from '../../components/gallery/BookCarousel';
const RegisteredBookContainer = ({ registeredBooks, setRegisteredBooks }) => {
  const [cookies] = useCookies(['userData']);

  useEffect(() => {
    getMyBooks(cookies.userData.accessToken).then((response) => {
      setRegisteredBooks(response.data.data);
    });
  }, []);

  return (
    <>
      {registeredBooks.length !== 0 ? (
        <>
          <BookCarousel books={registeredBooks} />
        </>
      ) : (
        <Empty />
      )}
    </>
  );
};

export default RegisteredBookContainer;
