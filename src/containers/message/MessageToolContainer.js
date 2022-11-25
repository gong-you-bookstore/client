import { useEffect, useState } from "react";
import { useCookies } from "react-cookie"
import { postMessage } from "../../lib/api/message";
import { requestTrade } from "../../lib/api/book";


import {toastMaker} from "../../lib/utils"
const MessageToolContainer = ({
  state,
  loadMessagelog,
}) => {
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);
  const [sendMessage, setSendMessage] = useState({
    shelfId: state.shelfId,
    receiverEmail: state.userEmail,
    content: ""
  })
  const onChangeMyMessage = (event) => {
    setSendMessage({
      ...sendMessage,
      [event.target.name]: event.target.value
    })
  }

  const onClickSendMessage = () => {
    postMessage(
      cookies.userData.accessToken,
      sendMessage
    ).then(response => {
      toastMaker.success(response.data.msg);
      setSendMessage({
        ...sendMessage,
        content: ""
      })
      loadMessagelog();
    }).catch(error => {
      console.log(error)
    })
  }

  const onClickRequestTrade = () => {
    requestTrade(
      cookies.userData.accessToken, {
        shelfId: state.shelfId,
        receiverEmail: state.userEmail,
      }
    ).then(response => {
      toastMaker.success(response.data.msg);
      loadMessagelog();
    }).catch(error => {
      console.log(error);
    })
  }
  return (
    <>
    <div className="content-section">
    <div className="chat-tools">
      <textarea
        name="content"
        id="content"
        rows="4"
        placeholder="Content Here"
        value={sendMessage.content}
        onChange={onChangeMyMessage}
        className="input-styled w-100p"
      ></textarea>
      <div className="btn-group">
        <button
          type="button"
          className="btn-big blue-btn fw-bold"
          onClick={onClickRequestTrade}
        >
          도서 거래를 요청합니다.
        </button>
        <button
          type="button"
          className="btn-big primary-btn fw-bold"
          onClick={onClickSendMessage}
        >
          전송
        </button>
      </div>
    </div>
    </div>
    </>
  )
}

export default MessageToolContainer