const Message = ({ state, message }) => {
  return (
    <div>
      {state.myEmail === message.email ? '나' : '상대방'}: {message.content}
    </div>
  );
};

export default Message;
