import Kakaomap from "./Kakaomap";

const RegisterForm = ({
  step3Ref,
  result,
  kdc
}) => {
  return (
    <div className="bg-white-full-p flex-col-box-center lh-2" ref={step3Ref}>
      <div className="container w-100p">
          <span className="fc-main fs-32 fw-bold">
            Step 3
          </span>
          <p className="fc-dark fs-28" >
            내용을 작성해주세요
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
              value={kdc}
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