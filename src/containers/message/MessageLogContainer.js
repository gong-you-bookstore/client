import { useEffect, useState } from "react";
import { useCookies } from "react-cookie"
import { getMessages } from "../../lib/api/message";
import { respondTrade } from "../../lib/api/book";
import {toastMaker} from "../../lib/utils"
import { useNavigate } from "react-router-dom";

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
    <>
    <div className="fc-muted mb-30 fs-14 t-c lh-2">
      <span className="fw-bold fc-white">{you}</span>님과의대화방입니다.<br/>
      책의 상태를 잘 확인하시고 거래하시기 바랍니다.<br/>
    </div>
    <ul className="message-log">
    {
      messagesLog.map((message, index) => (
        <li key={index} className="message" >
          <span className="ww">
            {
              message.content === "도서 거래를 요청합니다." ? (
                <div className="message-system-card">
                    <div>
                      {me === message.email ? "나" : "상대방"}: {message.content}
                    </div>
                    <div>
                      수락하시겠습니까?
                    </div>
                    <button
                      type="button"
                      className="btn-sm blue-btn fw-bold"
                      onClick={() => {
                        onClickRespondTrade();
                      }}
                    >
                      수락합니다.
                    </button>
                </div>
              ) : (
                <>
                {
                  message.content === "도서 거래를 수락합니다." ? (
                    <div className="message-system-card">
                      {me === message.email ? "나" : "상대방"}: {message.content}
                      <div>
                      거래가 완료되었습니다.
                      </div>
                      <button
                      type="button"
                      className="btn-sm red-btn fw-bold"
                      onClick={() => {
                        onClickGoToHome();
                      }}
                    >
                      홈으로
                    </button>
                    </div>
                  ) : (
                    <div>
                      {me === message.email ? "나" : "상대방"}: {message.content}
                    </div>
                  )
                }
                </>
              )
            }
          </span>
          <div className="fc-muted date">
            {message.createdAt}
          </div>
        </li>
      ))
    }
    </ul>
    </>  
  )
}

export default MessageLogContainer;