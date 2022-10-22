import SearchCarousel from "./SearchCarousel";

const SelectForm = ({searchResults, setResult}) => {
  return (
    <div className="container">
    {
          searchResults.length ? (
            <>
              <div className="content-section white-box">

                <SearchCarousel 
                  searchResults={searchResults} 
                  setResult={setResult}
                />
              </div>
            </>
          ) : (
            <></>
          )
        }
    </div>
  )
}

export default SelectForm;