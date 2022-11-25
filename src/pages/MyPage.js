import { useCookies } from "react-cookie"
import profile from "../assets/images/profile.png"
import UserInfoContainer from "../containers/user/UserInfoContainer";
import MyMessageBoxContainer from "../containers/user/MyMessageBoxContainer";
import { useState } from "react";

const MyPage = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);

  return (
    <>
    <div className="bg-white-full-px">
      <UserInfoContainer 
        accessToken = {cookies.userData.accessToken}
      />
      <MyMessageBoxContainer 
        accessToken = {cookies.userData.accessToken}
      />
    </div>
    </>
  )
}

export default MyPage;