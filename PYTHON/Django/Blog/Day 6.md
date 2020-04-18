# TDD(Test Driven Development)

## 1. TDD에 대한 소개
> 현재까지는 구조가 단순하고 페이지가 한 두개였기에 간단한 과정으로도 제작 가능  
> 사진 6-1  
> 점점 페이지가 많아지고 구조도 점점 복잡해질 경우 지금과 같은 과정 적용이 Hard

## 2. TDD 개발 메커니즘
> Test Code 우선적으로 작성  
>> - 만들고 싶은 기능에 대한 Test 먼저 작성  
>> - 어떠한 것도 구현이 되어있지 않기에 Fail  
> 기능 구현  
>> - Test Code를 만족시킬 수 있도록 기능을 구현  
>> - 만족시키는 것을 우선적으로 집중하여 개발  
> Refactoring  
>> - 성능 향상, 재사용성 개선, 코드 가독성 개선 등의 작업 수행  
>> - 이미 자동화된 코드를 작성했으므로 test를 실행만 하면 완료  

## 3. Post List 페이지에 대한 테스트 코드 작성
> $ pip install beautifulsoup4  
> tests.py 수정  
사진 6-3  
>> - Client : 기존에는 개발자가 직접 브라우저를 열어 확인했는데, 클라이언트가 기존의 역할을 수행
> post_list.html 수정  
사진 6-2  
> admin 페이지에서 전체 Post 삭제
> tests.py 수정
사진 6-4
> post_list.html 수정  
사진 6-5
> admin 페이지에서 Post 객체 생성
사진 6-6
> test.py 수정
사진 6-7
> cmd로 test 수행
사진 6-8
>> - Post 객체를 생성했음에도 객체의 카운트가 0으로 인식되어 오류가 발생하는 이유 : 테스트를 수행 시마다 초기화된 환경에서 시작하기 때문  
>> -> 따라서 test_post_list 함수 내에 객체 생성 코드를 삽입  
> tests.py 수정
사진 6-9
사진 6-10
사진 6-11
>> - test 결과 fail 출력 확인  
> post_list.html 수정
사진 6-12
> Q. Post를 삭제 후 재생성했음에도 주소가 http://127.0.0.1:8000/blog/5/ 인 이유?  
>> - blog/pk/ 구조에서 pk는 기존의 객체를 삭제했어도 값은 초기화되지 않고 누적되어 진행  

## 4. Post Detail 페이지에 대한 테스트 코드 작성
> tests.py 수정  
>> create_post 함수 생성  
사진 6-13
>> test_post_list 함수 수정  
사진 6-14
> tests.py 수정  
사진 6-15
> models.py 수정  
사진 6-16
> Q. get_absolute_url()의 역할?  
>> - 페이지의 이동 방식 중 하나이며 모델 클래스 내 멤버함수로 사용함으로써 코드의 간결성을 강화  
>> 사진 6-17  
> tests.py 수정
사진 6-18
> 테스트 수행 시 Fail 확인
사진 6-19
> post_detail.html 수정
사진 6-20
> 테스트 수행 시 OK 확인
> tests.py 수정
사진 6-21
> tests.py 수정
사진 6-22
> post_detail.html 수정
>> - post_list.html의 navbar 부분을 body 태크 밑에 복사 및 붙여넣기
사진 6-23
