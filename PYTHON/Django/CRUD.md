# 1. 프로젝트 생성 
## (venv) $ django-admin startproject minitutorial
~~~
minitutorial/        # 프로젝트의 루트 디렉토리입니다. 디렉토리이름은 변경하셔도 됩니다.
├── manage.py       # CLI에서 장고 프로젝트의 다양한 기능들을 사용할 수 있게 해주는 유틸리티입니다.
└── minitutorial/   # 실제 프로젝트 디렉토리입니다. 프로젝트의 설정을 할 수 있으며, 파이썬 패키지로 사용됩니다.
    ├── __init__.py # 파이썬 패키지에 필수로 들어있는 초기화 파일입니다. 프로젝트를 패키지로 불러올 때 가장 먼저 실행되는 스크립트입니다.
    ├── settings.py # 프로젝트 설정파일입니다.
    ├── urls.py     # 웹 url들을 view와 매칭시켜주는 파일입니다.
    └── wsgi.py     # WSGI 호환 웹 서버로 서비스할 때 실행되는 시작점입니다.
~~~  
참고
https://swarf00.github.io/2018/11/23/setup-project.html#2-%EA%B2%8C%EC%8B%9C%ED%8C%90-%EC%95%B1-%EC%83%9D%EC%84%B1
