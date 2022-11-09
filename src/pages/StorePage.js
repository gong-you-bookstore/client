import books from '../assets/bookmini.json'
import Sidebar from '../components/common/Sidebar';

const StorePage = () => {

  return (
    <div className="store-grid">
      <div className="store-banner"></div>

      <Sidebar />
      <div className="store-area ">
          {
            books.map((book, index) => (
              <div
                key={index}
                className="book-card"
              >
                <img
                  className="book"
                  src = {book.img_url}
                  alt="img" 
                />
                <div>
                  <h1>{book.title}</h1>
                </div>
              </div>
            ))
          }
      </div>
    </div>
  )
}

export default StorePage;