import books from '../../assets/bookmini.json'
import { Fade } from "react-awesome-reveal";

const Slider = () => {
  return (
    <>
    <div className="content-section ">
      <div className="container info-text center-text fc-muted fs-28 fw-bold mb-50">
        <Fade cascade damping={0.1}>
          <span>공유책방에서</span>
          <span>새로운 책을 만나보세요</span>
        </Fade>
      </div>
      <ul className='slidesR'>
      {
        books.map((book, index)=>(
          <li key={index}>
            <img 
              src={book.thumbnail} 
              className="h-150 slide" 
              alt="img"
            />
          </li>
        ))
      }
      </ul>
      <ul className='slidesL'>
      {
        books.map((book, index)=>(
          <li key={index}>
            <img 
              src={book.thumbnail} 
              className="h-150 slide" 
              alt="img"
            />
          </li>
        ))
      }
      </ul>
    </div>
    </>
  )
}

export default Slider;