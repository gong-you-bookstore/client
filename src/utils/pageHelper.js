// 스크롤 내리면 네비바 스타일 변경
import $ from 'jquery'

export const changeNavByScroll = () => {
  $(document).on('scroll', function(){
    if($(window).scrollTop() > 100){
        $("nav").addClass("non-top");
        $(".line").css('background-color', '#333');
    }else{
        $("nav").removeClass("non-top");
        $(".line").css('background-color', '#fff');
    }
  })
}

export const closeHamburger = () => {
  if($('.hamburger').hasClass("active")){
    $('.hamburger').removeClass( 'active' );
    $('.navbar-menu').removeClass( 'active' );
  }
}

export const onClickHamburger = () => {
  if($('.hamburger').hasClass("active")){
    $('.hamburger').removeClass( 'active' );
    $('.navbar-menu').removeClass( 'active' );
  } else {
    $('.hamburger').addClass( 'active' );
    $('.navbar-menu').addClass( 'active' );
  }
}

