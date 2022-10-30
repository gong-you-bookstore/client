import faviconImg from './../assets/images/favicon.png'
import logoImg from './../assets/images/logo_row_white.png'


const Footer = () => {
  return (
    <>
      <div className="bg-dark">
        <div className="flex-col-box fc-muted fs-12 container">
        <img src={faviconImg} className="w-50" alt="img" />
          <div className='flex-sp-box w-100p
          '>
            {/* <p>Designed by jiheon788</p> */}

            </div>
            <div className=' border-top-line'>
            <p>Copyright © Team V2S, Ajou Univ. All Rights Reserved.</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer;