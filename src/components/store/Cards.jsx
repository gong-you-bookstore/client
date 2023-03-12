import { CATEGORIES } from '../../lib/statics';
import { useNavigate } from 'react-router-dom';

const Cards = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="card-full card"
        onClick={() => {
          navigate('/full');
        }}
      >
        <p className="fc-white ">VIEW ALL</p>
      </div>
      {CATEGORIES.map((category, index) => (
        <div
          key={index}
          className={`card${category.code} card `}
          onClick={() => {
            navigate(`/genre`, { state: category });
          }}
        >
          <p className="fc-white ">{category.eng}</p>
        </div>
      ))}
    </>
  );
};

export default Cards;
