import SelectForm from "../../components/register/SelectForm";

const SelectContainer = ({
  searchResults, 
  step2Ref,
  setResult,
  setIsScrollToStep3
}) => {
  const onClickSelectImg = (book) => {
    setResult(book);
    setIsScrollToStep3(true)
  }
  return (
    <>
      <SelectForm
        step2Ref = {step2Ref}
        searchResults = {searchResults}
        onClickSelectImg = {onClickSelectImg}
      />
    </>
  )
}

export default SelectContainer;