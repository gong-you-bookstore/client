import { useState } from "react";
import { useCookies } from "react-cookie"
import { useLocation } from "react-router-dom";
import MessageLogContainer from "../containers/message/MessageLogContainer";
import MessageToolContainer from "../containers/message/MessageToolContainer";

import { getMessages } from "../lib/api/message";

const MessagePage = () => {
  const {state} = useLocation();
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);
  const [messagesLog, setMessagesLog] = useState([])

  const loadMessagelog = () => {
    getMessages(
      cookies.userData.accessToken, {
        shelfId: state.shelfId,
        email1: state.userEmail,
        email2: state.myEmail
      }
    ).then(response => {
      setMessagesLog(response.data.data)
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <div className="bg-dark-full-px">
      <div className="gallery-area">
      <div className="container desktop-box">
          <div className="maessage-area">
            <MessageToolContainer 
              state = {state}
              loadMessagelog = {loadMessagelog}
            />
            <MessageLogContainer 
              messagesLog = {messagesLog}
              loadMessagelog = {loadMessagelog}
              state = {state}
            />
          </div>
      </div>
      </div>
    </div>
  )
}

export default MessagePage;