import SearchForm from '../../components/register/SearchForm';
import { useState } from 'react';
import { getBooksByKakao } from '../../lib/services';
import { toastMaker } from '../../lib/utils';

const Step1SearchContainer = ({ setSearchResults, setIsScrollToStep2, isView, setIsView }) => {
  const [searchWord, setSearchWord] = useState('');
  const [camera, setCamera] = useState(false);

  const onDetected = (searchWord) => {
    setSearchWord(searchWord);
  };

  const onChangeSearchWord = (event) => {
    setSearchWord(event.target.value);
  };

  const onClickSearchButton = () => {
    getBooksByKakao(searchWord)
      .then((response) => {
        setSearchResults(response.data.documents);
        setIsView({ ...isView, step2: true });
        setIsScrollToStep2(true);
      })
      .catch((error) => {
        toastMaker.error(error.message);
      });
  };

  return (
    <SearchForm
      searchWord={searchWord}
      camera={camera}
      setCamera={setCamera}
      onDetected={onDetected}
      onChangeSearchWord={onChangeSearchWord}
      onClickSearchButton={onClickSearchButton}
    />
  );
};

export default Step1SearchContainer;
