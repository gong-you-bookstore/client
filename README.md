# <img align="left" src="https://user-images.githubusercontent.com/90181028/205477593-6f5f08cd-0344-40cd-89f3-01e258d57567.png" width="100px" /> [공유책방](https://gong-you-bookstore.netlify.app/)

> 우리가 만드는 공유책방

<br>

<div align="left">
<img src="https://user-images.githubusercontent.com/90181028/205436710-0e0a6088-cc4a-44e4-a172-a84bbe523958.png" width="49%">
<img src="https://user-images.githubusercontent.com/90181028/205436716-ee97efe3-ab95-4d9c-ac0e-66c8a1ba7163.png" width="49%">
<img src="https://user-images.githubusercontent.com/90181028/205436740-c5785337-48aa-4b3b-939a-47d8604f17b8.png" width="49%">
<img src="https://user-images.githubusercontent.com/90181028/205436741-8f14f271-fb48-47f1-8584-e43439e85d1a.png" width="49%">
</div>
<br>

# 📚 공유책방 소개

> 중고 도서 공유 플랫폼

"공유책방"은 더는 활용되지 않은 채 집에 잠들어 있는 책을 깨우고, 나눔을 통하여 책이라는 재화의 효율성을 극대화하는 프로젝트입니다.

- 아주대학교 2022-2 AI융합캡스톤디자인2 프로젝트
- 개발 기간: 2022.10 ~ 2022.12

# 👩🏻‍💻 TEAM

| 박지헌      | 장윤아    | 허욱      | 정영우          |
| ----------- | --------- | --------- | --------------- |
| @jiheon788  | @zogak    | @Wook0111 | @youngwoo-korea |
| FE / Design | BE / 배포 | RS | PM |

# ✨ KEY FUNTIONS

- [x] **책 등록**: 내가 가진 책을 검색 및위치 기반 등록
- [x] **바코드 스캔**: ISBN스캔으로 책 등록의 간편화
- [x] **책방**: 장르별 책방과 검색기능을 통한 간편한 책 찾기
- [x] **메시지**: 유저간 거래 및 나눔을 위한 메시지 기능을 구현
- [x] **토큰**: 상대와 거래를 하며 토큰을 교환하는 기능 구현
- [x] **추천시스템**: 책 상세보기에서 유사한 책들을 추천
- [x] **갤러리**: 내가 등록한 책과, 사용자 맞춤 추천 책들을 볼 수 있는 갤러리 페이지

# ⚙ SYSTEM STRUCTURE

![공유책방-시스템구조도](https://user-images.githubusercontent.com/90181028/203847536-937f6e16-a4e1-446a-8cf3-dfbf4f209623.png)

# 📁 gong-you-bookstore/fe

```bash
├── public
├── docs # 개발 문서 관리
├── src
│   ├── lib
│   │    ├── api # 서버 통신 함수 폴더
│   │    ├── hooks # 커스텀 훅 폴더
│   │    ├── services.js # 외부 api 함수
│   │    ├── statics.js # 정적 파일
│   │    ├── styles.js # 스타일링 관련
│   │    └── utils.js # 유틸 함수
│   ├── assets # css, images
│   ├── pages # 페이지 관리
│   ├── containers # 상태 관리
│   ├── components # 컴포넌트
│   ├── App.js
│   └── index.js
└── ....etc
```
