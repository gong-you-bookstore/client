const Books = ({
  filteredBooks,
  onClickBook
}) => {
  return (
    <>
      <div className="content-section">
        <div className='container grid-store'>
          {
            filteredBooks.map((book, index) => (
              <img 
                key={index} 
                src={book.thumbnail} 
                className="book book-static" 
                alt="img"
                onClick={()=>{
                  onClickBook(book.isbn)
                }} 
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Books;