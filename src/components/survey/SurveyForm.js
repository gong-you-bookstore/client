import { useEffect } from "react";
import { useState } from "react";
import { CATEGORIES } from "../../lib/statics";

const SurveyForm = ({formRef}) => {
  const [userForm, setUserForm] = useState({
    birth: "",
    gender: "",
    genres:[]
  })

  const [genres, setGenres] = useState([])

  const onChangeForm = (event) => {
    setUserForm({
      ...userForm,
      [event.target.name]: event.target.value
    })
  }
  const onChangeGenres = (event) => {
    setGenres([...genres, event.target.value])
  }

  useEffect(()=>{
    console.log(userForm)
  }, [userForm])

  useEffect(()=>{
    console.log(genres)
  }, [genres])

  return (
    <>
      <div className="bg-white-full-vh flex-col-box-center lh-2" ref={formRef}>
        <div className="container">
          <div className=" desktop-box">
            <span className="fc-main fs-32 fw-bold">Step 1</span>
            <p className="fc-muted fs-28">
              인적사항을 체크해주세요
            </p>
            
            <form className="survey-grid">
                <label htmlFor="gender" className="fs-20 fw-bold mr-20">
                  성별
                </label>
                <div className="form-row-flex">
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

              <label htmlFor="password" className="fs-20 fw-bold mr-20">생년</label>
              <input 
                  type="text" 
                  name="birth" 
                  value={userForm.birth}
                  onChange={onChangeForm} 
                  placeholder="예시) 1995"
                  className="input-styled"
              />

              <label htmlFor="password" className="fs-20 fw-bold mr-20">좋아하는 장르</label>
              <div className="genres-grid">
              {
                CATEGORIES.map((category, index) => (
                  <>
                  <input
                    key={index}
                    type="checkbox" 
                    name="genres" 
                    value={category.name}
                    onChange={onChangeGenres} 
                  /> {category.name}
                </>
                ))
              }
              </div>
            </form>
            <button
              type="button"
              className="mtb-10 primary-btn w-100p btn-big"
            >
              제출하기
            </button>


              
          </div>
        </div>
      </div>
    </>
  )
}

export default SurveyForm;