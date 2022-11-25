import { useCookies } from "react-cookie"
import MyInfoContainer from "../containers/user/MyInfoContainer";
import MyMessageBoxContainer from "../containers/user/MyMessageBoxContainer";

const MyPage = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);

  return (
    <>
    <div className="bg-white-full-px">
      <MyInfoContainer 
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