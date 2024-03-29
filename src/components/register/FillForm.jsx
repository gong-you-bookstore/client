const FillForm = ({ step3Ref, result, onClickConfirmBtn, onChangeResult }) => {
  return (
    <div className="bg-white-full-vh flex-col-box-center lh-2" ref={step3Ref}>
      <div className="container w-100p">
        <div className=" desktop-box">
          <h1 className="fc-main fs-32">Step 3</h1>
          <p className="fc-dark fs-28 fw-300">책을 확인하고 판매여부를 정해주세요.</p>
          <div className="flex-col-box-center mtb-50">
            <img src={result.thumbnail} alt="img" />
            <p>{result.title}</p>

            <form className="survey-grid w-100p mt-20">
              <label htmlFor="content" className="form-label">
                Status
              </label>
              <div className="form-row-flex">
                <input type="radio" name="status" value="READ" onChange={onChangeResult} />
                미판매
                <input type="radio" name="status" value="UNSOLD" onChange={onChangeResult} />
                판매
                <input type="radio" name="status" value="SHARE" onChange={onChangeResult} />
                나눔
              </div>

              {result.status === 'UNSOLD' ? (
                <>
                  <label htmlFor="content" className="form-label">
                    Token
                  </label>
                  <div className="form-row-flex">
                    <input type="radio" name="token" value="1" onChange={onChangeResult} />1
                    <input type="radio" name="token" value="2" onChange={onChangeResult} />2
                    <input type="radio" name="token" value="3" onChange={onChangeResult} />3
                  </div>
                </>
              ) : (
                <></>
              )}
            </form>

            <button
              type="button"
              className="primary-btn btn-big w-100p"
              onClick={() => {
                onClickConfirmBtn();
              }}
            >
              다음
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FillForm;
