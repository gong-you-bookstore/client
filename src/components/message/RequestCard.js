import Message from "./Message";
const RequestCard = ({
  state,
  message,
  onClickRespondTrade
}) => {
  return (
    <>
    <div className="message-system-card">
      <div>
      <Message
        state = {state}
        message = {message}
      />
      </div>
      <div>
        수락하시겠습니까?
      </div>
      <button
        type="button"
        className="btn-sm blue-btn fw-bold"
        onClick={() => {
          onClickRespondTrade(state.myEmail, message.email);
        }}
      >
        수락합니다.
      </button>
  </div>
    </>
  )
}

export default RequestCard;