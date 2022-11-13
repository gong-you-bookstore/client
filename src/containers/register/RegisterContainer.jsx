import { useEffect, useState } from "react";

import { getBookByNLK } from "../../lib/services";
import RegisterForm from "../../components/register/RegisterForm";

const RegisterContainer = ({
  result,
  setResult,
  step3Ref,
  setIsScrollToStep4
}) => {
  const [KDC, setKDC] = useState(0);

  useEffect(()=>{
    console.log("11");
    getBookByNLK(result.isbn)
      .then((res) => {
        if(res.data.total === 1){
          setKDC(res.data.result[0].classNo.substr(0, 3))
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [result])

  return (
      <RegisterForm
        step3Ref = {step3Ref}
        result = {result}
        setResult = {setResult}
        KDC = {KDC}
        setIsScrollToStep4= {setIsScrollToStep4}
      />
  )
}

export default RegisterContainer;