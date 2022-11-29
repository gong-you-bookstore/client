import { CATEGORIES } from '../../lib/statics';
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
import { toastMaker } from '../../lib/utils';
const Cards = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);

  return (
    <>
    <div className='card-full card'
      onClick={() => {
        navigate("/full")
      }}
    >
      <p className='fc-white '>
        VIEW ALL
      </p>
    </div>
    {/* <div className='card-gallery card'
      onClick={() => {
        if (!cookies.userData) {
          toastMaker.error("로그인이 필요합니다.")
          navigate('/login');
          return;
        }
        navigate("/gallery")
      }}
    >
      <p className='fc-white '>
      MY GALLERY
      </p>
    </div> */}
    {
      CATEGORIES.map((category, index) => (
        <div
          key={index}
          className={`card${category.code} card `}
          onClick={() => {
            navigate(
              `/genre`, 
              { state: category }
            )
          }}
        >
          <p className='fc-white '>
            {category.eng}
          </p>
        </div>
      ))
    }
    </>
  )
}

export default Cards;