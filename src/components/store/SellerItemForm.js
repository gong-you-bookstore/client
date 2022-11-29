import KakaoMap from "../register/KakaoMap";
const SellerItemForm = ({
  selectedUserEmail,
  onToggleView,
  selectedUserData,
  onClickMessage,
  cookies
}) => {
  return (
    <>
    <div className="register-users-area">
    <h1 className="">
      {selectedUserEmail.split('@')[0]}님이 등록하신 책입니다
    </h1>
    {/* <div className="flex-sp-box">
      <div className="fw-bold">
        게시글 번호
      </div>
      <div>
        {selectedUserData.shelfId}
      </div>
    </div> */}
    <div className="flex-sp-box">
      <div className="fw-bold">
        상태
      </div>
      <div>
        {selectedUserData.status}
      </div>
    </div>
    <div className="flex-sp-box">
      <div className="fw-bold">
        토큰개수
      </div>
      <div>
        {selectedUserData.token}
      </div>
    </div>

    {
      selectedUserData.latitude || selectedUserData.longitude ? (
        <KakaoMap 
          latitude  = {selectedUserData.latitude}
          longitude = {selectedUserData.longitude}
        />
      ) : (<></>)
    }
    <div className="btn-group">
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
        onClickMessage(
          selectedUserData.shelfId,
          selectedUserEmail,
          cookies.userData.email
        );
      }}
    >
      메시지
    </button>
    </div>
    </div>
    </>
  )
}

export default SellerItemForm;