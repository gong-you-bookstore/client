import { useEffect, useState } from "react";

import SearchForm from "../components/SearchForm"
import RegisterForm from "../components/RegisterForm";
import SelectForm from "../components/SelectForm";
import useScrollTo from "../lib/hooks/useScrollTo";
const RegisterContainer = () => {
  const [step2Ref, setIsScrollToStep2] = useScrollTo();
  const [step3Ref, setIsScrollToStep3] = useScrollTo();

  const [searchWord, setSearchWord] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [bookData, setBookData] = useState({})


  useEffect(()=>{
    console.log(bookData)
  },[bookData])

  useEffect(()=>{
    if(searchResults.length){
      setIsScrollToStep2(true);
    }
  },[searchResults])

  useEffect(()=>{
    if(bookData.title) {
      setIsScrollToStep3(true);
    }
  },[bookData])

  return (
    <>
        <SearchForm
          searchWord = {searchWord}
          setSearchWord = {setSearchWord}
          setSearchResults = {setSearchResults}
        />

        <SelectForm 
          searchResults = {searchResults}
          step2Ref = {step2Ref}
          bookData={bookData}
          setBookData = {setBookData}
        />

      {
        bookData.title ? (
          <>
            <RegisterForm
              step3Ref = {step3Ref}
              bookData={bookData}
              setBookData = {setBookData}
            />
          </>
        ) : (<></>)
      }
    </>
  )
}

export default RegisterContainer