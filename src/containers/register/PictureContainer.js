import $ from 'jquery'
import { useState,useRef } from 'react';
import addImg from "../../assets/images/add-image.png"
const PictureContainer = ({
  step4Ref,
  setIsScrollToStep5,
  isView,
  setIsView,
  setBookImage,
}) => {

  const onClickConfirmBtn = () => {
    if ($("#fileUpload")[0].files[0]) {
      setBookImage($("#fileUpload")[0].files[0]);
    }
    setIsView({...isView, step5: true})
    setIsScrollToStep5(true)
  }

  const [image, setImage] = useState(addImg);
  const fileInput = useRef(null);

  const onChangeImage = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  return (
    <div 
      className="bg-white-full-vh flex-col-box-center lh-2" 
      ref={step4Ref}
    >
      <div className="container w-100p">
    <div className=" desktop-box">

          <span className="fc-main fs-32 fw-bold">
            Step 4
          </span>
          <p className="fc-dark fs-28" >
            책을 사진을 등록해주세요
          </p>

          <div className='flex-col-box-center mt-10'>
              <img
                className='register-img'
                alt="UserPicture"
                src={image}
                id="image"
                onClick={() => {
                  fileInput.current.click();
                }}
                height="150"
              />
              <input
                type="file"
                style={{ display: "none" }}
                accept="image/jpg, image/png, image/jpeg"
                name="fileUpload"
                id="fileUpload"
                onChange={onChangeImage}
                ref={fileInput}
              />
              
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

  )
}

export default PictureContainer;