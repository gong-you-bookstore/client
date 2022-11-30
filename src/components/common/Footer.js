import faviconImg from './../../assets/images/favicon.png'

const Footer = () => {
  return (
    <footer className="footer-bg-dark">
        <div className='footer-inner container'>
          <div>
            <img src={faviconImg} width="40px" alt="img" />

            <div className='fw-bold fs-18'>공유책방</div><br/>
            경기도 수원시 영통구 월드컵로 206 KR
          </div>
          <div className='t-r'>
            <span className='fw-bold fs-18'>CONTACT US</span><br/>
            jiheon788@ajou.ac.kr<br/>
            yoonaa@ajou.ac.kr<br/>
            huhwook111@ajou.ac.kr<br/>
            ywchung@ajou.ac.kr<br/>
          </div>
        </div>
        <div className='footer-line'></div>
        <p className='container t-c'>
          Copyright © Team '공유책방', Ajou Univ. All Rights Reserved.
        </p>
    </footer>
  )
}

export default Footer;