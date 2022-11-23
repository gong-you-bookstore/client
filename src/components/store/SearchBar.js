import { useEffect, useState } from "react";
import { getBooks } from "../../lib/api/book";

const SearchBar = ({
  searchWord,
  onChangeSearchWord,
  filteredBooks
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