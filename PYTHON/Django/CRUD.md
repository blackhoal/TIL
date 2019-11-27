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
참고  
https://swarf00.github.io/2018/11/23/setup-project.html#2-%EA%B2%8C%EC%8B%9C%ED%8C%90-%EC%95%B1-%EC%83%9D%EC%84%B1
