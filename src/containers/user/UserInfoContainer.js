import { useEffect, useState } from "react";
import { getUserInfo } from "../../lib/api/user";
import profile from "../../assets/images/profile.png"
import { useNavigate } from "react-router-dom";

const UserInfoContainer = ({
  accessToken,
}) => {
  const [userInfo, setUserInfo] = useState({});
  const navigation = useNavigate();
  useEffect(() => {
    getUserInfo(accessToken).then(response => {
      setUserInfo(response.data.data);
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <>
      <div className="mypage-banner">
        <div className="container desktop-box">
        <div className="my-info">
          <img src={profile} width="100px" className="profile" alt="img"/>
          <h1 className="fc-white fs-28">{userInfo.name}님의 페이지</h1>
          <p>{userInfo.email}</p>
          <div className="info-box">
            <div className="info-item">
              <p>
                토큰
              </p>
              <p className="fc-main fs-28">
                {userInfo.token}
              </p>
            </div>
            <div 
              onClick={() => {
                navigation('/gallery');
              }}
              className="info-item"
            >
              <p>
              내 책방
              </p>
              <p className="">
              바로가기
              </p>
            </div>
          </div>
        </div>
        </div>
        </div>
    </>
  )
}

export default UserInfoContainer;