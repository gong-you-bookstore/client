import logoRowImg from './../assets/images/logo_row_white.png'

const ShelfHeader = () => {
  return (
    <header className="header shelfImg">
        <div className="overlay">
        <img className="logo" src={logoRowImg} />
          <h1 className="subtitle">우리가 만드는 공유책장</h1>
          <button
            className='color-btn'
            type="button"
          >
            GET STARTED
          </button>
            {/* <h1 className="subtitle">우리가 만드는 공유책장</h1>
            <h1 className="title">Open Bookstore</h1>   */}
        </div>  

        <div className="mouse-icon"><div className="wheel"></div></div>
    </header>
  )
}

export default ShelfHeader