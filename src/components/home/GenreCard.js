import { CATEGORIES } from '../../lib/statics';
import { useNavigate } from 'react-router-dom';
import Card from '../bookstore/Card';

const GenreCard = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className="content-section">
      <div className="container">
        <div className='card-grid'>
          <div className='card-gallery genre-card'
            onClick={() => {
              navigate("/gallery")
            }}
          >
            <h1 className='fc-white '>
            MY GALLERY
            </h1>
          </div>
          {
            CATEGORIES.map((category, index) => (
              <Card key={index} category={category}/>
            ))
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default GenreCard;