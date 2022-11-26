import {useEffect} from "react";
import { useCookies } from "react-cookie"
import { postBookData } from "../../lib/api/book";
import { useNavigate } from "react-router-dom";
import { toastMaker } from "../../lib/utils";
import LocationForm from "../../components/register/LocationForm";
const Step5LocationContainer = ({
  result,
  setResult,
  step5Ref,
  bookImage
}) => {
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);
  const navigate = useNavigate();

  useEffect(()=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setResult({
          ...result,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      });
    }
  }, [])

  const onClickRegisterBtn = () => {
    let formData = new FormData();
    formData.append("imgs", bookImage);
    formData.append(
      "request", 
      new Blob(
        [JSON.stringify(result)], 
        {type: "application/json"}
      )
    );

    postBookData(formData, cookies.userData.accessToken)
      .then(response => {
        toastMaker.success(response.data.msg);
        navigate("/store");
      })
      .catch(error => {
        toastMaker.error(error.message);
      })
  }
  
  return (
    <LocationForm
      step5Ref = {step5Ref}
      result = {result}
      onClickRegisterBtn = {onClickRegisterBtn}
    />
  )
}

export default Step5LocationContainer;