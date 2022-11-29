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
        <div className="btn-group">
          <button
            type="button"
            className="btn-sm blue-btn fw-bold"
            onClick={onClickRequestTrade}
          >
            거래를 요청합니다.
          </button>
          <button
            type="button"
            className="btn-sm primary-btn fw-bold"
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

export default MessageTool;