import RequestCard from './RequestCard';
import RespondCard from './RespondCard';
import Message from './Message';

const MessageLog = ({ state, messagesLog, onClickRespondTrade, onClickGoToHome }) => {
  return (
    <>
      <div className="fc-muted mb-30 fs-14 t-c lh-2">
        <span className="fw-bold fc-white">{state.userEmail}</span>님과의대화방입니다.
        <br />
        책의 상태를 잘 확인하시고 거래하시기 바랍니다.
        <br />
      </div>
      <ul className="message-log">
        {messagesLog.map((message, index) => (
          <li key={index} className="message">
            <span>
              {message.content === '도서 거래를 요청합니다.' ? (
                <RequestCard state={state} message={message} onClickRespondTrade={onClickRespondTrade} />
              ) : (
                <>
                  {message.content === '도서 거래를 수락합니다.' ? (
                    <RespondCard state={state} message={message} onClickGoToHome={onClickGoToHome} />
                  ) : (
                    <Message state={state} message={message} />
                  )}
                </>
              )}
            </span>
            <div className="fc-muted date">{message.createdAt}</div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MessageLog;
