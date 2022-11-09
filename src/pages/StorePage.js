import { useEffect } from 'react';
import books from '../assets/bookmini.json'
import $ from 'jquery'
import Banner from '../components/common/Banner';
import Sidebar from '../components/common/Sidebar';

const StorePage = ({
  
}) => {

  return (
    <div className='store-wrapper'>
      <Sidebar />
    
      <div className="store-area">
        {
          books.map((book, index) => (
            <div
              key={index}
              className="book-card"
              style={{
                backgroundImage:
                  `url(${book.img_url})`,
              }}
            >
              <div className="book-card-cover">
              <img
                className="book"
                src = {book.img_url}
                alt="img" 
              />
              </div>
            </div>
          ))
        }
        {
          books.map((book, index) => (
            <div
              key={index}
              className="book-card"
              style={{
                backgroundImage:
                  `url(${book.img_url})`,
              }}
            >
              <div className="book-card-cover">
              <img
                className="book"
                src = {book.img_url}
                alt="img" 
              />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default StorePage;