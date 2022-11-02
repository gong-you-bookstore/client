import SearchCarousel from "./SearchCarousel";

const SelectForm = ({searchResults, step2Ref, setBookData}) => {
  return (
    <>
              
    {
          searchResults.length ? (
            <>
              <div className="bg-dark-full-vh flex-col-box-center lh-2" ref={step2Ref}>
                <div className="container w-100p">
                  <div className="white-box">
                    <span className="fc-main fs-32 fw-bold">Step 2</span>
                    <p className="fc-muted fs-28">
                    맞는 책을 고르세요
                    </p>
                    <SearchCarousel 
                      searchResults={searchResults} 
                      setBookData = {setBookData}
                    />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )
        }
    </>
  )
}

export default SelectForm;