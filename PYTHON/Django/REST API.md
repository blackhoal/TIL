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
>> 사진 R-1  

# 3. 모델 생성
> booking/models.py 수정
>> 사진 R-2  
>> - subscriber라는 예약자를 저장하고 예약 시작일, 종료일을 지정  
>> - 숙소 예약 앱을 가정하고 room은 예약 호수를 저장하며 note에는 비고 사항을 작성  
> 데이터베이스에 적용  
~~~
$ python manage.py makemigrations booking  
$ python manage.py migrate booking  
~~~

# 4. 관리자 페이지 등록
> booking/admin.py 수정  
>> 사진 R-3  
> 관리자 페이지 접속 및 예약 객체 추가  
>> 사진 R-4  

# 5. API 환경 생성
> djangorestframework 설치  
~~~
$ pip install djangorestframework==3.9.4  
~~~
> config/settings.py 수정  
>> 사진 R-5  

# 6. Serializer 클래스 구현

# 7. 뷰 생성

# 8. URL 연결

# 9. API 문서 생성

# 10. 인증 추가

# 11. 문서에서 Token 기능 사용

# 12. 추가 권한 설정
