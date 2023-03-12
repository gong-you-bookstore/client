import Scanner from './Scanner';

const SearchForm = ({ searchWord, camera, setCamera, onDetected, onChangeSearchWord, onClickSearchButton }) => {
  return (
    <>
      <div className="bg-dark-full-vh flex-col-box-center lh-2">
        <div className="container">
          <div className=" desktop-box">
            <h1 className="fc-main fs-32">Step 1</h1>
            <p className="fc-muted fs-28">등록하고 싶은 책을 검색하세요</p>
            {camera && <Scanner onDetected={onDetected} />}
            <div className="mt-20 ">
              <div className="search-bar">
                <input
                  id="searchWord"
                  name="searchWord"
                  type="text"
                  placeholder="검색어를 입력하세요"
                  value={searchWord}
                  onChange={onChangeSearchWord}
                  className="w-100p"
                />
                <span className="material-symbols-outlined" onClick={() => setCamera(!camera)}>
                  barcode_scanner
                </span>
              </div>

              <button type="button" onClick={() => onClickSearchButton()} className="mtb-10 primary-btn btn-big w-100p">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchForm;
