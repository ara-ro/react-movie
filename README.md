## React Movie Homepage
>**React**를 이용한 영화 홈페이지 제작하기 😊
[링크](https://ara-ro.github.io/react-movie/)
---

## Installation
### React router dom [Link](https://v5.reactrouter.com/web/guides/quick-start)
```
npm i react-router-dom@5.3.0
``` 

### gh-pages
> github page에 업로드 할 수 있게하는 서비스
웹사이트를 만들어 준다! **무료**
```
npm i gh-pages
npm run build
```
> build 후 ``package.json`` 에서 아래 소스 추가
> ```
> "scripts": {
>   "start": "react-scripts start",
>   "build": "react-scripts build",
>   "test": "react-scripts test",
>   "eject": "react-scripts eject",
>   "deploy": "gh-pages -d build",
>   "predeploy": "npm run build"
> }
> ```
> > **script 실행순서** 
> > ``build`` > ``predeploy`` > ``deploy``



[시청강의 : 노마드코더
(ReactJS로 영화 웹 서비스 만들기)](https://nomadcoders.co/react-for-beginners/lobby, "강의페이지로 이동")
