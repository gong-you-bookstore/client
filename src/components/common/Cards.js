import { CATEGORIES } from '../../lib/statics';
import { useNavigate } from 'react-router-dom';
import Card from './Card';

const Cards = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className='card-gallery card'
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
    </>
  )
}

export default Cards;