import SearchForm from "../../components/register/SearchForm";
import { useState } from "react";
import { getBooksByKakao } from "../../lib/services";


const SearchContainer = ({
  setSearchResults, 
  setIsScrollToStep2,
  isView,
  setIsView
}) => {
  const [searchWord, setSearchWord] = useState('');
  const [camera, setCamera] = useState(false);

  const onDetected = searchWord => {
    setSearchWord(searchWord);
  };

  const onChangeSearchWord = (event) => {
    setSearchWord(event.target.value);
  };

  const onClickSearchButton = () => {
    getBooksByKakao(searchWord)
      .then((res) => {
        setSearchResults(res.data.documents)
        setIsView({...isView, step2: true})
        setIsScrollToStep2(true)
      })
      .catch((error) => {
        console.log("작성실패", error);
      });
  };

  return (
    <>
      <SearchForm 
        searchWord = {searchWord}
        camera = {camera}
        setCamera = {setCamera}
        onDetected = {onDetected}
        onChangeSearchWord = {onChangeSearchWord}
        onClickSearchButton = {onClickSearchButton}
      />
    </>
  )
}

export default SearchContainer;