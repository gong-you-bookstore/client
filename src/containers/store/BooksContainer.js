import SearchBarContainer from "./SeachBarContainer"
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getBooks } from "../../lib/api/book";
const BooksContainer = () => {
  const navigate = useNavigate()
  const [totalBooks, setTotalBooks] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  const filteredBooks = totalBooks.filter((book) => {
    return book.title
      .replace(" ","")
      .toLocaleLowerCase()
      .includes(searchWord.toLocaleLowerCase().replace(" ",""))
  })
  
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
            filteredBooks.map((book, index) => (
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
        </div>
      </div>
    </>
  )
}

export default BooksContainer