import { toast } from 'react-toastify';
import $ from 'jquery'
import { checkDuplicatedEmail } from './api/user';

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

const rEmailExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

/**
 * 이메일 유효성 검사: 누락값, 이메일 형식, 패스워드 일치
 * @param {*} data signUpData
 * @returns 
 */
export const isValidateSignUpData = (data) => {
  if (data.email === "") {
    toastMaker.error("이메일을 입력해주세요.");
    $("#email").focus();
    return false;
  }

  if (data.email.match(rEmailExp) === null) {
    toastMaker.error("이메일 형식이 아닙니다");
    $("#email").focus();
    return false;
  }

  if (data.password === "") {
    toastMaker.error("패스워드를 입력해주세요.");
    $("#password").focus();
    return false;
  }

  if (data.rePassword === "") {
    toastMaker.error("확인 패스워드를 입력해주세요.");
    $("#rePassword").focus();
    return false;
  }

  if (data.name === "") {
    toastMaker.error("이름을 입력해주세요.");
    $("#name").focus();
    return false;
  }

  if (data.password !== data.rePassword) {
    toastMaker.error("비밀번호와 확인 비밀번호가 같지 않습니다.");
    $("#password").focus();
    return false;
  }

  return true;
}