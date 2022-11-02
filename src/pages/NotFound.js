import logoColorImg from './../assets/images/logo-color.png'


const NotFound = () => {
  return (
    <>
    <div className="bg-dark-full-vh flex-col-box-center ">
      <img src={logoColorImg} className="w-150" alt="img" />
      <div className="fc-white fs-32" title="404">
        Page Not Found.
      </div>
    </div>
    </>
    
  )
}

export default NotFound;