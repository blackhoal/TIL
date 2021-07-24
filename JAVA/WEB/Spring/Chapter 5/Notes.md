# 1. Spring JDBC
## 1-1. 스프링 JDBC 특징
- 기존 JDBC의 장점과 단순함을 유지하면서 단점을 보완
- 간결한 API를 포함하여 확장된 JDBC의 기능도 제공
## 1-2. JDBC 설정 프로세스
① 연결 파라미터 정의  
② 연결 오픈  
③ SQL 문 지정  
④ 파라미터 선언과 파라미터 값 제공  
⑤ Statement 준비와 실행  
⑥ 결과를 반복하는 루프 설정  
⑦ 각 이터레이션에대한 작업 수행  
⑧ 모든 예외 처리  
⑨ 트랜잭션 제어  
⑩ 연결, Statement, resultset 닫기   

- 개발자가 담당 : ① ③ ④ ⑦  
- 스프링이 담당 : ① ③ ④ ⑦ 외의 나머지  

## 스프링 JDBC 설정 파일
|파일|설명|
|:--:|:--:|
|web.xml|ContextLoaderListener를 이용해 빈 설정 xml 파일을 로드|
|action-servlet.xml|스프링에서 필요한 여러 가지 빈을 설정|
|action-dataSource.xml|스프링 JDBC 설정에 필요한 정보를 설정|
|jdbc.properties|데이터베이스 연결 정보를 저장|
|action-service.xml|서비스 빈 생성을 설정|

# Conference
[참조 1](https://www.youtube.com/watch?v=9tkDze1Sfgc&list=PLuvImYntyp-s76lJiia8YfskDRAypeoyh&index=145)  
[참조 2](https://gmlwjd9405.github.io/2018/05/15/setting-for-db-programming.html)  
