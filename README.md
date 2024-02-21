# 샤넬 웹 사이트 제작 

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/jjub0217/beautiful.github.io/assets/62126380/a7f4fc95-c4de-4315-b7ea-82f15b3351fb#gh-dark-mode-only">
  <source media="(prefers-color-scheme: light)" srcset="https://github.com/jjub0217/beautiful.github.io/assets/62126380/7fccbee8-fc8a-4697-ac58-79a11e45253e#gh-light-mode-only">
  <img alt="logo" src="https://github.com/jjub0217/beautiful.github.io/assets/62126380/7fccbee8-fc8a-4697-ac58-79a11e45253e" width=100>
</picture>

----
이 프로젝트는 명품 브랜드 샤넬 웹 사이트 제작한 페이지입니다. <br>
2023.07.23 ~ 2023.08.03/2023.11.09,15,21,/2024.02.19,21 15일간 페이지 를 제작, 수정 및 배포하였습니다. <br>

## 프로젝트 기능
1. 반응형 웹 페이지.(레이아웃과 디자인이 다르다)
2. 사이트가 열리면서 페이지가 물결모양으로 아래에서 위로 올라가는 모양으로 보인다.
3. 스크롤을 위아래로 올림에 따라 이미지가 위 아래로 움직인다.  
4. 스크롤을 아래로 내림에 따라 이미지가 물결모양으로 나타난다.  
5. 스크롤을 아래로 내림에 따라 이미지가 나타난다.  
6. 특정 요소에 마우스포인터를 갖다 대면 마우스포인터 내의 화살표가 움직인다.
7. 특정 텍스트요소에 마우스포인터를 갖다 대면 텍스트가 위아래로 움직인다.
8. 좌우 화살표를 클릭함에 따라 컨텐츠들이 움직인다.
9. 물결모양으로 넘실대는 영역이 있다.


## 프로젝트 웹표준(W3C의 Markup Validation Service)
결과 : 0개 <br>
<img src="https://github.com/jjub0217/beautiful.github.io/assets/62126380/948ed539-706f-4526-baef-b76972e23b34" width=500> <br>


## 프로젝트 웹접근성
- Open-WAX 결과 : error 0
<img src="https://github.com/jjub0217/jjub0217.github.io/assets/62126380/2a1b47af-ad13-431d-8ad4-0a6b4cefb43a" width=500> <br>
- WAVE 결과: error 0
<img src="https://github.com/jjub0217/jjub0217.github.io/assets/62126380/10c5a0c3-358a-4556-b26c-7401a134d7ee" width=500>


## 기술 스택
![HTML5](https://img.shields.io/badge/HTML5-FE642E?style=flat-square&logo=HTML5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-2E9AFE?style=flat-square&logo=CSS3&logoColor=white)
![SASS](https://img.shields.io/badge/Sass-cc6699?style=flat-square&logo=sass&logoColor=white)
![Javascript](https://img.shields.io/badge/Javascript-gray?style=flat-square&logo=Javascript&logoColor=f7df1e)
![jQuery](https://img.shields.io/badge/jQuery-0769ad?style=flat-square&logo=jQuery&logoColor=white)
![Swiper](https://img.shields.io/badge/Swiper-gray?style=flat-square&logo=Swiper&logoColor=0080FF)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat-square&logo=GreenSock&logoColor=white)


## 포함된 자바스크립트 라이브러리
| Name      | License                          | Copyright                                 |
| --------- | -------------------------------- | ----------------------------------------- |
| Swiper.js | MIT License                      | 2019 Vladimir Kharlampidi                 |
| jQuery    | MIT License                      | OpenJS Foundation and jQuery contributors |
| GSAP      | Standard License, Club GreenSock | 3.12.2ver 2023 GreenSock LLC              |

## 개선점
- 웹접근성을 더욱 지키기 위해 텍스트와 배경간의 명도 대비, 고대비 점수를 높이기
- 스크롤에 따라 이미지가 움직이는 기능을 canvas 를 사용하여 구현하였지만, Lottie를 사용하여 구현해보고 싶었다.(하지만 Lottie 는 디자이너분이 제공해주시는 파일이므로 현재로써는 구현불가.)
- 메인페이지가 완전히 로딩이 완료 되기까지 로딩페이지로 카운트다운을 시각적으로 보여주는 부분을 gsap 을 하용하여 구현하였지만, 가상서버를 생성하여, 서버에 있는 데이터들을 다 불러오는 동안에 시각적으로 보이는 카운트다운을 구현하고 싶었다. (서버가 없었으므로 구현불가.)
- 독일어로 되어있는 웹 사이트를 클론코딩하느라 텍스트는 전부 같은 독일어를 가져왔지만, 독일어가 아니라 국내 웹 사이트로 브랜드 교체를 하고 싶었다.

## 연락처
프로젝트에 관한 문의나 버그 리포트는 아래 이메일로 연락주세요.
이메일: devel.jjub@gmail.com

