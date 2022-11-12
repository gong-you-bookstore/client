import { useEffect } from "react";
import { useState } from "react";
import { CATEGORIES } from "../../lib/statics";

const PersonalInfoForm = () => {
  const [inputs, setInputs] = useState({
    birth: "",
    gender: "",
    genre:[]
  })

  const onChangeForm = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    })
  }

  useEffect(()=>{
    console.log(inputs)
  }, [inputs])

  return (
    <>
      <div className="bg-white-full-vh flex-col-box-center lh-2">
        <div className="container">
          <div className=" desktop-box">
            <span className="fc-main fs-32 fw-bold">Step 1</span>
            <p className="fc-muted fs-28">
              인적사항을 체크해주세요
            </p>
            
            <form className="form-col-flex">
              <div className="form-row-flex">
                <label htmlFor="gender" className="fs-20 fw-bold mr-20">성별</label>
                <input 
                  type="radio" 
                  name="gender" 
                  value="male" 
                  onChange={onChangeForm} 
                />남자
                <input 
                  type="radio" 
                  name="gender" 
                  value="female" 
                  onChange={onChangeForm}
                />여자
              </div>

              <div className="form-row-flex">
              <label htmlFor="password" className="fs-20 fw-bold mr-20">생년</label>
              <input 
                  type="text" 
                  name="birth" 
                  value={inputs.birth}
                  onChange={onChangeForm} 
                  placeholder="예시) 1995"
                  className="input-styled"
              />
              </div>

              <div className="form-row-flex">
              <label htmlFor="password" className="fs-20 fw-bold mr-20">좋아하는 장르</label>
              <div className="form-row-flex flex-wrap">

              {
                CATEGORIES.map((category, index) => (
                  <>
                  <input 
                    type="checkbox" 
                    name="birth" 
                    value={inputs.genre}
                    onChange={onChangeForm} 
                    placeholder="예시) 1995"
                    className="input-styled"
                  /> {category.name}
                </>
                ))
              }
              </div>

              </div>


              <button
                type="button"
                className="mtb-10 color-btn w-100p"
              >
                제출하기
              </button>
            </form>


              
          </div>
        </div>
      </div>
    </>
  )
}

export default PersonalInfoForm;