import { toast } from 'react-toastify';

/**
 * 스크롤 최상단 이동
 */
export const scrollToTop = () => {
  window.scrollTo(0, 0)
}

/**
 * 스크롤 최상단 부드럽게 이동
 */
export const scrollToTopSmooth = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

/**
 * 토스트 생성자
 */
export const toastMaker = {
  success(message) {
    return toast.success(message, {
      position: "bottom-right",
      hideProgressBar: true,
      draggable: true,
      theme: "colored",
      limit: 1,
      closeOnClick: true,


    });
  },

  error(message) {
    return toast.error(message, {
      position: "bottom-right",
      hideProgressBar: true,
      draggable: true,
      closeOnClick: true,
      theme: "colored",
      limit: 1,
    });
  },

  info(message) {
    return toast.info(message, {
      position: "bottom-right",
      hideProgressBar: true,
      draggable: true,
      theme: "colored",
      limit: 1,
      closeOnClick: true,
    });
  },
  
};