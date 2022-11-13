import SelectForm from "../../components/register/SelectForm";

const SelectContainer = ({
  searchResults, 
  step2Ref,
  setResult,
  setIsScrollToStep3
}) => {
  const onClickSelectImg = (book) => {
    setResult({
      isbn: String(book.isbn.substr(-13)),
      title: book.title,
      author: [...book.authors],
      content: book.contents,
      thumbnail: book.thumbnail,
      publisher: book.publisher,
      price: book.price,
      kdc: 0,
      latitude: "37.3973806",
      longitude: "127.1109965"
    });
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