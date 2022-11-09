import books from '../assets/bookmini.json'
import Sidebar from '../components/common/Sidebar';

const StorePage = () => {

  return (
    <div className="store-grid">
        <div 
        className="store-banner"
        style={{
          backgroundImage:
            "url(https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg)",
        }}
      >
        <div className='store-banner-cover '>
          <div className='container flex-sp-box w-100p'>
          <img 
            src = "https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg"
            className="main-book-2" 
            alt="img" 
          />
          </div>
        </div>
      </div>
      

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
                <div className='flex-col-box-center'>
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