import { CATEGORIES } from '../../lib/statics';
import { useNavigate } from 'react-router-dom';

const GenreInfo = () => {
  const navigate = useNavigate();

  return (
    <div className="content-section">
      <div className="container">
        <div className="home-info-grid">
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
        </div>
      </div>
    </div>
  );
};

export default GenreInfo;
