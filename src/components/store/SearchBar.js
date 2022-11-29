const SearchBar = ({
  searchWord,
  onChangeSearchWord,
}) => {
  return (
    <div className='container'>
      <div className="desktop-box">
    <div className="search-bar ">
      <span className="material-symbols-outlined">
        search
      </span>
      <input
        id="searchWord"
        name="searchWord"
        type="text"
        placeholder="검색어를 입력하세요"
        value={searchWord}
        onChange={onChangeSearchWord}
        className="w-100p"
      />
    </div>
    </div>
    </div>
  )
}

export default SearchBar;