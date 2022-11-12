import { onClickCategory } from "../../lib/utils";
import { CATEGORIES } from "../../lib/static";

const CategoryBox = ({
  isView,
  setIsView
}) => {
  return (
    <div className=" mtb-50">
      <ul className="category-box">
        {
          CATEGORIES.map((category, index) => (
            <li key={index}>
              <button
                name={category.code}
                className='transparent-btn btn-shadow m-5 active'
                type="button"
                onClick={(event) => {
                  onClickCategory(index)
                  setIsView({
                    ...isView,
                    [event.target.name]: !isView[category.code]
                  })
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

