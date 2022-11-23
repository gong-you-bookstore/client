import SearchBarContainer from "./SeachBarContainer"
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getBooks } from "../../lib/api/book";

// const filteredBooks
const BooksContainer = () => {
  const navigate = useNavigate()
  const [totalBooks, setTotalBooks] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    getBooks().then(response => {
      setTotalBooks(response.data.data);
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <>
      <SearchBarContainer 
        searchWord = {searchWord}
        setSearchWord = {setSearchWord}
      />
      <div className="content-section">
        <div className='container grid-store'>
          {
            Array.isArray(totalBooks) ?(
              <>
              {
                totalBooks.filter((book) => {
                  return book.title
                    .replace(" ","")
                    .toLocaleLowerCase()
                    .includes(searchWord.toLocaleLowerCase().replace(" ",""))
                }).map((book, index) => (
                  <img 
                    key={index} 
                    src={book.thumbnail} 
                    className="book-static book-sd btn-shadow" 
                    alt="img"
                    onClick={()=>{
                      navigate(`/${book.isbn}/detail`)
                    }} 
                  />
                ))
              }
              </>
            ) : (<></>)
          }
        </div>
      </div>
    </>
  )
}

export default BooksContainer