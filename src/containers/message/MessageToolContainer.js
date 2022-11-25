import { useEffect, useState } from "react";
import { useCookies } from "react-cookie"
import { postMessage } from "../../lib/api/message";


import {toastMaker} from "../../lib/utils"
const MessageToolContainer = ({
  state,
  loadMessagelog,
}) => {
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);
  const [myMessage, setMyMessage] = useState({
    shelfId: state.shelfId,
    receiverEmail: state.userEmail,
    content: ""
  })
  const onChangeMyMessage = (event) => {
    setMyMessage({
      ...myMessage,
      [event.target.name]: event.target.value
    })
  }

  const onClickSendMail = () => {
    postMessage(
      cookies.userData.accessToken,
      myMessage
    ).then(response => {
      toastMaker.success(response.data.msg);
      setMyMessage({
        ...myMessage,
        content: ""
      })
      loadMessagelog()
    }).catch(error => {
      console.log(error)
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
        value={myMessage.content}
        onChange={onChangeMyMessage}
        className="input-styled w-100p"
      ></textarea>
      <button>거래신청</button>
      <button
        type="button"
        onClick={onClickSendMail}
      >
        전송
      </button>
    </div>
    </div>
    </>
  )
}

export default MessageToolContainer