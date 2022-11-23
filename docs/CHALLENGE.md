# HTTPS vs HTTP

## DATE 20221120

네트워크 정책상 아래와 같이만 통신이 가능하다.

- 클라이언트(http) -> 서버(http)
- 클라이언트(https) -> 서버(https)

공유책방은 현재 프론트 - Netlify(https), 백엔드 - ec2(http) 이므로 문제상황 2에 해당된다.

### - 문제상황1: 클라이언트(http) -> 서버(https)

이 경우에는 클라이언테 헤드부분에 아래 태그 추가해주면 클라이언트에서 보내는 모든 요청이 https로 바뀌어서 해결된다.

```html
<meta
  http-equiv="Content-Security-Policy"
  content="upgrade-insecure-requests"
/>
```

### - 문제상황2: 클라이언트(https) -> 서버(http)

Netlify 공식답변으로는 https를 강제적으로 끌 수 없다. 해결책은 아래와 같다.

- 해결법 1: 서버에 ssl인증 받아서 서버를 https로 바꾸기, 메인서버와 추천서버 두가지 모두 바꿔야하기 때문에 **보류**
- 해결법 2: 클라이언트 배포를 http로 낮추기. 즉 네트리파이를 버리고 다른 방법으로 배포해야함. 프론트도 aws로 구매하기에는 비용문제가 있어 **보류**
- 해결법 3: GithubPage 서비스로 배포하고 도메인을 따로 구입하면 http 옵션으로 설정가능, 만약 도메인을 구입할 예정이라면 최선으로 보인다.

## DATE 20221122

Netlify 공식문서에서 해답을 찾음. 아래 공식 문서의 내용이다

> Similar to how you can rewrite paths like /_ to /index.html, you can also set up rules to let parts of your site proxy to external services. Let’s say you need to communicate from a single-page app with an API on https://api.example.com that doesn’t support CORS requests. The following rule will let you use /api/ from your JavaScript client:  
> /api/_ https://api.example.com/:splat 200  
> Now all requests to /api/... will be proxied through to https://api.example.com straight from our CDN servers without an additional connection from the browser. If the API supports standard HTTP caching mechanisms like ETags or Last-Modified headers, the responses will even get cached by our CDN nodes.

- 해결법4: public 최상단에 \_redirects 파일추가하고 'sample 1'을 삽입한다. 클라이언트에서 api 호출 코드 또한 'sample 2'와 같이 바꿔준다. 이제 모든 요청 은 브라우저에서 추가로 연결하지 않고 CDN 서버에서 바로 /api/...프록시된다. 이 방법을 사용하여 정상적으로 서버와 통신하는 것을 확인하였다.

```bash
# sample 1
/api/* http://43.200.171.144:8080/:splat 200
```

```JavaScript
// sample 2

// 변경 전
axios({
    method: "post",
    url: `http://43.200.171.144:8080/user/signup`,
    data: signUpData,
})

// 변경 후
axios({
    method: "post",
    url: `api/user/signup`,
    data: signUpData,
})
```

# Performance

사이트의 성능 확인은 아래 3가지 방법으로 측정 및 문서화하였다.

- 개발자도구 - SHOW FPS
- 개발자도구 - Lighthouse
- 개발자도구 - 네트워크 측정 후 har 파일 추출로 문서화

## DATE 20221123

개발버전과 배포버전에서 이미지가 많은 부분에 버벅거림이 심하였다. 이미지를 preload 하는 등의 시도를 하였으나 해결되지 않음. 찾아보니 이미지 파일자체의 용량이 많은 리소스를 차지한다. 공유책방의 경우 이미지 파일이 jpg다 보니 원본사이즈(2000이상)를 사용해야 화질이 좋을 것이라 생각하여 실제 300x300px 크기로 사용하더도 큰 이미지를 사용하였다. 그 결과 평균 60 fps를 유지하는 사이트가 이미지가 위치하는 부분에서 아래와 같이 40fps로 떨어짐을 확인하였다.

![screenshot](./performance/FPS-%EC%B5%9C%EC%A0%81%ED%99%94%EC%A0%84-1123.png)

이를 해결하기 위해 적당한 사이즈의 이미지 최적화를 진행하였다. 결과적으로 FPS가 전혀 떨어지지않는다.

![screenshot](./performance/FPS-%EC%B5%9C%EC%A0%81%ED%99%94%ED%9B%84-1123.png)

| type | before image | after image |
| ---- | ------------ | ----------- |
| FPS  | 42.6 fps     | 58.2 fps    |
| size | 2.3 MB       | 146 KB      |
| time | 134 ms       | 11 ms       |
