import { useEffect, useState } from "react";
import { useCookies } from "react-cookie"
import SellerListForm from "../../components/store/SellerListForm";
import SellerItemForm from "../../components/store/SellerItemForm";
import { toastMaker } from "../../lib/utils";
import { getUserBook } from "../../lib/api/book";
import { useNavigate } from "react-router-dom";
import useScrollTo from '../../lib/hooks/useScrollTo'

const SellerContainer = ({
  sellers,
  isbn
}) => {
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);
  const navigate = useNavigate();
  const [isViewList, setIsViewList] = useState(true);
  const [selectedUserEmail, setSelectedUserEmail] = useState("");
  const [selectedUserData, setSelectedUserData] = useState({});
  const onToggleView = () => {
    setIsViewList(!isViewList);
  }

  const onClickUser = (email) => {
    setSelectedUserEmail(email);
    onToggleView();
  }

  const onClickMessage = (shelfId, userEmail, myEmail) => {
    if (userEmail === myEmail) {
      toastMaker.error("자신한테 메시지를 보낼 수 없습니다.")
      return;
    }
    navigate(
      '/message',
      {state: {
        shelfId,
        userEmail,
        myEmail
      }}
    )
  }

  const statusMap = {
    SHARE: "나눔",
    SOLD: "판매완료",
    UNSOLD: "판매중",
    READ: "미판매",
    PENDING: "예약",
  }

  useEffect(() => {
    if (selectedUserEmail) {
      getUserBook(isbn, selectedUserEmail, cookies.userData.accessToken).then(response => {
        console.log(response)
        setSelectedUserData(response.data.data);
      }).catch(error => {
        console.log(error)
      })
    }
  }, [selectedUserEmail])

  

  return (
    <>
    {
      isViewList ? (
        <SellerListForm
          sellers = {sellers}
          onClickUser = {onClickUser}
          cookies = {cookies}
          onClickMessage = {onClickMessage}
          selectedUserData = {selectedUserData}
          selectedUserEmail = {selectedUserEmail}
        />
      ) : (
        <SellerItemForm 
          selectedUserEmail = {selectedUserEmail}
          onToggleView = {onToggleView}
          selectedUserData = {selectedUserData}
          onClickMessage = {onClickMessage}
          cookies = {cookies}
          statusMap = {statusMap}
        />
      )
    }
    </>
  )
}

export default SellerContainer;