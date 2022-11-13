import SelectForm from "../../components/register/SelectForm";

const SelectContainer = ({
  searchResults, 
  step2Ref,
  setResult,
  setIsScrollToStep3,
  isView,
  setIsView
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
      latitude: 0,
      longitude: 0,
      status: "",
      token: ""
    });
    setIsView({...isView, step3: true});
    setIsScrollToStep3(true);
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