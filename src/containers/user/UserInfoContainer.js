import { useEffect, useState } from "react";
import { getUserInfo } from "../../lib/api/user";
import profile from "../../assets/images/profile.png"
import { useNavigate } from "react-router-dom";

const UserInfoContainer = ({
  accessToken,
  onToggleMessageBox
}) => {
  const [userInfo, setUserInfo] = useState({});
  const navigation = useNavigate();
  useEffect(() => {
    getUserInfo(accessToken).then(response => {
      console.log(response);
      setUserInfo(response.data.data);
    }).catch(error => {
      console.log(error)
    })
  })

  return (
    <>
    <div className="content-section">
        <div className="container desktop-box">
        <div className="my-info">
          <img src={profile} width="100px" className="profile"/>
          {userInfo.email}
          {userInfo.name}


          <div className="info-box">
            <div className="info-item">
              토큰
            </div>
            <div 
              onClick={() => {
                navigation('/gallery');
              }}
              className="info-item"
            >
              내 책방 바로가기
            </div>
            <div 
              onClick={() => {
                onToggleMessageBox();
              }}
              className="info-item"
            >
              메일함
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default UserInfoContainer;