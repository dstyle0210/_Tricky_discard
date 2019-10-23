# _Tricky
프로젝트를 진행하면서 사용할 기본 라이브러리 만들기

## 목적
- Typescript , ES6 활용?
- babel + webpack
- 주로쓰는 개인용 라이브러리

## 작업환경
- 비주얼스튜디오 코드(VSC) : https://code.visualstudio.com/
- 노드JS : https://nodejs.org/ko/
- git : https://git-scm.com/download/win

## 아이디어
변수명 TRICTY
약자는.. $Tricty?

## 공통
_Tricty.browser
_Tricty.head
_Tricty.html
_Tricty.body
_Tricty.device
_Tricty.deviceVersion




## 메소드 아이디어
_Tricty.gotoScroll(); // 원하는 위치로 스크롤



## 참고
https://poiemaweb.com/snippet-shape : 일부 아이콘 라이브러리로?
https://blog.bglee.me/posts/2018/babel-7-typescript/ : 타입스크립트는 어시스트로.


## QA
Q. 굳이 typescript 가 아닌 babel 사용이유?




## 커리큘럼
필요
= github 계정
- 깨끗한 노트북
- 아주 작은 기대


##제목
프론트엔드 업무환경 겉핣기.

## 간단하게 만들기




0. 큰그림
0-1 필요파일 다운로드  
=> 비주얼스튜디오코드 , jdk , 톰캣 , 노드 , git  
0-2 최종 업무환경 보여주기  
  
1. 무작정 따라하세요. 서버환경만들기  
1-1 비주얼스튜디오 환경설정  
=> 비주얼스튜디오코드 설치  
=> Java Extension Pack  
=> Java Server Page  
=> Javascript(ES6) code snippets  
=> Tomcat for java  
  
1-2 github(GUI)  
=> clone  
=> checkout(pull)  
=> commit  
=> push  
=> pull  
  
1-3 개발환경  
=> jdk 설치 (JAVA_HOME)  
=> tomcat 압축해제  
=> context 설정  
=> open browser  
  
2. 밑바닥 만들기  
  
2-1 nodejs  
=> nodejs 버전확인하기  
=> node -v  
=> npm init ==> package.json  
=> npm install ***  
=> npm uninstall ***  
=> npm install -g || -D  
=> npx 해보기  
  
2-2 gulp  
=> gulp란  
=> gulpfile.js 생성  
=> require  
=> gulp.task  
=> gulp.src  
=> gulp.dest  
=> gulp.watch  
  
3. CSS 업무환경 만들기  
  
3-1 SCSS  
=> SCSS 란  
=> sass , gulp-scss 설치(npm)  
=> scss to css 로 해보기  
  
3-2 CSS 자동화  
=> gulp-concat  
=> gulp-csso  
=> gulp-csscomb  
  
4. JS 업무환경 만들기 
  
4-1 typescript  
=> typescript 설치(npm)  
=> tsconfig.json 알아보기  
=> tsc 구문 사용  
  
4-2 babel  
=> babel 설치(npm)  
=> babel preset 설명(cli , core, env , typescript)  
=> .babelrc 만들기  
=> js to js 해보기(env)  
=> ts to js 해보기(env , typescript)  

4-3 JS자동화
=> gulp-babel
=> gulp-concat  
=> gulp-uglify

5. 별책부록
=> JSP 공략집