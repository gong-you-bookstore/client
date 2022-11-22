import { useEffect, useState } from "react";
import { getBooks } from "../../lib/api/book";

const SearchBar = () => {
  const [books, setBooks] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  const onChangeSearchWord = (event) => {
    setSearchWord(event.target.value)
  }

  const filteredBooks = books.filter((book) => {
    return book.title
      .replace(" ","")
      .toLocaleLowerCase()
      .includes(searchWord.toLocaleLowerCase().replace(" ",""))
  })
  
  useEffect(() => {
    getBooks().then(response => {
      setBooks(response.data.data);
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div className='container'>
      <div className="desktop-box">
    <div className="search-bar ">
      <input
        id="searchWord"
        name="searchWord"
        type="text"
        placeholder="검색어를 입력하세요"
        value={searchWord}
        onChange={onChangeSearchWord}
        className="w-100p"
      />
        <span className="material-symbols-outlined">
          search
        </span>
    </div>
    
    {
      filteredBooks.map(filteredBook => (
        <div>
          <span>
            {/* {filteredBook.title} */}
          </span>
        </div>
      ))
    }
    </div>
    </div>
  )
}

export default SearchBar;