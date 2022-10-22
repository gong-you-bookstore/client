import SearchCarousel from "./SearchCarousel";

const SelectForm = ({searchResults, setResult, step2Ref}) => {
  return (
    <>
              
    <span className="pointer" ref={step2Ref} >
    </span>
    <div className="container">
    {
          searchResults.length ? (
            <>
              <div className="content-section white-box">
                <span className="fc-main fs-32 fw-bold">Step 2</span>
                <p className="fc-muted fs-28">
                맞는 책을 고르세요
                </p>
                <div className="mtb-50" >
                  <SearchCarousel 
                    searchResults={searchResults} 
                    setResult={setResult}
                  />
                </div>
              </div>
            </>
          ) : (
            <></>
          )
        }
    </div>
    </>
  )
}

export default SelectForm;