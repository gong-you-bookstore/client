import Message from "./Message";

const RequestCard = ({
  me,
  message,
  onClickRespondTrade
}) => {
  return (
    <>
    <div className="message-system-card">
      <div>
      <Message 
        me = {me}
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
          onClickRespondTrade();
        }}
      >
        수락합니다.
      </button>
  </div>
    </>
  )
}

export default RequestCard;