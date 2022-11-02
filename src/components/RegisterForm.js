import { useEffect, useState } from "react";

import Kakaomap from "./Kakaomap";
import { getBookByNLK } from "../lib/services";

const RegisterForm = ({result, step3Ref, setBookData,bookData}) => {
  useEffect(()=>{
    getBookByNLK(bookData.isbn13)
      .then((res) => {
        if(res.data.total === 1){
          setBookData({
            ...bookData,
            kdc: res.data.result[0].classNo.substr(0, 3)
          })
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [result])
  
  
  
  return (
    <>
    <div className="bg-full-p flex-col-box-center lh-2" ref={step3Ref}>
    <div className="container w-100p">
    <div className="white-box" >
    <span className="fc-main fs-32 fw-bold">Step 3</span>
    <p className="fc-dark fs-28" >
        내용을 작성해주세요
      </p>
    <div className="flex-col-box-center mtb-50">
        <img src={bookData.thumbnail} alt="img" />

        <label htmlFor="email" className="form-label" >Title</label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="title"
          value={bookData.title}
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
          value={bookData.isbn13}
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
          value={bookData.kdc}
          // onChange={onChangeSignInData}
          disabled
          className="input-styled w-100p"

        />

        <label htmlFor="content" className="form-label">Content</label>
        <textarea
          className="input-styled w-100p"
          value={bookData.contents}
          // onChange={onChangeUpdateData}
          name="content"
          id="content"
          rows="5"
          disabled
        ></textarea>

        <Kakaomap 
          setBookData = {setBookData}
          bookData={bookData}
        />
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default RegisterForm;