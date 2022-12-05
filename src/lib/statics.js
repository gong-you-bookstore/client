export const MENUS = [
  { name: "책 등록", address: "/register", isAuth: true },
  { name: "책방", address: "/store", isAuth: false },
  { name: "갤러리", address: "/gallery", isAuth: true },
  { name: "마이페이지", address: "/mypage", isAuth: true },
];

export const CATEGORIES = [
  {
    name: "총류",
    code: "000",
    eng: "COMPUTER SCIENCE, INFORMATION & GENERAL WORKS",
  },
  {
    name: "철학",
    code: "100",
    eng: "PHILOSOPHY",
  },
  {
    name: "종교",
    code: "200",
    eng: "RELIGION",
  },
  {
    name: "사회과학",
    code: "300",
    eng: "SOCIAL SCIENCE",
  },
  {
    name: "자연과학",
    code: "400",
    eng: "NATURAL SCIENCE",
  },
  {
    name: "기술과학",
    code: "500",
    eng: "TECHNOLOGY",
  },
  {
    name: "예술",
    code: "600",
    eng: "ART & RECREATION",
  },
  {
    name: "언어",
    code: "700",
    eng: "LANGUAGE",
  },
  {
    name: "문학",
    code: "800",
    eng: "LITERATURE",
  },
  {
    name: "역사",
    code: "900",
    eng: "HISTORY & GEOGRAPHY",
  },
];

export const statusMap = {
  SHARE: "나눔",
  SOLD: "판매완료",
  UNSOLD: "판매중",
  READ: "미판매",
  PENDING: "예약",
}

