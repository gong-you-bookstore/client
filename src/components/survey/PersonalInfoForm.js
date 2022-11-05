const PersonalInfoForm = () => {
  return (
    <>
      <div className="bg-dark-full-vh flex-col-box-center lh-2">
        <div className="container">
          <div className=" white-box">
            <span className="fc-main fs-32 fw-bold">Step 1</span>
            <p className="fc-muted fs-28">
              인적사항을 입력해주세요
            </p>
            
              <input
                id="searchWord"
                name="searchWord"
                type="text"
                placeholder="검색어를 입력하세요"
                // value={searchWord}
                // onChange={onChangeSearchWord}
                className="input-styled w-100p fc-white"
              />


              <button
                type="button"
                className="mtb-10 color-btn w-100p"
              >
                Search
              </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default PersonalInfoForm;