import SearchCarousel from './SearchCarousel';

const SelectForm = ({ searchResults, step2Ref, onClickSelectImg }) => {
  return (
    <>
      <div className="bg-dark-full-vh flex-col-box-center lh-2" ref={step2Ref}>
        <div className="container w-100p">
          <h1 className="fc-main fs-32">Step 2</h1>
          <p className="fc-muted fs-28 fw-300">맞는 책을 고르세요</p>
          <SearchCarousel searchResults={searchResults} onClickSelectImg={onClickSelectImg} />
        </div>
      </div>
    </>
  );
};

export default SelectForm;
