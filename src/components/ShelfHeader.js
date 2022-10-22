import { useNavigate } from 'react-router-dom'

import logoRowImg from './../assets/images/logo_row_white.png'

const ShelfHeader = ({onClickDownBtn}) => {
  const navigate = useNavigate();

  return (
    <header className="header-shelf">
        <div className="overlay">

        <h1 className="subtitle">우리가 만드는 공유책장</h1>

        <img className="w150 mb-20" src={logoRowImg} />
          <button
            className='color-btn'
            type="button"
            onClick={()=>navigate('/login')}

          >
            GET STARTED
          </button>

        </div>  

        <div className="mouse-icon" onClick={()=>{onClickDownBtn()}}>
          <div className="wheel"></div>
        </div>
    </header>
  )
}

export default ShelfHeader