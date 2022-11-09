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
                // style={{
                //   backgroundImage:
                //     `url(${book.img_url})`,
                // }}
              >
                <img
                  className="book"
                  src = {book.img_url}
                  alt="img" 
                />
              </div>
            ))
          }
      </div>
    </div>
  )
}

export default StorePage;