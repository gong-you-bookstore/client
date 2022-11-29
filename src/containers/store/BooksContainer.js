import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
import { toastMaker } from '../../lib/utils';
import Books from '../../components/store/Books';
const BooksContainer = ({
  totalBooks,
  searchWord
}) => {
  const navigate = useNavigate()
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);
  
  const filteredBooks = totalBooks.filter((book) => {
    return book.title
      .replace(" ","")
      .toLocaleLowerCase()
      .includes(searchWord.toLocaleLowerCase().replace(" ",""))
  })

  const onClickBook = (isbn) => {
    if (!cookies.userData) {
      toastMaker.error("로그인이 필요합니다.")
      navigate('/login');
      return;
    }
    navigate(
      `/detail`,
      { state: {
        registered: isbn
      } }
    )
  }


  return (
    <Books 
      filteredBooks = {filteredBooks}
      onClickBook = {onClickBook}
    />
  )
}

export default BooksContainer