import { useEffect, useState } from "react";
import { getUserInfo } from "../../lib/api/user";
import { useNavigate } from "react-router-dom";
import MyInfo from "../../components/user/MyInfo";
const MyInfoContainer = ({
  accessToken,
}) => {
  const [userInfo, setUserInfo] = useState({});
  const navigation = useNavigate();

  const goToGallery = () => {
    navigation('/gallery');
  }
  
  useEffect(() => {
    getUserInfo(accessToken).then(response => {
      setUserInfo(response.data.data);
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <MyInfo
      userInfo = {userInfo}
      goToGallery = {goToGallery}
    />
  )
}

export default MyInfoContainer;