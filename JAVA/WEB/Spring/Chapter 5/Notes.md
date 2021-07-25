# 1. Data Access Layer
![22-1](https://user-images.githubusercontent.com/48504392/126869465-ff905eca-9efc-4f0b-9bf1-aa29b42355c0.png)  
## 1-1. 용어
- DAO
    - 실제로 DB에 접근하는 객체
    - Service와 DB를 연결하는 매개의 역할
    - 사용자가 직접 작성한 SQL문을 사용하여 DB에 접근 후 알맞은 CRUD API를 제공
- DTO
    - 계층간 데이터 교환을 위한 객체(자바빈즈)
    - 로직을 가지지 않는 순수한 데이터 객체
    - 필드와 Getter, Setter 및 Object 메소드만 존재
- ConnectionPool
    - DB와 상시 연결된 객체의 집합
    - DB와의 연결이 필요할 경우 해당 객체를 연결하며 사용 후 반납
    - DataSource에 의해 제어
- DataSource
    - ConnectionPool을 관리하는 객체
    - DB와 관계된 Connection 정보를 담고 있으며 bean으로 등록하여 인자로 전달
    - JDBC Driver vendor(Mysql, Oracle 등) 별로 여러 종류가 존재
    - ConnectionPool을 이용하여 연결 및 반납하는 작업 수행
- JDBC
    - DB에 접근할 수 있도록 자바에서 제공하는 API
    - 모든 자바의 데이터 접근 기술의 근원
    - DB에서 자료를 쿼리하거나 업데이트하는 방법을 제공
____
#

# 2. Spring JDBC
## 2-1. 스프링 JDBC 특징
- 기존 JDBC의 장점과 단순함을 유지하면서 단점을 보완
- 간결한 API를 포함하여 확장된 JDBC의 기능도 제공
## 2-2. JDBC 설정 프로세스
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
- 즉, 개발자는 DataSource 설정(①, ④) / SQL문 작성(③) / 결과에 대한 처리(⑦)만 작업하며 나머지는 Spring Framework가 처리
## 2-3. 스프링 JDBC 설정 파일
|파일|설명|
|:--:|:--:|
|web.xml|ContextLoaderListener를 이용해 빈 설정 xml 파일을 로드|
|action-servlet.xml|스프링에서 필요한 여러 가지 빈을 설정|
|action-dataSource.xml|스프링 JDBC 설정에 필요한 정보를 설정|
|jdbc.properties|데이터베이스 연결 정보를 저장|
|action-service.xml|서비스 빈 생성을 설정|
## 2-4. JDBC Template
![22-2](https://user-images.githubusercontent.com/48504392/126890174-e1f66c92-a5f1-408c-8d13-a09c464b00a2.png)  
### 2-4-1. 개요
- 대표적인 Spring JDBC 접근 방법 
- Plain JDBC API가 가진 문제점(코드 복잡화, 트랜잭션 처리, 코드의 반복 등)을 제거하여 Spring에서 제공하는 Class
### 2-4-1. 수행하는 작업 목록
- Connection 연결 및 종료
- Statement 준비 및 종료
- Statement 실행
- ResultSet Loop에 대한 처리
- Exception 처리 및 반환
- Transaction 처리
### 2-4-2. 기능
- 실행
    - INSERT UPDATE 같이 DB의 데이터에 변경이 발생하는 쿼리를 수행
- 조회
    - SELECT를 이용하여 데이터를 조회
- 배치 
    - 여러 개의 쿼리를 한 번에 수행
### 2-4-3. JDBC Template 클래스에서 제공하는 SQL 연관 메소드
![22-3](https://user-images.githubusercontent.com/48504392/126890445-3df1dc7b-3ec3-4228-a70e-1bb54036743d.png)  
____
#

# Conference
[참조 1](https://www.youtube.com/watch?v=9tkDze1Sfgc&list=PLuvImYntyp-s76lJiia8YfskDRAypeoyh&index=145)  
[참조 2](https://gmlwjd9405.github.io/2018/05/15/setting-for-db-programming.html)  
