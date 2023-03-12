import { useState } from 'react';

import useScrollTo from '../lib/hooks/useScrollTo';
import Step1SearchContainer from '../containers/register/Step1SearchContainer';
import Step2SelectContainer from '../containers/register/Step2SelectContainer';
import Step3FillContainer from '../containers/register/Step3FillContainer';
import Step4PictureContainer from '../containers/register/Step4PictureContainer';
import Step5LocationContainer from '../containers/register/Step5LocationContainer';
const RegisterPage = () => {
  const [step2Ref, setIsScrollToStep2] = useScrollTo();
  const [step3Ref, setIsScrollToStep3] = useScrollTo();
  const [step4Ref, setIsScrollToStep4] = useScrollTo();
  const [step5Ref, setIsScrollToStep5] = useScrollTo();
  const [searchResults, setSearchResults] = useState([]);
  const [result, setResult] = useState({});
  const [bookImage, setBookImage] = useState('');
  const [isView, setIsView] = useState({
    step2: false,
    step3: false,
    step4: false,
    step5: false,
  });

  return (
    <>
      <Step1SearchContainer
        setSearchResults={setSearchResults}
        setIsScrollToStep2={setIsScrollToStep2}
        isView={isView}
        setIsView={setIsView}
      />
      {isView.step2 ? (
        <Step2SelectContainer
          searchResults={searchResults}
          setResult={setResult}
          step2Ref={step2Ref}
          setIsScrollToStep3={setIsScrollToStep3}
          isView={isView}
          setIsView={setIsView}
        />
      ) : (
        <></>
      )}
      {isView.step3 ? (
        <Step3FillContainer
          result={result}
          setResult={setResult}
          step3Ref={step3Ref}
          setIsScrollToStep4={setIsScrollToStep4}
          isView={isView}
          setIsView={setIsView}
        />
      ) : (
        <></>
      )}
      {isView.step4 ? (
        <Step4PictureContainer
          step4Ref={step4Ref}
          setIsScrollToStep5={setIsScrollToStep5}
          isView={isView}
          setIsView={setIsView}
          bookImage={bookImage}
          setBookImage={setBookImage}
        />
      ) : (
        <></>
      )}
      {isView.step5 ? (
        <Step5LocationContainer result={result} setResult={setResult} bookImage={bookImage} step5Ref={step5Ref} />
      ) : (
        <></>
      )}
    </>
  );
};

export default RegisterPage;
