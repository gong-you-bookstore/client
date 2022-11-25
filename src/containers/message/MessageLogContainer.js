import { useEffect } from "react";
import { useCookies } from "react-cookie"
import { respondTrade } from "../../lib/api/book";
import {toastMaker} from "../../lib/utils"
import { useNavigate } from "react-router-dom";
import MessageLog from "../../components/message/MessageLog";

const MessageLogContainer = ({
  messagesLog,
  loadMessagelog,
  me,
  you,
  state
}) => {
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);
  const navigate = useNavigate();
  useEffect(() => {
    loadMessagelog();
  }, [])

  const onClickRespondTrade = () => {
    respondTrade(
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

  const onClickGoToHome = () => {
    navigate('/')
  }

  return (
    <MessageLog
      messagesLog = {messagesLog}
      you = {you}
      me = {me}
      onClickRespondTrade = {onClickRespondTrade}
      onClickGoToHome = {onClickGoToHome}
    />
  )
}

export default MessageLogContainer;