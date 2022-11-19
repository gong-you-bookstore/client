import $ from 'jquery'

/**
 * 스크롤에 의한 스타일 변경
 */
export const onChangeStylesByScroll = () => {
  $(window).on('scroll', function(){
    if ($(window).scrollTop() > 100){
      $("nav").addClass("non-top");
      $('.rounded-btn').addClass( 'active' );
    } else {
      $("nav").removeClass("non-top");
      $('.rounded-btn').removeClass( 'active' );
    }
  })
}

/**
 * 햄버거 버튼 닫기
 */
export const onCloseHamburger = () => {
  if($('.hamburger').hasClass("active")){
    $('.hamburger').removeClass( 'active' );
    $('.navbar-menu').removeClass( 'active' );
  }
}

/**
 * 햄버거 버튼 토글
 */
export const onToggleHamburger = () => {
  $('.hamburger').toggleClass( 'active' );
  $('.navbar-menu').toggleClass( 'active' );
}

export const responsiveCarousel = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3
  }
};
