import $ from 'jquery'
import { useState,useRef } from 'react';
import PictureForm from '../../components/register/PictureForm';
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

  const [image, setImage] = useState("");
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
    <PictureForm
      step4Ref = {step4Ref}
      image = {image}
      fileInput = {fileInput}
      onChangeImage = {onChangeImage}
      onClickConfirmBtn = {onClickConfirmBtn}
    />
  )
}

export default PictureContainer;