import SurveyForm from "../components/survey/SurveyForm";
import { useState } from "react";

const SurveyContainer = ({formRef}) => {
  

  return (
    <>
      <SurveyForm
        formRef = {formRef}
      />
    </>
  )
}

export default SurveyContainer;