import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import $ from 'jquery'

import {  scrollToTop, onCloseHamburger } from "../utils";

const useLocWizard = () => {
  const {pathname} = useLocation();
  
  
    $(document).on('scroll', function(){
      if ($(window).scrollTop() > 100){
        $("nav").addClass("non-top");
        $('.rounded-btn').addClass( 'active' );
      } else {
        $("nav").removeClass("non-top");
        $('.rounded-btn').removeClass( 'active' );
      }
    })
  

  

  useEffect(() => {
    scrollToTop();
    onCloseHamburger();
  },[pathname])


}

export default useLocWizard;