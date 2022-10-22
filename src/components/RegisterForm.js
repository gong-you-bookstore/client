import axios from "axios";
import { useEffect, useState } from "react";

import Kakaomap from "./Kakaomap";


const RegisterForm = ({result, resultRef}) => {
  const [KDC, setKDC] = useState("")

  useEffect(()=>{
    sendNLK()
      .then((res) => {
        if(res.data.total === 1){
          setKDC(res.data.result[0].classNo.substr(0, 3))
        }
      })
      .catch((error) => {
        console.log("작성실패", error);
      });
  }, [result])
  
  const sendNLK = async () => {
    return await axios.get(
      `https://www.nl.go.kr/NL/search/openApi/search.do?key=844178c1b1ab808edc1094993a1e3aec8f8565712a5ab9bf69b8bf793ebc633d&apiType=json&kwd=${result.isbn.slice(-13)}&pageSize=1&category=도서`
    );
  };  
  
  return (
    <div className="container" ref={resultRef}>
    <div className="content-section white-box" >
    <span className="fc-main fs-32 fw-bold">Step 3</span>
    <p className="fc-dark fs-28">
        내용을 작성해주세요
      </p>
    <div className="flex-col-box">
        <img src={result.thumbnail} />

        <label htmlFor="email" className="form-label">Title</label>
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
  )
}

export default RegisterForm;