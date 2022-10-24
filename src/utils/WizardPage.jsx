// 페이지 이동시 최상단으로 스크롤
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToTop, closeHamburger, changeNavByScroll } from "./helpers/styler";

const WizardPage = () => {
  const {pathname} = useLocation();

  changeNavByScroll();

  useEffect(() => {
    scrollToTop();
    closeHamburger();
  },[pathname])

  return null;
}

export default WizardPage;