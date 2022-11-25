import profile from "../../assets/images/profile.png"

const MyMessageBox = ({
  myMessages,
  onClickMessage
}) => {
  return (
    <div className=" my-message-box">
      {
        myMessages.map((myMessage, index) => (
          <>
          <div 
            key={index}
            className="my-message-wrapper container desktop-box"
            onClick={() => {
              onClickMessage(
                myMessage.shelfId,
                myMessage.counterpartEmail,
                myMessage.myEmail,
              )
            }}
          >
            <img src={profile} width="40px" className="profile" alt="img"/>
            <div>
              <span className="fc-main fw-bold">
                {myMessage.counterpartEmail}
              </span>
              님이랑 주고 받은 메시지가 있습니다.
            </div>
          </div>
          <div className="my-message-line"></div>
          </>
        ))
      }
      </div>
  )
}

export default MyMessageBox;