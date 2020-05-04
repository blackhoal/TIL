# 데이터 연결
## 1. 시작 화면
> ![200502_1](https://user-images.githubusercontent.com/48504392/80863793-85367b00-8cb9-11ea-81d5-4b81cf4429f4.png)  
## 2. 엑셀 불러오기
> ![200502_2](https://user-images.githubusercontent.com/48504392/80863795-85cf1180-8cb9-11ea-8360-5ae2f6b287d4.png)  
## 3. 서버 불러오기
> - 원하는 항목이 없을 경우 기타 데이터베이스(ODBC)를 클릭하여 연결  
> ![200502_3](https://user-images.githubusercontent.com/48504392/80863789-84054e00-8cb9-11ea-9701-97bbb5ebd794.png)  

# 데이터 준비
## 1. 데이터 테이블 등록
> - 청구 프로젝트 / 프로젝트 / 데이터 집합 설정 후 원하는 테이블을 작업 공간으로 끌어오기  
> ![200502_6](https://user-images.githubusercontent.com/48504392/80967289-112edb00-8e51-11ea-8307-7d2ef17f38f3.png)  
> - '지금 업데이트' 버튼을 누를 경우 Row 목록이 1000개까지 출력되어 작업 전 원하는 데이터가 들어있는지 확인 가능
> ![200502_7](https://user-images.githubusercontent.com/48504392/80967290-12600800-8e51-11ea-8409-c0caf544febe.png)  
> ![200502_8](https://user-images.githubusercontent.com/48504392/80967291-12f89e80-8e51-11ea-8a67-0f6803749d6a.png)  
## 2. 데이터 추가하기
> ![200502_4](https://user-images.githubusercontent.com/48504392/80967283-0ecc8100-8e51-11ea-9f90-3477c06446d3.png)  
> ![200502_5](https://user-images.githubusercontent.com/48504392/80967288-112edb00-8e51-11ea-8859-4b06d44f80f2.png)  
## 3. 데이터 간의 조인
> - 서로 호출한 연결이 달라도 데이터 간의 조인 가능  
> ![200502_9](https://user-images.githubusercontent.com/48504392/80967296-13913500-8e51-11ea-9a6c-8af8568fe7b5.png)  
> ![200502_10](https://user-images.githubusercontent.com/48504392/80967298-1429cb80-8e51-11ea-8b48-c1086f93c8df.png)  
> - 원하지 않는 컬럼의 경우 숨기기 기능 수행  
> ![200502_11](https://user-images.githubusercontent.com/48504392/80967300-1429cb80-8e51-11ea-8539-ae72d87382ab.png)  
## 4. 연결 라이브 VS 추출
> - 사용자가 사용하는 DB의 종류에 따라 연결 방식 선택  
> ![200502_12](https://user-images.githubusercontent.com/48504392/80967302-14c26200-8e51-11ea-9ac5-c563946c604e.png)  
~~~
라이브 연결
- 작업에 대해 항상 사용자가 DB로 쿼리를 직접 전송하는 방식
장점 : 신속한 업데이트 가능
단점 : DB 부하 ↑ / 상대적으로 늦은 처리 속도

추출 연결
- DB의 현재 상태를 스캔하여 추출한후 스캔본을 사용자의 로컬 PC에 저장하는 방식
장점 : 빠른 처리 속도 / 모든 종류의 태블로 기능 사용 가능
단점 : 상대적으로 느린 업데이트 주기
~~~
## 5. 데이터 원본 필터
> ![200502_13](https://user-images.githubusercontent.com/48504392/80967306-155af880-8e51-11ea-9acd-f9feb101bbef.png)  
> ![200502_14](https://user-images.githubusercontent.com/48504392/80967312-15f38f00-8e51-11ea-9048-74a9b68b2c4c.png)  
> ![200502_15](https://user-images.githubusercontent.com/48504392/80967314-1724bc00-8e51-11ea-8dc9-a32d1553aedd.png)  
> ![200502_16](https://user-images.githubusercontent.com/48504392/80967315-17bd5280-8e51-11ea-9294-86531be3cc2b.png)  
> ![200502_17](https://user-images.githubusercontent.com/48504392/80967317-17bd5280-8e51-11ea-898b-9e865d681ead.png)  

# 데이터 작업
## 1. 개요
> - 태블로는 데이터 호출 시 자체 판단 기준으로 모든 필드를 차원(관점)과 측정값(수치)으로 구분  
## 2. 선반
> - 행 선반 / 열 선반  
> - 초록색 : 연속형(continuous) / 파란색 : 불연속형(discrete)  
## 3. 기능
> - 워크시트 : 하나의 작업 공간  
> - 대시보드 : 몇 개의 시트를 조합하여 구성하는 하나의 화면  
> - 스토리 : 시트와 대시보드가 조합된 스토리 라인(PPT와 유사)  
> - 데이터 소스 추가 : 데이터 연결창으로 가지 않고 새로운 데이터 연결  
## 4. Undo & Redo
~~~
[Undo]
Mac : cmd + z / PC : ctrl + z
[Redo]
Mac : cmd + shift + z / PC : ctrl + y
~~~
