import { useLocation } from "react-router-dom"
import { useEffect } from "react"

import {  scrollToTop, onChangeStylesByScroll, onCloseHamburger } from "../utils";

const useLocWizard = () => {
  const {pathname} = useLocation();

  onChangeStylesByScroll();

  useEffect(() => {
    scrollToTop();
    onCloseHamburger();
  },[pathname])


}

export default useLocWizard;