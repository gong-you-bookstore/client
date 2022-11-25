import { useEffect, useState } from "react";
import { useCookies } from "react-cookie"
import { getMessages } from "../../lib/api/message";

const MessageLogContainer = ({
  messagesLog,
  loadMessagelog,
  me,
  you  
}) => {
  useEffect(() => {
    loadMessagelog();
  }, [])

  return (
    <>
    <div className="fc-muted mb-10">
      {you}님과의대화방입니다.
    </div>
    <ul className="message-log">
    {
      messagesLog.map((message, index) => (
        <li key={index} className="message" >
          <span className="ww">
            {me === message.email ? "나" : "상대방"}: {message.content}
          </span>
          <span className="fc-muted date">
            {message.createdAt}
          </span>
        </li>
      ))
    }
    </ul>
    </>  
  )
}

export default MessageLogContainer;