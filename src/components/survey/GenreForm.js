const GenreForm = () => {
  return (
    <>
      <div className="bg-dark-full-vh flex-col-box-center lh-2">
        <div className="container">
          <div className=" desktop-box">
            <span className="fc-main fs-32 fw-bold">Step 2</span>
            <p className="fc-muted fs-28">
              좋아하는 장르를 선택해주세요
            </p>
            
              <input
                id="searchWord"
                name="searchWord"
                type="text"
                placeholder="검색어를 입력하세요"
                // value={searchWord}
                // onChange={onChangeSearchWord}
                className="input-styled w-100p fc-white"
              />


              <button
                type="button"
                className="mtb-10 color-btn w-100p"
              >
                Search
              </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default GenreForm;