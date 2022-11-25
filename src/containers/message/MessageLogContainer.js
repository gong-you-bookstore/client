import { useEffect, useState } from "react";
import { useCookies } from "react-cookie"
import { getMessages } from "../../lib/api/message";

const MessageLogContainer = ({
  messagesLog,
  loadMessagelog
}) => {
  useEffect(() => {
    loadMessagelog();
  }, [])

  return (
    <ul className="message-log">
    {
      messagesLog.map((message, index) => (
        <li key={index} className="message" >
          <div>
            {message.content}
          </div>
        </li>
      ))
    }
    </ul>
  )
}

export default MessageLogContainer;