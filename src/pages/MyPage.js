import { useCookies } from "react-cookie"
import MyInfoContainer from "../containers/user/MyInfoContainer";
import MyMessageBoxContainer from "../containers/user/MyMessageBoxContainer";

const MyPage = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);

  return (
    <>
      <MyInfoContainer 
        accessToken = {cookies.userData.accessToken}
      />
      <MyMessageBoxContainer 
        accessToken = {cookies.userData.accessToken}
      />
    </>
  )
}

export default MyPage;