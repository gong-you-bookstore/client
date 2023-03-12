import KakaoMap from '../register/KakaoMap';

const SellerItemForm = ({ selectedUserEmail, onToggleView, selectedUserData, onClickMessage, cookies, statusMap }) => {
  return (
    <>
      <div className="register-users-area">
        <h1 className="type-info">{selectedUserEmail.split('@')[0]}님이 등록한 책</h1>

        <div className="flex-end-box">
          {selectedUserData.images ? (
            <>
              {selectedUserData.images.map((image, index) => (
                <img src={image} className="user-img" key={index} alt="user" />
              ))}
            </>
          ) : (
            <></>
          )}
        </div>

        <div className="flex-end-box">
          <div className="status-card">{statusMap[`${selectedUserData.status}`]}</div>

          <div className="status-card">토큰: {selectedUserData.token}</div>

          <div className="status-card">{selectedUserData.shelfId}</div>
        </div>
        {selectedUserData.latitude || selectedUserData.longitude ? (
          <KakaoMap latitude={selectedUserData.latitude} longitude={selectedUserData.longitude} />
        ) : (
          <></>
        )}

        <div className="btn-group-row">
          <button
            className="btn-big transparent-btn"
            onClick={() => {
              onToggleView();
            }}
          >
            뒤로가기
          </button>
          <button
            className="btn-big primary-btn"
            onClick={() => {
              onClickMessage(selectedUserData.shelfId, selectedUserEmail, cookies.userData.email);
            }}
          >
            메시지
          </button>
        </div>
      </div>
    </>
  );
};

export default SellerItemForm;
