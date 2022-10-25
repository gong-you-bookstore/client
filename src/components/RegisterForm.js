import { useEffect, useState } from "react";

import Kakaomap from "./Kakaomap";
import { getBookByNLK } from "../lib/services";

const RegisterForm = ({result, step3Ref}) => {
  const [KDC, setKDC] = useState("")

  useEffect(()=>{
    getBookByNLK(result.isbn.slice(-13))
      .then((res) => {
        // console.log("KDC", res.data.result[0].classNo)
        if(res.data.total === 1){
          setKDC(res.data.result[0].classNo.substr(0, 3))
        }
      })
      .catch((error) => {
        console.log("작성실패", error);
      });
  }, [result])
  
  
  
  return (
    <>
    <div className="bg-full-p flex-col-box lh-2" ref={step3Ref}>
    <div className="container w-100p">
    <div className="white-box" >
    <span className="fc-main fs-32 fw-bold">Step 3</span>
    <p className="fc-dark fs-28" >
        내용을 작성해주세요
      </p>
    <div className="flex-col-box mtb-50">
        <img src={result.thumbnail} />

        <label htmlFor="email" className="form-label" >Title</label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="title"
          value={result.title}
          // onChange={onChangeSignInData}
          disabled
          className="input-styled w-100p"
        />

        <label htmlFor="email" className="form-label">ISBN13</label>
        <input
          id="ISBN13"
          name="ISBN13"
          type="text"
          placeholder="ISBN13"
          value={result.isbn.slice(-13)}
          // onChange={onChangeSignInData}
          disabled
          className="input-styled w-100p"

        />

        <label htmlFor="email" className="form-label">KDC</label>
        <input
          id="KDC"
          name="KDC"
          type="text"
          placeholder="KDC"
          value={KDC}
          // onChange={onChangeSignInData}
          disabled
          className="input-styled w-100p"

        />

        <label htmlFor="content" className="form-label">Content</label>
        <textarea
          className="input-styled w-100p"
          value={result.contents}
          // onChange={onChangeUpdateData}
          name="content"
          id="content"
          rows="5"
          disabled
        ></textarea>

        <Kakaomap />
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default RegisterForm;