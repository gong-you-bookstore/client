import { useEffect, useState } from "react";
import { getMyMessage } from "../../lib/api/message";
import { useNavigate } from "react-router-dom";
import { toastMaker } from "../../lib/utils";
import MyMessageBox from "../../components/user/MyMessageBox";
import Empty from "../../components/common/Empty";
const MyMessageBoxContainer = ({
  accessToken
}) => {
  const [myMessages, setMyMessages] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getMyMessage(accessToken).then(response => {
      setMyMessages(response.data.data);
    }).catch(error => {
      console.log(error)
    })
  }, [])

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

  return (
    <>
    <div className="gallery-area">
      <div className="container">
        <div className="my-message-box">
          {
            myMessages.length !== 0 ? (
              <MyMessageBox
                myMessages = {myMessages}
                onClickMessage = {onClickMessage}
              />
            ) : (
              <Empty />
            )
          }
        </div>
      </div>
    </div>
    </>
    
  )
}

export default MyMessageBoxContainer;