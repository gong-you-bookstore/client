import faviconImg from './../../assets/images/favicon.png';

const Footer = () => {
  return (
    <footer className="footer-bg-dark">
      <div className="footer-inner w-100p container desktop-box">
        <img src={faviconImg} width="40px" alt="img" />

        <div className="fw-bold fs-18">공유책방</div>
        <p className="t-c">경기도 수원시 영통구 월드컵로 206 KR</p>
        <div className="flex-box w-100p t-c mt-10 lh-2">
          <p>jiheon788@ajou.ac.kr</p>
          <p>yoonaa@ajou.ac.kr</p>
          <p>huhwook111@ajou.ac.kr</p>
          <p>ywchung@ajou.ac.kr</p>
        </div>
      </div>
      <div className="footer-line"></div>
      <p className="container t-c">Copyright © Team '공유책방', Ajou Univ. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
