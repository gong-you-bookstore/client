import SearchBar from "../../components/store/SearchBar";
import { useEffect, useState } from "react";
import { getBooks } from "../../lib/api/book";

const SearchBarContainer = ({
  searchWord,
  setSearchWord
}) => {
  const onChangeSearchWord = (event) => {
    setSearchWord(event.target.value)
  }

  return (
    <SearchBar 
      searchWord = {searchWord}
      onChangeSearchWord = {onChangeSearchWord}
    />
  )
}

export default SearchBarContainer;