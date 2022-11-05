import faviconImg from './../../assets/images/favicon.png'
import logoImg from './../../assets/images/logo_row_white.png'


const Footer = () => {
  return (
    <>
      <footer className="footer-bg-dark">
        <div className="flex-col-box-center fc-muted fs-12 container">
        <img src={faviconImg} className="w-50" alt="img" />
            <p>Test Version.</p>

            <div className=' border-top-line'>
            <p>Copyright © Team V2S, Ajou Univ. All Rights Reserved.</p>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;