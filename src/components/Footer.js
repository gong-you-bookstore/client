import logoColorImg from './../assets/images/logo-color.png'

const Footer = () => {
  return (
    <>
      <div className="bg-dark">
        <div className="flex-col-box fc-muted fs-12">
            <img src={logoColorImg} className="w-50" alt="img" />
            <p className=' border-top-line'>
            Created by Team V2S, Ajou Univ. All rights reserved .
            </p>
            <p><span >GET IN TOUCH </span>jiheon788@ajou.ac.kr</p>
        </div>
      </div>
    </>
  )
}

export default Footer;