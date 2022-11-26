import { useEffect } from "react";
import { useCookies } from "react-cookie"
import Shelf from "../../components/gallery/Shelf";
import { getMyBooks } from "../../lib/api/book";
import Empty from "../../components/common/Empty";
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
      {
        registeredBooks.length !== 0 ? (
          <>
          <Shelf books = {registeredBooks} />
          </>
        ) : (
          <Empty message = {"등록된 책이 없습니다.."}/>
        )
      }
    </>
  )
}

export default RegisteredBookContainer;