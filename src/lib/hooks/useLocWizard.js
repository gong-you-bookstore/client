import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import {  scrollToTop } from "../utils";
import { onChangeStylesByScroll, onCloseHamburger } from "../styles";
import $ from 'jquery'

const useLocWizard = () => {
  const {pathname} = useLocation();
  
  onChangeStylesByScroll();

  // if(pathname === "/") {
  //   $("nav").removeClass("non-top");
  //   $('.rounded-btn').removeClass( 'active' );
  // }

  useEffect(() => {
    scrollToTop();
    onCloseHamburger();
  },[pathname])
}

export default useLocWizard;