# 1. Spring MVC
## 1-1. 스프링 MVC 기능의 특징
- 모델 2 아키텍처를 지원
- 스프링과 다른 모듈의 연계 용이
- 타일즈 / 사이트메시 같은 View 기술과의 연계 용이
- 태그 라이브러리를 통해 메시지 출력, theme 적용, 입력 폼을 쉽게 구현 가능
## 1-2. 스프링 MVC 구조
![21-1](https://user-images.githubusercontent.com/48504392/126863637-e6e4f145-77ec-4a10-9344-ef1a310c704d.png)  
## 1-3. 스프링 MVC 구성 요소
|요소명|설명|
|:--:|:--:|
|DispatcherServlet|클라이언트의 요청에 맞는 컨트롤러를 선택 및 전달하며 반환 결과를 View에 전달하여 알맞은 응답 생성|
|HandlerMapping|클라이언트가 요청한 URL을 처리할 컨트롤러를 지정|
|Controller|클라이언트의 요청을 처리 및 해당 결과를 DispatcherServlet에 전달|
|ModelAndView|컨트롤러가 처리한 결과 및 뷰에 대한 정보를 저장|
|ViewResolver|컨트롤러의 처리 결과를 전달할 뷰를 지정|
|View|컨트롤러의 처리 결과 화면을 생성|

## 1-4. 스프링 MVC 기능 수행 과정
![21-2](https://user-images.githubusercontent.com/48504392/126863638-2ee03d0a-3bf0-40ee-8f5f-9cd99c2e75c1.png)  
```
① 브라우저가 DispatcherServlet에 URL로 접근하여 해당 정보를 요청

② HandlerMapping에서 해당 요청에 대한 매핑된 Controller가 존재하는지 요청

③ 매핑된 Controller가 존재할 경우 처리를 요청

④ Controller가 클라이언트의 요청을 처리한 결과와 View의 이름을 ModelAndView에 저장하여 DispatcherServlet으로 반환

⑤ DispatcherServlet에서는 Controller에서 보내온 View의 이름을 ViewResolver로 보내 해당 View를 요청

⑥ ViewResolver는 요청한 View를 전송

⑦ View의 처리 결과를 DispatcherServlet으로 전송

⑧ DispatcherServlet에서 최종 결과를 브라우저로 전송
```
____
#

# Conference
[참조 1](https://www.youtube.com/watch?v=Kxy-OHCdbOY&list=PLuvImYntyp-s76lJiia8YfskDRAypeoyh&index=142)
