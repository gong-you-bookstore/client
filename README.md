# 공유책방 - client

> 중고 도서 공유 플랫폼

<div align="center">
<img src="https://user-images.githubusercontent.com/90181028/205436710-0e0a6088-cc4a-44e4-a172-a84bbe523958.png" width="49%">
<img src="https://user-images.githubusercontent.com/90181028/205436716-ee97efe3-ab95-4d9c-ac0e-66c8a1ba7163.png" width="49%">
</div>

## 🏆 Prize

- 2022 AJOU SOFTCON - **최우수상(1등)**, **인기상(현장투표 1등)**
- 제 15회 LINC 3.0 캡스톤디자인 경진대회 - **우수상(2등)**

## 👨🏻‍💻 Team

|                   박지헌                   |               장윤아               |                   허욱                   |                        정영우                        |
| :----------------------------------------: | :--------------------------------: | :--------------------------------------: | :--------------------------------------------------: |
| [@jiheon788](https://github.com/jiheon788) | [@zogak](https://github.com/zogak) | [@Wook0111](https://github.com/Wook0111) | [@youngwoo-korea](https://github.com/youngwoo-korea) |
|                FE / Design                 |             BE / 배포              |                    RS                    |                          PM                          |

## 🤔 Background

- Problem: 대다수의 책은 한번 읽고 난 뒤, 다시 사용되지 않고 집에 방치되기 마련
- Solution: 토큰을 통해 사용자 간의 직접적인 상호작용을 지원하는 **도서 전용 중고거래 플랫폼**
- Vision: **공유**라는 새로운 도서 문화 창출 / 책이라는 **재화의 효율성**을 극대화

## ✨ Features

- [x] **책 등록**: 내가 가진 책을 검색 및 위치 기반 등록
- [x] **바코드 스캔**: 카메라로 바코드(ISBN)를 스캔하여 책 등록의 간편화
- [x] **책방**: 장르별 책방과 검색기능을 통한 간편한 책 찾기
- [x] **메시지**: 유저간 거래 및 나눔을 위한 메시지 기능을 구현
- [x] **토큰**: 상대와 거래를 하며 토큰을 교환하는 기능 구현
- [x] **추천시스템**: 책 상세보기에서 유사한 책들을 추천
- [x] **갤러리**: 내가 등록한 책과, 사용자 맞춤 추천 책들을 볼 수 있는 갤러리 페이지

## 🔮 Demo

### 1. Home

<img src="https://user-images.githubusercontent.com/90181028/208310193-d15a6160-cc28-42a5-a977-5f856b62b456.gif" width="98%">

- `react-awesome-reveal`을 통한 애니메이션 효과
- 서비스 소개
- 각 장르별 책방으로 이동 가능한 카드 형식의 버튼이 있습니다.

### 2. 로그인 및 회원가입

<img src="https://user-images.githubusercontent.com/90181028/208310200-0d91d5e3-acde-4c8f-930c-6d96f377083f.gif" width="98%">

- 누락값, 이메일 형식(정규식), 비밀번호-확인 비밀번호 일치 검사 등 유효성 검사
- 사용성을 해치는 alert 창 대신 `react-toastify`를 사용해 토스트창 구현

### 3. 책 등록

<div>
<img src="https://user-images.githubusercontent.com/90181028/206196901-0de37c9c-1239-4c33-82f9-21d3a5cad484.gif" width="49%">
<img src="https://user-images.githubusercontent.com/90181028/206200013-f3091072-9e7a-4919-aa0b-5a905b748ef9.gif" width="49%">
</div>

- 5 단계를 거쳐 책방에 등록 가능
- 각 단계마다 자동으로 스크롤을 이동해주며 **사용자 편의성 증대**
- **Step 1 검색**: 내가 가진 책을 검색 or 카메라로 바코드(ISBN)를 스캔(QuggaJS 사용)
- **Step 2 선택**: 카카오 api를 통해 책들의 목록을 보여줌, 사용자는 이 중 자신의 책을 선택
- **Step 3 상태 등록**: 책의 판매여부, 토큰 갯수 등록
- **Step 4 사용자 사진 등록**: 사용자 책의 상태를 확인할 수 있는 사진 등록(선택)
- **Step 5 위치 확인**: 사용자의 위치를 확인 후 등록 완료

### 5. 책방

<img src="https://user-images.githubusercontent.com/90181028/206198670-cff6e98d-aded-4c3e-a75f-74df74b1e570.gif" width="98%">

- 사용자들이 등록한 책들을 확인할 수 있는 책방 + 장르별 책방
- 검색기능을 통한 간편한 책 찾기
- 상세페이지에서는 추천 서버를 통해 유사한 책들 추천

### 6. 메시지 & 토큰 거래

<img src="https://user-images.githubusercontent.com/90181028/206202669-b8d47340-6d4c-45f4-bbfd-289a26e63d5b.gif" width="98%">

- 유저간 거래 및 나눔을 위한 메시지 기능
- Step 1: 메시지를 통해 거래의사 합의
- Step 2: 구매자가 거래 요청 버튼 클릭
- Step 3: 판매자가 거래 수락 버튼을 클릭하면 토큰이 교환되며 거래완료

### 7. 갤러리

<img src="https://user-images.githubusercontent.com/90181028/206197843-0e32af37-551f-4e48-9fca-92806fb6ce80.gif" width="98%">

- 사용자만의 온라인 책장
- 내가 등록한 책과, 사용자 맞춤 추천 책들을 볼 수 있는 갤러리 페이지
- 책이 펼쳐지는 듯한 애니메이션을 사용하여 유저 인터렉션 증대

### 8. 404

<img src="https://user-images.githubusercontent.com/90181028/206859023-9e57f872-126f-40fe-a64d-5a535f4f6506.gif" width="98%">

## 🛠 Tech Stack

`React`, `Responsive Web`, `Jquery`, `QuggaJs`, `Container-Presenter`, `Netlify`, `Spring boot`, `Flask`, `scikit learn`, `faiss`, `MySQL`, `EC2`, `RDS`

## ⚙️ System Architecture

![공유책방-시스템구조도-002](https://user-images.githubusercontent.com/90181028/211186171-968f354c-0e20-45e8-8ebd-2f36517c7fc2.png)

## Getting Started

### Install

```bash
$ npm i
```

### Build

```bash
$ npm run build
```

### Start

```bash
$ npm start
```

### env

- Fill out `.env` for your api key & server url

```
REACT_APP_KAKAO_HOST_URL = https://dapi.kakao.com
REACT_APP_KAKAO_REST_API_KEY = ${your kakao rest api key}
REACT_APP_KAKAO_JS_KEY = ${your kakao javascript key}

REACT_APP_NLK_HOST_URL = https://www.nl.go.kr
REACT_APP_NLK_API_KEY = ${your NLK api key}

REACT_APP_SERVER_URL = ${your server url}
REACT_APP_RS_SERVER_URL = ${your recommendation server url}
```

## Directory

```bash
├── public
├── src
│   ├── lib
│   │    ├── api # 서버 통신 함수
│   │    ├── hooks # 커스텀 훅
│   │    ├── services.js # 외부 api 함수
│   │    ├── statics.js # 정적 파일
│   │    ├── styles.js # 스타일링 관련
│   │    └── utils.js # 유틸 함수
│   ├── assets # css, images
│   ├── pages # 페이지 관리
│   ├── containers # 비즈니스 로직 컴포넌트
│   ├── components # Presenter 컴포넌트
│   ├── App.js
│   └── index.js
└── ....etc
```
