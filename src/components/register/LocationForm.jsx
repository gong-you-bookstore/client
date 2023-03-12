import KakaoMap from './KakaoMap';

const LocationForm = ({ step5Ref, result, onClickRegisterBtn }) => {
  return (
    <div className="bg-white-full-vh flex-col-box-center lh-2" ref={step5Ref}>
      <div className="container w-100p">
        <div className=" desktop-box">
          <h1 className="fc-main fs-32">Step 5</h1>
          <p className="fc-dark fs-28 fw-300">위치를 확인해주세요</p>
          {result.latitude || result.longitude ? (
            <KakaoMap latitude={result.latitude} longitude={result.longitude} />
          ) : (
            <></>
          )}

          <button
            type="button"
            className="mtb-10 primary-btn btn-big w-100p"
            onClick={() => {
              onClickRegisterBtn();
            }}
          >
            등록하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationForm;
