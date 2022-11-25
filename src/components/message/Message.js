const Message = ({
  me,
  message
}) => {
  return (
    <div>
      {me === message.email ? "나" : "상대방"}: {message.content}
    </div>
  )
}

export default Message;