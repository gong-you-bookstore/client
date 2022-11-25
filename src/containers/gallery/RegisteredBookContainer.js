import { useEffect } from "react";
import { useCookies } from "react-cookie"
import Shelf from "../../components/gallery/Shelf";
import { getMyBooks } from "../../lib/api/book";
const RegisteredBookContainer = ({
  registeredBooks,
  setRegisteredBooks
}) => {
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);


  useEffect(()=>{
    getMyBooks(cookies.userData.accessToken).then(response => {
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