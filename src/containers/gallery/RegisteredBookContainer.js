import { useEffect } from "react";
import Shelf from "../../components/gallery/Shelf";
import { getBooks } from "../../lib/api/book";
const RegisteredBookContainer = ({
  registeredBooks,
  setRegisteredBooks
}) => {

  useEffect(()=>{
    getBooks().then(response => {
      setRegisteredBooks(response.data.data)
    }).catch(error => {
      console.log(error);
    })
  },[])

  return (
    <>
      <Shelf books = {registeredBooks} />
    </>
  )
}

export default RegisteredBookContainer;