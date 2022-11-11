import { useLocation, useNavigate } from 'react-router-dom'
import logoRowImg from './../../assets/images/logo_row_white.png'

const Banner = ({setIsScrollTo}) => {
  const {pathname} = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <div className="overlay">
        <h1 className="subtitle">우리가 만드는 공유책장</h1>
        <img className="w-150 mb-20" src={logoRowImg} alt="img" />

        {
          pathname === "/" ? (
            <>
            <button
            className='color-btn'
            type="button"
            onClick={()=>navigate("/gallery")}
            >
              입장하기
            </button>

            {/* <button
            className='transparent-btn mt-10'
            type="button"
            onClick={()=>navigate("/bookstore")}
            >
            ABOUT US
            </button> */}
            </>
          ) : (<></>)
        }
          
      </div>  
      {
        pathname === "/" ? (
          <>
            <div className="shape">
              <svg viewBox="0 0 1500 200">
                <path d="m 0,240 h 1500.4828 v -71.92164 c 0,0 -286.2763,-81.79324 -743.19024,-81.79324 C 300.37862,86.28512 0,168.07836 0,168.07836 Z" />
              </svg>
            </div>  
          </>
        ) : (
          <></>
        )
      }
      
      <div className="mouse-icon" onClick={()=>{setIsScrollTo(true)}}>
        <div className="wheel">
        </div>
      </div>
    </>
  )
}

export default Banner;