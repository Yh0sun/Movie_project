# NETCHA - 사용자 경험 기반 영화 추천 사이트

---

#### [ 배포주소 ](http://aa45ad59075e14ae2a4538dee06b9869-1628875909.ap-northeast-3.elb.amazonaws.com/)

#### [ 기획안 Notion ](https://ivy-feather-a16.notion.site/NETCHA-7aee2612452f4fabaf02ba541b3e78f8)

## 🖥 프로젝트 기획 배경

> Reactjs와 Django를 이용한 클라이언트 - 서버를 구성하고 이를 활용한 웹서비스 개발한다.
>
> Docker & Kubernetes를 활용하여 CI/CD파이프라인을 구성하고 배포한다.

## 🚀팀구성

![image](https://user-images.githubusercontent.com/98939242/169683773-fd3c0d93-a720-45ce-9956-e004f762dee8.png)

## 🚀역할

![image](https://user-images.githubusercontent.com/98939242/169683793-1c890eeb-42e3-45a0-a180-3a5abe792936.png)

## 개발스택

![image](https://user-images.githubusercontent.com/98939242/169683821-68a4befb-ca54-452b-aa21-cb6e078208a2.png)

## 프로젝트 상세 설명

1.  여러 사용자가 여러 영화에 평점과 리뷰를 생성할 수있습니다.

2.  해당 정보를 기반으로 사용자가 좋아할 수 있는 영화를 추천해줍니다.

3.  보고 싶은 영화 또는 좋아하는 영화는 좋아요 기능을 통해 저장해두었다가 바로 확인 할 수 있습니다.

4.  영화에 대한 정보가 부족하다면 페이지 내에서 Youtube 검색 기능을 통해 관련 영상을 검색할 수 있습니다.

5.  장르별로 영화를 구분하여 보고싶은 장르만 따로 골라 볼 수 있습니다.

6.  검색기능을통해 찾고싶은 영화가 있을 경우 쉽게 찾을 수 있습니다.

---

<B>ERD</B>
![image](https://user-images.githubusercontent.com/98939242/169684192-a5c55c8d-f841-4826-b769-e1c6000cf5d2.png)

<B>Flow chart</B>

![image](https://user-images.githubusercontent.com/98939242/169684225-6b82d81e-4afa-41e2-813e-6dcf6c05da40.png)

![image](https://user-images.githubusercontent.com/98939242/169684239-b4c91396-5372-46d0-a6e2-77640e387fed.png)

---

## 📚주요기능

- 로그인 / 회원가입 기능

  ![register login](https://user-images.githubusercontent.com/98939242/169698476-3de83ab1-50f1-4560-a6c8-faa29905b6ee.gif)
  <br>

- 메인페이지 / 배너 기능

  ![mainpage](https://user-images.githubusercontent.com/98939242/169698428-9f516959-a73b-40e3-999b-28f2558e7178.gif)
  <br>

- 장르 검색 기능

  ![search_action](https://user-images.githubusercontent.com/98939242/169698517-83b59864-8cd9-4b6c-ae28-d659fceb639d.gif)
  <br>

- 키워드 검색 기능

  ![search_keyword(좋아요까지한번에)](https://user-images.githubusercontent.com/98939242/169698526-002e7132-7538-4c64-8b25-0e1a5a433da0.gif)
  <br>

- 좋아요 기능 / 내가 찜한 페이지

  ![like](https://user-images.githubusercontent.com/98939242/169698402-4c17232b-f14a-4353-a0af-511dcbafb36b.gif)
  <br>

- 리뷰 작성 & 수정 & 삭제 기능

  ![review](https://user-images.githubusercontent.com/98939242/169698513-65ef7952-4460-4e90-aad7-99df83e4e037.gif)
  <br>

- 추천 기능

  ![recommend](https://user-images.githubusercontent.com/98939242/169698464-35e668b0-0595-48c8-ad80-7284be2332f3.gif)
  <br>

- Youtube 검색기능

  ![youtube_api](https://user-images.githubusercontent.com/98939242/169698533-8f6694e7-b909-4803-8b0a-d5443ad71533.gif)

* [기능별 API 설명](https://ivy-feather-a16.notion.site/NETCHA-MOVIES-ACCOUNTS-API-back-992e2f31830d4edcaefcce9c5bc53aaf)

---

## 📟 회고록

- 느낀점:
  앞서 배운 기술스택과 언어를 다 이해했다고 생각했는데 프로젝트를 하면서 내가 제대로 이해한 것이 아니였구나, 하는 생각이 들었습니다. 사소한 문법 오류로 시간을 많이 날리기도 하고, 서버에서 비어있는 값을 주어 프론트에서 로딩화면만 뜨기도 했는데 해결하여 다행이였습니다. 특히, 다 완성됬다고 생각했는데 쿠버네티스에 올린 장고와 리엑트가 서로 연결을 못하는 문제, rds의 한글 깨짐 문제가 발생했을 때는 정말 암담했지만 팀원분들과 계속 시도해본 끝에 해결할 수 있어 정말 뿌듯하였습니다. 협업의 중요성과 함께 많은 것을 배운 프로젝트였습니다. 같이 수고해주신 팀원분들 정말 감사합니다~!!
