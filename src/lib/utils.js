import $ from 'jquery'

// 스크롤 내리면 스타일 변경
export const onChangeStylesByScroll = () => {
  $(document).on('scroll', function(){
    if($(window).scrollTop() > 100){
        $("nav").addClass("non-top");
        $(".line").css('background-color', '#333');
        $('.top-btn').addClass( 'active' );
    }else{
        $("nav").removeClass("non-top");
        $(".line").css('background-color', '#fff');
        $('.top-btn').removeClass( 'active' );
    }
  })
}

// 햄버거 버튼 닫기
export const onCloseHamburger = () => {
  if($('.hamburger').hasClass("active")){
    $('.hamburger').removeClass( 'active' );
    $('.navbar-menu').removeClass( 'active' );
  }
}

// 햄버거 버튼 토글
export const onToggleHamburger = () => {
  if($('.hamburger').hasClass("active")){
    $('.hamburger').removeClass( 'active' );
    $('.navbar-menu').removeClass( 'active' );
  } else {
    $('.hamburger').addClass( 'active' );
    $('.navbar-menu').addClass( 'active' );
  }
}

// 스크롤 최상단 이동
export const scrollToTop = () => {
  window.scrollTo(0, 0)
}

// 스크롤 최상단 부드럽게 이동
export const scrollToTopSmooth = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

