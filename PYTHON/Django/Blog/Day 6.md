# TDD(Test Driven Development)

## 1. TDD에 대한 소개
> - 현재까지는 구조가 단순하고 페이지가 한 두개였기에 간단한 과정으로도 제작 가능  
![6-1](https://user-images.githubusercontent.com/48504392/79629090-6f856980-8181-11ea-8743-19fed2aec1e5.png)  
> - 점점 페이지가 많아지고 구조도 점점 복잡해질 경우 지금과 같은 과정 적용이 Hard  

## 2. TDD 개발 메커니즘
> ① Test Code 우선적으로 작성  
>> - 만들고 싶은 기능에 대한 Test 먼저 작성  
>> - 어떠한 것도 구현이 되어있지 않기에 Fail  

> ② 기능 구현  
>> - Test Code를 만족시킬 수 있도록 기능을 구현  
>> - 만족시키는 것을 우선적으로 집중하여 개발  

> ③ Refactoring  
>> - 성능 향상, 재사용성 개선, 코드 가독성 개선 등의 작업 수행  
>> - 이미 자동화된 코드를 작성했으므로 test를 실행만 하면 완료  

## 3. Post List 페이지에 대한 테스트 코드 작성
> ① $ pip install beautifulsoup4  

> ② tests.py 수정  
![6-3](https://user-images.githubusercontent.com/48504392/79629093-71e7c380-8181-11ea-9e0a-909cdcbe7ac0.png)  
>> - Client : 기존에는 개발자가 직접 브라우저를 열어 확인했는데, 클라이언트가 기존의 역할을 수행  

> ③ post_list.html 수정  
![6-2](https://user-images.githubusercontent.com/48504392/79629091-714f2d00-8181-11ea-8e1a-739179fdff1b.png)  

> ④ admin 페이지에서 전체 Post 삭제  

> ⑤ tests.py 수정  
![6-4](https://user-images.githubusercontent.com/48504392/79629094-71e7c380-8181-11ea-91bf-5517c0d31c9d.png)  

> ⑥ post_list.html 수정  
![6-5](https://user-images.githubusercontent.com/48504392/79629095-72805a00-8181-11ea-9b03-5f05b60d62e5.png)  

> ⑦ admin 페이지에서 Post 객체 생성  
![6-6](https://user-images.githubusercontent.com/48504392/79629096-7318f080-8181-11ea-90f3-44037b6652eb.png)

> ⑧ test.py 수정  
![6-7](https://user-images.githubusercontent.com/48504392/79629097-73b18700-8181-11ea-9b05-bf29f96f24fc.png)  

> ⑨ cmd로 test 수행  
![6-8](https://user-images.githubusercontent.com/48504392/79629098-73b18700-8181-11ea-8b02-adbc2d5ffc26.png)  
>> - Post 객체를 생성했음에도 객체의 카운트가 0으로 인식되어 오류가 발생하는 이유 : 테스트를 수행 시마다 초기화된 환경에서 시작하기 때문  
>> -> 따라서 test_post_list 함수 내에 객체 생성 코드를 삽입  

> ⑩ tests.py 수정  
>> ![6-9](https://user-images.githubusercontent.com/48504392/79629099-744a1d80-8181-11ea-9cd5-08986f0c7316.png)  
>> ![6-10](https://user-images.githubusercontent.com/48504392/79629100-74e2b400-8181-11ea-9044-0be4621b5293.png)  
>> ![6-11](https://user-images.githubusercontent.com/48504392/79629101-757b4a80-8181-11ea-8a99-6d1133bc4ccc.png)  
>> - test 결과 fail 출력 확인  

> ⑪ post_list.html 수정  
![6-12](https://user-images.githubusercontent.com/48504392/79629102-757b4a80-8181-11ea-9124-95450f054c8e.png)  

> Q. Post를 삭제 후 재생성했음에도 주소가 http://127.0.0.1:8000/blog/5/ 인 이유?  
>> - blog/pk/ 구조에서 pk는 기존의 객체를 삭제했어도 값은 초기화되지 않고 누적되어 진행  

## 4. Post Detail 페이지에 대한 테스트 코드 작성
> tests.py 수정  
>> create_post 함수 생성  
![6-13](https://user-images.githubusercontent.com/48504392/79629104-7613e100-8181-11ea-949f-bc3bac0b230e.png)  
>> test_post_list 함수 수정  
![6-14](https://user-images.githubusercontent.com/48504392/79629105-76ac7780-8181-11ea-9ebc-a7ebbf3d7d05.png)  
> tests.py 수정  
![6-15](https://user-images.githubusercontent.com/48504392/79629107-77450e00-8181-11ea-8b3a-8d64c70a5c29.png)  
> models.py 수정  
![6-16](https://user-images.githubusercontent.com/48504392/79629108-77dda480-8181-11ea-92f1-0a38f6335262.png)  
> Q. get_absolute_url()의 역할?  
>> - 페이지의 이동 방식 중 하나이며 모델 클래스 내 멤버함수로 사용함으로써 코드의 간결성을 강화  
>> ![6-17](https://user-images.githubusercontent.com/48504392/79629110-78763b00-8181-11ea-881c-811ccd28304b.png)  
> tests.py 수정  
![6-18](https://user-images.githubusercontent.com/48504392/79629111-78763b00-8181-11ea-8bcd-f617ba4aaf19.png)  
> 테스트 수행 시 Fail 확인  
![6-19](https://user-images.githubusercontent.com/48504392/79629112-790ed180-8181-11ea-80da-af8540800cb7.png)  
> post_detail.html 수정  
![6-20](https://user-images.githubusercontent.com/48504392/79629114-79a76800-8181-11ea-8a7a-a466c7cd65a6.png)  
> 테스트 수행 시 OK 확인  
> tests.py 수정  
![6-21](https://user-images.githubusercontent.com/48504392/79629115-7a3ffe80-8181-11ea-8272-0726cca09971.png)  
> tests.py 수정  
![6-22](https://user-images.githubusercontent.com/48504392/79629116-7a3ffe80-8181-11ea-89ec-2d9cd76a5e4e.png)
> post_detail.html 수정  
>> - post_list.html의 navbar 부분을 body 태크 밑에 복사 및 붙여넣기  
![6-23](https://user-images.githubusercontent.com/48504392/79629117-7ad89500-8181-11ea-922b-fbfb38f0afa0.png) 
