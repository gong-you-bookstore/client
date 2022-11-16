import { onClickCategory } from "../../lib/utils";
import { CATEGORIES } from "../../lib/statics";
import { useNavigate } from "react-router-dom";

const CategoryBox = ({
  
}) => {
  const navigate = useNavigate();

  return (
    <div className=" mtb-50">
      <ul className="category-box">
        {
          CATEGORIES.map((category, index) => (
            <li key={index}>
              <button
                type="button"
                name={category.code}
                className='transparent-btn btn-sm m-5 btn-shadow'
                onClick = {() => {
                  navigate(
                    `/bookstore/genre/${category.code}`, 
                    { state: category }
                  )
                }}
              >
              # {category.name}
              </button>
            </li>
          ))
        }
      </ul>
  </div>
  )
}

export default CategoryBox;

