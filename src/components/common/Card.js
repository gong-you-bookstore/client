import { useNavigate } from "react-router-dom";

const Card = ({category}) => {
  const navigate = useNavigate();
  return (
    <div
      className={`card${category.code} card `}
      onClick={() => {
        navigate(
          `/store/genre/${category.code}`, 
          { state: category }
        )
      }}
    >
      <p className='fc-white '>
        {category.eng}
      </p>
    </div>
  )
}

export default Card;