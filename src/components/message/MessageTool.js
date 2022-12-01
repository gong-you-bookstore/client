const MessageTool = ({
  sendMessage,
  onChangeMyMessage,
  onClickRequestTrade,
  onClickSendMessage
}) => {
  return (
    <>
    <div className="content-section">
      <div className="chat-tools">
        <textarea
          name="content"
          id="content"
          rows="3"
          placeholder="Content Here"
          value={sendMessage.content}
          onChange={onChangeMyMessage}
          className="input-styled w-100p"
        ></textarea>
        <div className="btn-group-col">
          <button
            type="button"
            className="btn-big primary-btn fw-bold w-100p"
            onClick={onClickSendMessage}
          >
            메시지 전송
          </button>
          <button
            type="button"
            className="btn-sm grey-btn fw-bold w-100p"
            onClick={onClickRequestTrade}
          >
            거래를 요청합니다.
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default MessageTool;