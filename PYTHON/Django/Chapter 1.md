# 1. 프로젝트 생성 
## (venv) $ django-admin startproject minitutorial
~~~
minitutorial/       # 프로젝트의 루트 디렉토리 / 이름 변경해도 상관 X
├── manage.py       # CLI에서 장고 프로젝트의 다양한 기능을 사용할 수 있게 하는 유틸리티
└── minitutorial/   # 실제 프로젝트의 디렉토리 / 프로젝트의 설정을 하는 역할 수행 및 파이썬 패키지로 사용 가능
    ├── __init__.py # 파이썬 패키지에 필수로 들어있는 초기화 파일 / 프로젝트를 패키지로 불러올 때 가장 먼저 실행되는 스크립트입니다.
    ├── settings.py # 프로젝트의 설정파일
    ├── urls.py     # 웹의 url과 view를 매칭시켜주는 파일
    └── wsgi.py     # WSGI 호환 웹 서버 / 서비스할 때 실행되는 시작점
~~~  

# 2. 게시판 앱 생성
## (venv) $ python manage.py startapp bbs
~~~
bbs/
├── __init__.py      # 앱 패키지 초기화 스크립트
├── admin.py         # 장고 admin 설정 파일/ admin에 등록된 모델은 장고에서 자동 생성하는 admin 페이지에서 관리 가능
├── apps.py          # 앱 설정 파일
└── migrations/      # DB의 마이그레이션 디렉토리
    ├── __init__.py  # 마이그레이션 패키지 초기화 스크립트
    ├── models.py    # 앱 모델 파일 / 게시판의 모든 데이터를 저장할 데이터베이스를 장고 ORM을 통해 모델화하는 기능
    ├── tests.py     # 앱 내의 여러 기능을 테스트하는 기능을 구현하는 파일
    └── views.py     # 앱의 화면(template)과 데이터(model) 사이에서 사용자의 요청을 처리하여 모델에 저장하고, 모델에 저장된 데이터를 화면에 전달하는 역할
~~~  
migrations 디렉토리  
- Django의 ORM은 모델 스키마가 변화할 때마다 migration 파일을 생성하고, 이를 통해 스키마를 업데이트  
- migration 파일을 통해 협업자들과 함께 데이터베이스의 스키마를 동기화하는 것이 가능  

# 3. 앱 테스트
## bbs/view.py
~~~python
from django.http import HttpResponse

def hello(request):                     # 핸들러 선언 / 언제나 첫번째 인자는 request 객체
    return HttpResponse('Hello world.') # 핸들러의 반환값 / HttpResponse 함수를 통해 문자열을 반환
~~~
## minitutorial/urls.py
~~~python
from django.contrib import admin
from django.urls import path

from bbs.views import hello          # 작성한 핸들러를 사용할 수 있도록 import

urlpatterns = [
    path('hello/', hello),           # 'hello/'라는 경로로 접근했을 때 hello 핸들러가 호출
    path('admin/', admin.site.urls),
]
~~~
urls.py
- url과 핸들러를 연결해주는 설정파일  
- url을 통해 사용자의 요청이 어느 핸들러로 전달되어야 하는지를 결정하기 때문에 url 라우터로 지칭  
- urlpatterns라는 리스트 객체에 path함수의 결과값을 넣어서 사용  
- path 함수는 총 4개의 인자를 받을 수 있으며 route(url)와 view(handler)는 필수 입력 요소  
- route는 hello/처럼 평범한 url 방식으로도 표현되지만 url에 변수가 포함이 될 경우 <variable> 로 표현해서 핸들러에게 키워드인자 variable을 전달  

# 4. urls.py의 route 부분 응용
## bbs/views.py
~~~python
from django.http import HttpResponse

def hello(request, to):                         # request 파라미터 이후에 url패턴을 통해 전달받을 파라미터를 선언(to)
    return HttpResponse('Hello {}.'.format(to)) # 파라미터명(to)은 키워드인자이므로 url패턴에서 사용된 변수명(to)과 동일
~~~
## minitutorial/urls.py
~~~python
from django.contrib import admin
from django.urls import path

from bbs.views import hello

urlpatterns = [
    path('hello/<to>', hello),                   # hello 핸들러에 전달될 파라미터명과 동일(to)
    path('admin/', admin.site.urls),
]
~~~
## 결과
![1-2](https://user-images.githubusercontent.com/48504392/71462209-efb04980-27f5-11ea-9fb5-e7f8e8438642.png)  

# 참고  
https://swarf00.github.io/2018/11/23/setup-project.html#2-%EA%B2%8C%EC%8B%9C%ED%8C%90-%EC%95%B1-%EC%83%9D%EC%84%B1
