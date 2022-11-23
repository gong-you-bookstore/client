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
      <p className='fc-white '>
      MY GALLERY
      </p>
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