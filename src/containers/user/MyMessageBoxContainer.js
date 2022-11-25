import { useEffect, useState } from "react";
import { getMyMessage } from "../../lib/api/message";
import profile from "../../assets/images/profile.png"
import { useNavigate } from "react-router-dom";
import { toastMaker } from "../../lib/utils";
const MyMessageBoxContainer = ({
  accessToken
}) => {
  const [myMessages, setMyMessages] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getMyMessage(accessToken).then(response => {
      console.log(response);
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
      <div className=" my-message-box">
      {
        myMessages.map((myMessage, index) => (
          <>
          <div 
            key={index}
            className="my-message-wrapper container desktop-box"
            onClick={() => {
              onClickMessage(
                myMessage.shelfId,
                myMessage.counterpartEmail,
                myMessage.myEmail,
              )
            }}
          >
            <img src={profile} width="40px" className="profile" alt="img"/>
            <div>
              <span className="fc-main fw-bold">
                {myMessage.counterpartEmail}
              </span>
              님이랑 주고 받은 메시지가 있습니다.
            </div>
          </div>
          <div className="my-message-line"></div>
          </>
        ))
      }
      </div>
  )
}

export default MyMessageBoxContainer;