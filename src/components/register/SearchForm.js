const SearchForm = ({
  searchWord,
  camera,
  onChangeSearchWord, 
  onClickSearchButton
}) => {
  return (
    <>
      <div className="bg-dark-full-vh flex-col-box-center lh-2">
        <div className="container">
          <div className=" desktop-box">
            <span className="fc-main fs-32 fw-bold">Step 1</span>
            <p className="fc-muted fs-28">
              등록하고 싶은 책을 검색하세요
            </p>
            {
              // camera && <Scanner onDetected={onDetected} />
            }
            <div className="mt-20 " >
              <input
                id="searchWord"
                name="searchWord"
                type="text"
                placeholder="검색어를 입력하세요"
                value={searchWord}
                onChange={onChangeSearchWord}
                className="input-styled w-100p fc-white"
              />
                
              {/* <button 
                type="button"
                onClick={() => setCamera(!camera)}
                className=" color-btn w-100p mtb-10"
              >
                {camera ? "Stop" : "ISBN SCAN"}
              </button> */}

              <button
                type="button"
                onClick={() => onClickSearchButton()}
                className="mtb-10 color-btn w-100p"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchForm;