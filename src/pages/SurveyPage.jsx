import { useState } from 'react';
import SurveyContainer from '../containers/SurveyContainer';
import useScrollTo from '../lib/hooks/useScrollTo';

const SurveyPage = () => {
  const [formRef, setIsScrollToForm] = useScrollTo();
  const [isView, setIsView] = useState(false);
  const onClickAgreeBtn = () => {
    setIsView(true);
    setIsScrollToForm(true);
  };

  return (
    <>
      <div className="bg-dark-full-vh flex-col-box-center lh-2">
        <div className="container">
          <div className=" desktop-box">
            <span className="fc-main fs-28 fw-bold">개인정보 수집, 이용 동의서</span>
            <p className="fc-muted fs-18">
              1. 수집하는 개인정보 항목
              <br />
              생년, 성별
              <br />
              <br />
              2. 개인정보의 수집 및 이용 목적
              <br />
              제공하신 정보는 '공유책방' 서비스의 고객 맞춤 책 추천서비스를 위해 사용합니다.
              <br />
              <br />
              귀하는 이에 대한 동의를 거부할 수 있습니다.
              <br />
              다만 동의가 없을 경우 '공유책방'의 추천서비스를 제공 받지 못함을 알려드립니다.
            </p>
            <button
              type="button"
              onClick={() => {
                onClickAgreeBtn();
              }}
              className="mb-20 mt-20 primary-btn btn-big w-100p"
            >
              동의하기
            </button>
          </div>
        </div>
      </div>
      {isView ? <SurveyContainer formRef={formRef} /> : <></>}
    </>
  );
};

export default SurveyPage;
