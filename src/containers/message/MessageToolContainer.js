import { useState } from "react";
import { useCookies } from "react-cookie"
import { postMessage } from "../../lib/api/message";
import { requestTrade } from "../../lib/api/book";
import {toastMaker} from "../../lib/utils"
import MessageTool from "../../components/message/MessageTool";

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
    console.log(state)
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
    <MessageTool
      sendMessage = {sendMessage}
      onChangeMyMessage = {onChangeMyMessage}
      onClickRequestTrade = {onClickRequestTrade}
      onClickSendMessage = {onClickSendMessage}
    />
  )
}

export default MessageToolContainer