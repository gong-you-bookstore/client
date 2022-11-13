import { useState } from "react";

const RegisterForm = ({
  step3Ref,
  result,
  setResult,
  KDC,
  setIsScrollToStep4
}) => {
  const [isSold, setIsSold] = useState(false);

  const [userSelect, setUserSelect] = useState({
    status: "",
    token: 0,
  })

  const onChangeUserSelect = (event) => {
    setUserSelect({
      ...userSelect,
      [event.target.name]: event.target.value
    })
  }
  return (
    <div className="bg-white-full-p flex-col-box-center lh-2" ref={step3Ref}>
      <div className="container w-100p">
          <span className="fc-main fs-32 fw-bold">
            Step 3
          </span>
          <p className="fc-dark fs-28" >
            책을 확인하고 판매여부를 정해주세요.
          </p>
          <div className="flex-col-box-center mtb-50">
            <img src={result.thumbnail} alt="img" />
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
              value={result.isbn}
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
              value={result.content}
              // onChange={onChangeUpdateData}
              name="content"
              id="content"
              rows="5"
              disabled
            ></textarea>

            <form className="survey-grid w-100p mt-20">
            <label htmlFor="content" className="form-label">Status</label>
            <div className="form-row-flex">
              <input 
                type="radio" 
                name="status" 
                value="UNSOLD" 
                onChange={onChangeUserSelect}
                onClick={() => {
                  setIsSold(false);
                }}
              />미판매
              <input 
                type="radio" 
                name="status" 
                value="SOLD" 
                onChange={onChangeUserSelect}
                onClick={() => {
                  setIsSold(true);
                }}
              />판매
              <input 
                type="radio" 
                name="status" 
                value="SHARE" 
                onChange={onChangeUserSelect}
                onClick={() => {
                  setIsSold(false);
                }}
              />나눔
            </div>

            {
              isSold ? (
                <>
                <label htmlFor="content" className="form-label">Token</label>
                <div className="form-row-flex">
                  <input 
                    type="radio" 
                    name="token" 
                    value="1" 
                    onChange={onChangeUserSelect} 
                  />1
                  <input 
                    type="radio" 
                    name="token" 
                    value="2" 
                    onChange={onChangeUserSelect}
                  />2
                  <input 
                    type="radio" 
                    name="token" 
                    value="3" 
                    onChange={onChangeUserSelect}
                  />3
                </div>
                </>
              ) : (
                <></>
              )
            }
            </form>

            <button
              type="button"
              className="mtb-10 color-btn w-100p"
              onClick={() => {
                setResult({
                  ...result,
                  kdc:KDC,
                  status: userSelect.status,
                  token: userSelect.token,
                })
                setIsScrollToStep4(true);
              }}
            >
              다음
            </button>
            

            {/* <Kakaomap /> */}
          </div>
      </div>
    </div>
  )
}

export default RegisterForm;