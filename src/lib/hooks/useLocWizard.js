import { useLocation } from "react-router-dom"
import { useEffect } from "react"

import {  scrollToTop, onChangeNavByScroll, onCloseHamburger } from "../utils";

const useLocWizard = () => {
  const {pathname} = useLocation();

  onChangeNavByScroll();

  useEffect(() => {
    scrollToTop();
    onCloseHamburger();
  },[pathname])


}

export default useLocWizard;