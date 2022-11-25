import { useEffect, useState } from "react";
import { useCookies } from "react-cookie"
import { useLocation } from "react-router-dom";

import { getMessages, postMessage } from "../lib/api/message";

const MessagePage = () => {
  const {state} = useLocation();
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);
  const [messages, setMessages] = useState([])
  
  const requestMessage = () => {
    
  }
  useEffect(() => {
    console.log(state.userData.shelfId)
    getMessages(
      cookies.userData.accessToken, {
        shelfId: state.userData.shelfId,
        email1: state.userEmail,
        email2: state.myEmail
      }
    ).then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div className="bg-dark-full-px">
      <div className="gallery-area">
      <div className="container desktop-box">
        <div className="content-section">
          <div className="maessage-area">
            <ul className="message-log">
            {
              messages.map((message, index) => (
                <li key={index} className="message" >
                  <div>
                    {message.content}
                  </div>
                </li>
              ))
            }
            </ul>
            <div className="chat-tools">
              <textarea 
                className="input-styled w-100p"
              > 
              </textarea>
              <button>거래신청</button>
              <button>전송</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default MessagePage;