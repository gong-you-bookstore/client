import faviconImg from './../../assets/images/favicon.png'

const Footer = () => {
  return (
    <footer className="footer-bg-dark">
        <div className='footer-inner container'>
        <img src={faviconImg} width="45px" alt="img" />
          <p>
            <span className='fw-bold fs-20'>CONTACT US</span><br/>
            jiheon788@ajou.ac.kr<br/>
            yoonaa@ajou.ac.kr<br/>
            huhwook111@ajou.ac.kr<br/>
            ywchung@ajou.ac.kr<br/>
          </p>
        </div>
        <div className='footer-line'></div>
        <p className='container t-c'>
          Copyright © Team '공유책방', Ajou Univ. All Rights Reserved.
        </p>
    </footer>
  )
}

export default Footer;