const PictureForm = ({
  step4Ref,
  image,
  fileInput,
  onChangeImage,
  onClickConfirmBtn
}) => {
  return (
    <>
    <div 
      className="bg-white-full-vh flex-col-box-center lh-2" 
      ref={step4Ref}
    >
      <div className="container w-100p">
      <div className=" desktop-box">
          <h1 className="fc-main fs-32">
            Step 4
          </h1>
          <p className="fc-dark fs-28 fw-300" >
            책 사진을 등록해주세요
          </p>
          <div className='flex-col-box-center mt-10'>
            <div 
              className="register-img"
              onClick={() => {
                fileInput.current.click();
              }}
            >
            {
              image ? (
                <img
                alt="UserPicture"
                src={image}
                id="image"
                height="100"
              />
              ) : (
                <p
                >Drag and Drop a File <br/>or<br/> Select Add Image</p>
              )
            }
              <input
                type="file"
                style={{ display: "none" }}
                accept="image/jpg, image/png, image/jpeg"
                name="fileUpload"
                id="fileUpload"
                onChange={onChangeImage}
                ref={fileInput}
              />
              </div>
            <button
              type="button"
              className="mtb-10 primary-btn btn-big w-100p"
              onClick={() => {
                onClickConfirmBtn();
              }}
            >
              다음
            </button>
            </div>
      </div>

      </div>
    </div>
    </>
  )
}

export default PictureForm;