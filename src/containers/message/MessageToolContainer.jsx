import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { postMessage } from '../../lib/api/message';
import { requestTrade } from '../../lib/api/book';
import { toastMaker } from '../../lib/utils';
import MessageTool from '../../components/message/MessageTool';

const MessageToolContainer = ({ state, loadMessagelog }) => {
  const [cookies] = useCookies(['userData']);
  const [sendMessage, setSendMessage] = useState({
    shelfId: state.shelfId,
    receiverEmail: state.userEmail,
    content: '',
  });
  const onChangeMyMessage = (event) => {
    setSendMessage({
      ...sendMessage,
      [event.target.name]: event.target.value,
    });
  };

  const onClickSendMessage = () => {
    postMessage(cookies.userData.accessToken, sendMessage).then((response) => {
      setSendMessage({
        ...sendMessage,
        content: '',
      });
      loadMessagelog();
    });
  };

  const onClickRequestTrade = () => {
    requestTrade(cookies.userData.accessToken, {
      shelfId: state.shelfId,
      receiverEmail: state.userEmail,
    })
      .then((response) => {
        toastMaker.info('거래 요청을 보냈습니다. 상대방의 수락을 기다려 주세요..!');
        loadMessagelog();
      })
      .catch((error) => {
        if (error.response.data.msg) {
          toastMaker.error(error.response.data.msg);
        }
      });
  };
  return (
    <MessageTool
      sendMessage={sendMessage}
      onChangeMyMessage={onChangeMyMessage}
      onClickRequestTrade={onClickRequestTrade}
      onClickSendMessage={onClickSendMessage}
      loadMessagelog={loadMessagelog}
    />
  );
};

export default MessageToolContainer;
