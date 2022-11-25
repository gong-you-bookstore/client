import { useEffect, useState } from "react";
import { useCookies } from "react-cookie"
import UserListForm from "../../components/store/UserListForm";
import UserItemForm from "../../components/store/UserItemForm";
import { toastMaker } from "../../lib/utils";
import { getUserBook } from "../../lib/api/book";
import { useNavigate } from "react-router-dom";
const UserContainer = ({
  users,
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

  const onClickMessage = (userData, userEmail, myEmail) => {
    if (selectedUserEmail === cookies.userData.email) {
      toastMaker.error("자신한테 메시지를 보낼 수 없습니다.")
      return;
    }
    navigate(
      '/message',
      {state: {
        userData,
        userEmail,
        myEmail
      }}
    )
  }

  useEffect(() => {
    if (selectedUserEmail) {
      getUserBook(isbn, selectedUserEmail, cookies.userData.accessToken).then(response => {
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
        <UserListForm
          users = {users}
          onClickUser = {onClickUser}
        />
      ) : (
        <UserItemForm 
          selectedUserEmail = {selectedUserEmail}
          onToggleView = {onToggleView}
          selectedUserData = {selectedUserData}
          onClickMessage = {onClickMessage}
          cookies = {cookies}
        />
      )
    }
    </>
  )
}

export default UserContainer;