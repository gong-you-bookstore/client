import { useCookies } from "react-cookie"
import profile from "../assets/images/profile.png"
import UserInfoContainer from "../containers/user/UserInfoContainer";
import MessageBoxContainer from "../containers/user/MessageBoxContainer";
import { useState } from "react";

const MyPage = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);
  const [isView, setIsView] = useState(false);

  const onToggleMessageBox = () => {
    setIsView(!isView);
  }

  return (
    <>
    <div className="bg-white-full-px">
      

      <UserInfoContainer 
        accessToken = {cookies.userData.accessToken}
        onToggleMessageBox = {onToggleMessageBox}
      />
      {
        isView ? (
          <MessageBoxContainer 
            accessToken = {cookies.userData.accessToken}
          />
        ) : (<></>)
      }
      
      
    </div>
    </>
  )
}

export default MyPage;