const FillForm = ({
  step3Ref,
  result,
  onClickConfirmBtn,
  onChangeResult
}) => {
  return (
    <div className="bg-white-full-vh flex-col-box-center lh-2" ref={step3Ref}>
      <div className="container w-100p">
          <span className="fc-main fs-32 fw-bold">
            Step 3
          </span>
          <p className="fc-dark fs-28" >
            책을 확인하고 판매여부를 정해주세요.
          </p>
          <div className="flex-col-box-center mtb-50">
            <img src={result.thumbnail} alt="img" />
            
            <form className="survey-grid w-100p mt-20">
            <label htmlFor="email" className="form-label" >Title</label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="title"
              value={result.title}
              disabled
              className="input-styled w-100p"
            />

            <label htmlFor="content" className="form-label">Content</label>
            <textarea
              className="input-styled w-100p"
              value={result.content}
              name="content"
              id="content"
              rows="5"
              disabled
            ></textarea>

            <label htmlFor="content" className="form-label">Status</label>
            <div className="form-row-flex">
              <input 
                type="radio" 
                name="status" 
                value="UNSOLD" 
                onChange={onChangeResult}
              />미판매
              <input 
                type="radio" 
                name="status" 
                value="SOLD" 
                onChange={onChangeResult}
              />판매
              <input 
                type="radio" 
                name="status" 
                value="SHARE" 
                onChange={onChangeResult}
              />나눔
            </div>

            {
              result.status === "SOLD" ? (
                <>
                <label htmlFor="content" className="form-label">Token</label>
                <div className="form-row-flex">
                  <input 
                    type="radio" 
                    name="token" 
                    value="1" 
                    onChange={onChangeResult} 
                  />1
                  <input 
                    type="radio" 
                    name="token" 
                    value="2" 
                    onChange={onChangeResult}
                  />2
                  <input 
                    type="radio" 
                    name="token" 
                    value="3" 
                    onChange={onChangeResult}
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
              className="mtb-10 primary-btn btn-big w-100p"
              onClick={() => {
                onClickConfirmBtn();
              }}
            >
              다음
            </button>
          </div>
      </div>
    </div>
  )
}

export default FillForm;