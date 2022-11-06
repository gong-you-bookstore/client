import { useEffect, useState } from "react";

import { getBookByNLK } from "../../lib/services";
import RegisterForm from "../../components/register/RegisterForm";

const RegisterContainer = ({
  result,
  step3Ref,
}) => {
  const [kdc, setKdc] = useState(0);

  useEffect(()=>{
    getBookByNLK(result.isbn.substr(-13))
      .then((res) => {
        if(res.data.total === 1){
          setKdc(res.data.result[0].classNo.substr(0, 3))
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
        kdc = {kdc}
      />
  )
}

export default RegisterContainer;