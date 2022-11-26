import Message from "./Message";
const RespondCard = ({
  state,
  message,
  onClickGoToHome
}) => {
  return (
    <div className="message-system-card">
      <Message 
        state = {state}
        message = {message}
      />
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
  )
}

export default RespondCard;