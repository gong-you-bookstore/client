const UserItemForm = ({
  selectedUserEmail,
  onToggleView,
  selectedUserData,
  onClickMessage,
  cookies
}) => {
  return (
    <>
    <h1 className="">
      {selectedUserEmail}님이 올릭 책입니다
    </h1>
    <p>{selectedUserData.shelfId}</p>
    <p>{selectedUserData.status}</p>
    <p>{selectedUserData.token}</p>
    <div>
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
    </>
  )
}

export default UserItemForm