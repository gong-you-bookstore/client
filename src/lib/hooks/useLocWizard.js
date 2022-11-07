import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import {  scrollToTop } from "../utils";
import { onChangeStylesByScroll, onCloseHamburger } from "../styles";

const useLocWizard = () => {
  const {pathname} = useLocation();
  
  onChangeStylesByScroll();

  useEffect(() => {
    scrollToTop();
    onCloseHamburger();
  },[pathname])
}

export default useLocWizard;