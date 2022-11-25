import { useCookies } from "react-cookie"
import profile from "../assets/images/profile.png"
import UserInfoContainer from "../containers/user/UserInfoContainer";
import MessageBoxContainer from "../containers/user/MessageBoxContainer";
import { useState } from "react";

const MyPage = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);

  return (
    <>
    <div className="bg-white-full-px">
      <UserInfoContainer 
        accessToken = {cookies.userData.accessToken}
      />
      <MessageBoxContainer 
        accessToken = {cookies.userData.accessToken}
      />
    </div>
    </>
  )
}

export default MyPage;