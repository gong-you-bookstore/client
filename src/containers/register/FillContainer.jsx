import { useEffect } from "react";

import { getBookByNLK } from "../../lib/services";
import FillForm from "../../components/register/FillForm";

const FillContainer = ({
  result,
  setResult,
  step3Ref,
  setIsScrollToStep4,
  isView,
  setIsView
}) => {

  const onChangeResult = (event) => {
    setResult({
      ...result,
      [event.target.name]: event.target.value
    })
  }

  const onClickConfirmBtn = () => {
    setIsView({...isView, step4: true})
    setIsScrollToStep4(true);
  }

  useEffect(() => {
    getBookByNLK(result.isbn)
      .then((response) => {
        if(response.data.total){
          setResult({
            ...result,
            kdc:response.data.result[0].classNo.substr(0, 3)
          })
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  return (
      <FillForm
        step3Ref = {step3Ref}
        result = {result}
        onClickConfirmBtn= {onClickConfirmBtn}
        onChangeResult = {onChangeResult}
      />
  )
}

export default FillContainer;