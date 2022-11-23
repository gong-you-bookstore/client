import { useNavigate } from 'react-router-dom';

// const filteredBooks
const BooksContainer = ({
  totalBooks,
  searchWord
}) => {
  const navigate = useNavigate()
  
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