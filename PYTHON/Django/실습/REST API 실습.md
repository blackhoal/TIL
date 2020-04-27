# 1. 프로젝트 생성
> 프로젝트 생성(RESTAPI)  
~~~
$ pip install django  
$ django-admin startproject config .  
$ python manage.py migrate  
$ python manage.py createsuperuser  
~~~

# 2. 앱 생성
> 앱 생성  
~~~
$ python manage.py startapp booking  
~~~
> config/settings.py 수정  
>> ![R-1](https://user-images.githubusercontent.com/48504392/80343948-ba019700-88a1-11ea-8beb-4c5345eff2b1.png)  

# 3. 모델 생성
> booking/models.py 수정
>> ![R-2](https://user-images.githubusercontent.com/48504392/80343903-aeae6b80-88a1-11ea-8a46-f3530fd28053.png)  
>> - subscriber라는 예약자를 저장하고 예약 시작일, 종료일을 지정  
>> - 숙소 예약 앱을 가정하고 room은 예약 호수를 저장하며 note에는 비고 사항을 작성  
> 데이터베이스에 적용  
~~~
$ python manage.py makemigrations booking  
$ python manage.py migrate booking  
~~~

# 4. 관리자 페이지 등록
> booking/admin.py 수정  
>> ![R-3](https://user-images.githubusercontent.com/48504392/80343907-b0782f00-88a1-11ea-9827-704171b01227.png)  
> 관리자 페이지 접속 및 예약 객체 추가  
>> ![R-4](https://user-images.githubusercontent.com/48504392/80343910-b0782f00-88a1-11ea-8dfe-f223841df610.png)  

# 5. API 환경 생성
> djangorestframework 설치  
~~~
$ pip install djangorestframework==3.9.4  
~~~
> config/settings.py 수정  
>> ![R-5](https://user-images.githubusercontent.com/48504392/80343911-b110c580-88a1-11ea-90c4-1b7ebcfe2dac.png)  

# 6. Serializer 클래스 구현
> booking/serializers.py 생성  
>> ![R-6](https://user-images.githubusercontent.com/48504392/80343912-b1a95c00-88a1-11ea-81ca-0629e7ce0ea5.png)  
>> - BookingSerializer 클래스는 ModelSerializer를 상속받아 생성  
>> - 직렬화 클래스를 쉽게 생성할 수 있도록 돕는 클래스로 이해할 것  

# 7. 뷰 생성
> booking/views.py 수정  
>> ![R-7](https://user-images.githubusercontent.com/48504392/80343916-b241f280-88a1-11ea-956c-b8ff0e559c92.png)  
>> - 위와 같은 API뷰는 프레임워크에서 제공하는 제네릭 뷰를 상속받아 생성된 상태  

# 8. URL 연결
> booking/urls.py 생성  
>> ![R-8](https://user-images.githubusercontent.com/48504392/80343918-b2da8900-88a1-11ea-8bb1-90e3a14b9910.png)  
> config/urls.py 수정  
>> ![R-9](https://user-images.githubusercontent.com/48504392/80343920-b3731f80-88a1-11ea-8bc9-9a550b89f478.png)  

# 9. API 문서 생성
> API 자동 생성 앱 설치  
~~~
$ pip install django-rest-swagger==2.1.2
~~~
> config/settings.py의 앱에 rest_framework_swagger 추가
> config/urls.py 수정  
>> ![R-10](https://user-images.githubusercontent.com/48504392/80343921-b3731f80-88a1-11ea-91e5-97d0f92b2a5d.png)  
>> - get_swagger_view 메소드가 각종 API 뷰를 탐색하여 자동으로 문서를 생성하는 역할 수행  
> http://127.0.0.1:8000/api/doc/ 접속  
>> ![R-11](https://user-images.githubusercontent.com/48504392/80343922-b40bb600-88a1-11ea-942f-18e9274044a0.png)  
>> - booking의 API 목록 확인 및 메서드 클릭 시 실제 테스트 가능  

# 10. 인증 추가
> config/settings.py에 rest_framework.authtoken 앱 추가  
> 데이터베이스 migrate  
~~~
$ python manage.py migrate
~~~
> booking/views.py에서 기능을 적용할 뷰에 대한 코드 수정  
>> ![R-12](https://user-images.githubusercontent.com/48504392/80343925-b4a44c80-88a1-11ea-80f0-312c2ab9e444.png)  
>> - authentication_classes : 어떤 인증 방식으로 이용 가능한지 설정  
>> - permission_classes : 인증을 해야만 볼 수 있는 옵션 추가  
>> - 추가된 코드로 인해 인증 토큰이 없을 경우 수정 기능의 API들은 테스트가 불가능  
> 관리자 페이지에서 키 발급  
>> ![R-13](https://user-images.githubusercontent.com/48504392/80343927-b53ce300-88a1-11ea-8bc2-edeeed22a9b7.png)  
>> ![R-14](https://user-images.githubusercontent.com/48504392/80343929-b53ce300-88a1-11ea-97c6-a75c2dec0870.png)  
>> ![R-15](https://user-images.githubusercontent.com/48504392/80343931-b5d57980-88a1-11ea-9f0c-ed02759135fc.png)  
>>- 토큰을 사용하려면 헤더 정보에 Authentication:Token [발급된 키] 형태로 토큰 정보를 전달 필요  
> config/urls.py 수정  
>> ![R-16](https://user-images.githubusercontent.com/48504392/80343933-b66e1000-88a1-11ea-99b2-690b056cb17e.png)  
>> - 토큰을 관리자 페이지로 발급하는 것뿐만 아니라 이미 가입한 유저에 한해 토큰을 발급 가능하도록 뷰를 추가  

# 11. 문서에서 Token 기능 사용
> config/settings.py 수정  
>> ![R-17](https://user-images.githubusercontent.com/48504392/80343934-b706a680-88a1-11ea-8a47-070ec38bbb01.png)  
>> - SECURITY_DEFINITIONS : 사용자가 Authorize 버튼을 클릭하여 Token 등의 API 키를 입력 가능  
>> - LOGIN_URL과 LOGOUT_URL을 통해 문서상에서 로그인 및 로그아웃 수행이 가능  
> 결과 확인  
>> ![R-18](https://user-images.githubusercontent.com/48504392/80343939-b79f3d00-88a1-11ea-8d6f-87c60960e229.png)  
>> ![R-19](https://user-images.githubusercontent.com/48504392/80343941-b79f3d00-88a1-11ea-8b55-5ff070edaa5a.png)  

# 12. 추가 권한 설정
> booking/permissions.py 생성  
>> ![R-20](https://user-images.githubusercontent.com/48504392/80343944-b837d380-88a1-11ea-97b8-3c8731e1b5b9.png)  
>> IsOwnerOnly 클래스 : 각각 소유자나 관리자인 경우에만 사용 가능하도록 하는 권한  
>> IsOwnerOrReadOnly 클래스 : 소유자나 관리자가 아닌 경우 GET이나 HEAD 같은 조회 기능만 가능하도록 하는 권한  
> booking/views.py 수정  
>> ![R-21](https://user-images.githubusercontent.com/48504392/80343946-b8d06a00-88a1-11ea-89d8-9745447844ee.png)  
>> - BookingDetail 뷰는 기존에는 토큰이 있는 사용자만 조회 가능했지만 추가로 소유자가 아닐 경우 수정이 불가능하도록 변경  


