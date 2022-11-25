import { useEffect, useState } from "react";
import { getMyMessage } from "../../lib/api/message";
import profile from "../../assets/images/profile.png"

const MessageBoxContainer = ({
  accessToken
}) => {
  const [myMessages, setMyMessages] = useState([]);

  useEffect(() => {
    getMyMessage(accessToken).then(response => {
      console.log(response);
      setMyMessages(response.data.data);
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
      <div className=" my-message-box">
      {
        myMessages.map((myMessage, index) => (
          <>
          <div 
            key={index}
            className="my-message-wrapper container desktop-box"
          >
            <img src={profile} width="40px" className="profile" alt="img"/>
            
            <div className="">
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

export default MessageBoxContainer;