import { useNavigate } from "react-router-dom";

const Card = ({category}) => {
  const navigate = useNavigate();
  return (
    <div
      className={`card${category.code} genre-card`}
      onClick={() => {
        navigate(
          `/store/genre/${category.code}`, 
          { state: category }
        )
      }}
    >
      <h1 className='fc-white '>
        {category.eng}
      </h1>
    </div>
  )
}

export default Card;