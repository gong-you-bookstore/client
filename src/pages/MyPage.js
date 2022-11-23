import profile from "../assets/images/profile.png"

const MyPage = () => {
  return (
    <>
    <div className="bg-white-full-px">
      <div className="content-section">
        <div className="container desktop-box">
        <div className="my-info">
          <img src={profile} width="100px" className="profile"/>
          jiheon788@ajou.ac.kr

          <div className="info-box">
            <div className="info-item">토큰</div>
            <div className="info-item">safd</div>
            <div className="info-item">saf</div>
          </div>
        </div>
        </div>
      </div>

      <ul className="container message-box desktop-box">
        <li className="message-wrapper ">
          <img src={profile} width="40px" className="profile"/>
          jiheon788@ajou.ac.kr

        </li>
        <li className="message-wrapper">
          <img src={profile} width="40px" className="profile"/>
          jiheon788@ajou.ac.kr
        </li>
        <li className="message-wrapper">
          <img src={profile} width="40px" className="profile"/>
          jiheon788@ajou.ac.kr
        </li>
        <li className="message-wrapper">
          <img src={profile} width="40px" className="profile"/>
          jiheon788@ajou.ac.kr
        </li>
        <li className="message-wrapper">
          <img src={profile} width="40px" className="profile"/>
          jiheon788@ajou.ac.kr
        </li>
        <li className="message-wrapper">
          <img src={profile} width="40px" className="profile"/>
          jiheon788@ajou.ac.kr
        </li>
      </ul>
    </div>
    </>
  )
}

export default MyPage;