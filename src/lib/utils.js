import $ from 'jquery'
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


export const onClickCategory = (index) => {
  $(`.category-box li:nth-child(${index + 1}) button`).toggleClass("active");
}