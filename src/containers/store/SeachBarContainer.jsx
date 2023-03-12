import SearchBar from '../../components/store/SearchBar';

const SearchBarContainer = ({ searchWord, setSearchWord }) => {
  const onChangeSearchWord = (event) => {
    setSearchWord(event.target.value);
  };
  return <SearchBar searchWord={searchWord} onChangeSearchWord={onChangeSearchWord} />;
};

export default SearchBarContainer;
