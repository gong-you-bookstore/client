import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
import { toastMaker } from '../../lib/utils';
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
  return (
    <>
      <div className="content-section">
        <div className='container grid-store'>
          {
            filteredBooks.map((book, index) => (
              <img 
                key={index} 
                src={book.thumbnail} 
                className="book-static" 
                alt="img"
                onClick={()=>{
                  if (!cookies.userData) {
                    toastMaker.error("로그인이 필요합니다.")
                    navigate('/login');
                    return;
                  }
                  
                  navigate(
                    `/detail`,
                    { state: {
                      registered: book.isbn
                    } }
                  )
                }} 
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default BooksContainer