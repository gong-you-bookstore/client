import profile from '../../assets/images/profile.png';

const MyInfo = ({ userInfo, goToGallery }) => {
  return (
    <>
      <div className="mypage-banner">
        <div className="container desktop-box">
          <div className="my-info">
            <div className="info-box">
              <img src={profile} width="100px" className="profile" alt="img" />

              <div className="info-item">
                <p>토큰</p>
                <p className="fc-main fs-28">{userInfo.token}</p>
              </div>
              <div
                onClick={() => {
                  goToGallery();
                }}
                className="info-item"
              >
                <p className="fc-main">내 책방</p>
                <p>바로가기</p>
              </div>
            </div>

            <h1 className="fc-white fs-28">{userInfo.name}님의 페이지</h1>
            <p>{userInfo.email}</p>
          </div>
        </div>
      </div>
      <div className="radius-banner"></div>
    </>
  );
};

export default MyInfo;
