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
├── __init__.py      # 앱 패키지 초기화 스크립트입니다.
├── admin.py         # 장고 어드민 설정파일입니다. 어드민에 등록된 모델은 장고에서 자동 생성하는 어드민 페이지에서 관리할 수 있습니다.
├── apps.py          # 앱 설정 파일입니다.
└── migrations/      # 데이터베이스 마이그레이션 디렉토리. 장고 ORM은 모델 스키마의 변화가 생길 때마다 migration 파일을 생성하고 이것을 통해 스키마를 업데이트 합니다. migration 파일을 통해 협업자들과 함께 데이터베이스의 스키마를 동기화할 수 있습니다.
    ├── __init__.py  # 마이그레이션 패키지 초기화 스크립트입니다.
    models.py        # 앱 모델 파일입니다. 게시판의 모든 데이터를 저장할 데이터베이스를 장고 ORM을 통해 모델화합니다.
    ├── tests.py         # 앱 내의 기능들을 테스트하는 기능을 구현하는 파일입니다.
    └── views.py         # 앱의 화면(template)과 데이터(model) 사이에서 사용자의 요청을 처리하여 모델에 저장하고, 모델에 저장된 데이터를 화면에 전달하는 역할을 합니다.
~~~  
# 참고  
https://swarf00.github.io/2018/11/23/setup-project.html#2-%EA%B2%8C%EC%8B%9C%ED%8C%90-%EC%95%B1-%EC%83%9D%EC%84%B1
