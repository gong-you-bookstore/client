import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { respondTrade } from '../../lib/api/book';
import { toastMaker } from '../../lib/utils';
import { useNavigate } from 'react-router-dom';
import MessageLog from '../../components/message/MessageLog';

const MessageLogContainer = ({ messagesLog, loadMessagelog, me, you, state }) => {
  const [cookies] = useCookies(['userData']);
  const navigate = useNavigate();
  useEffect(() => {
    loadMessagelog();
  }, []);

  const onClickRespondTrade = (viewer, origin) => {
    if (viewer === origin) {
      toastMaker.info('상대방이 고민중입니다..!');
      return;
    }
    respondTrade(cookies.userData.accessToken, {
      shelfId: state.shelfId,
      receiverEmail: state.userEmail,
    }).then((response) => {
      toastMaker.info('거래가 완료 되었습니다..!');
      loadMessagelog();
    });
  };

  const onClickGoToHome = () => {
    navigate('/');
  };

  return (
    <MessageLog
      state={state}
      messagesLog={messagesLog}
      you={you}
      me={me}
      onClickRespondTrade={onClickRespondTrade}
      onClickGoToHome={onClickGoToHome}
    />
  );
};

export default MessageLogContainer;
