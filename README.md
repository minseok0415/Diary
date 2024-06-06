# 나의 그림일기
---

<br>
<br>

## 프로젝트 소개
---
하루하루 간단하게 **그림일기**를 적고 관리할 수 있는 웹서비스입니다.

<br>

오늘 날짜의 일기를 제목, 그림, 내용으로 *작성* 할 수 있으며,

과거에 적은 일기를 *열람* , *수정* , *삭제* 가 가능합니다.

<br>
<br>

## 시작 가이드
---
**Requirements**
* Node.js v20.14.0
* npm 10.7.0

**Installation**
```
$ git clone https://github.com/minseok0415/Diary.git
$ cd Diary
```

**Setting**
```
$ npm install
$ node connect.js
$ npm run dev
```

<br>
<br>

## 기술 스택
---
**Environments**

<img src="https://img.shields.io/badge/visual studio code-007ACC?style=for-the-badge&logo=visual studio code&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

**Config**

<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">

**Development**

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white"> <img src="https://img.shields.io/badge/sqlite3-003B57?style=for-the-badge&logo=sqlite3&logoColor=white">

<br>
<br>

## 화면 구성
---
<table>
  <tr>
    <td>
      홈페이지
    </td>
    <td>
      일기 작성 페이지
    </td>
  </tr>
  <tr>
    <td>
      <img src="https://github.com/minseok0415/Diary/assets/102145504/88ba2f8a-8ef2-45ee-bcaa-90502644b652">
    </td>
    <td>
      <img src="https://github.com/minseok0415/Diary/assets/102145504/db607cf0-3dfa-4226-b7d7-a704e7f95b1d">
    </td>
  </tr>
  <tr>
    <td>
      일기 목록(달력) 페이지
    </td>
    <td>
      일기 세부 페이지
    </td>
  </tr>
  <tr>
    <td>
      <img src="https://github.com/minseok0415/Diary/assets/102145504/75858e1a-cfdf-43a6-aedf-b70920efc163">
    </td>
    <td>
      <img src="https://github.com/minseok0415/Diary/assets/102145504/e295cfe5-120c-4388-bf00-3449ce5390e0">
    </td>
  </tr>
</table>

<br>
<br>

## 주요 기능
---
### 일기 쓰기 기능

* 제목과 내용을 작성하여 하루를 기록할 수 있습니다.
* 그림을 그려 더욱 풍부한 표현을 할 수 있습니다.

### 그림 그리기 기능

* 펜 크기와 색상 설정이 가능합니다.
* 펜, 지우개 도구 전환이 가능합니다.
* 캔버스 지우기가 가능합니다.

### 일기 목록 기능

* 달력 형태의 일기 목록에서 일기 존재 여부를 확인할 수 있습니다.
* '오늘' 버튼을 눌러 빠르게 오늘 날짜로 이동할 수 있습니다.

### 일기 수정 및 삭제 기능

* 일기를 열람할 때 원한다면 해당 일기 내용을 수정 혹은 삭제할 수 있습니다.
