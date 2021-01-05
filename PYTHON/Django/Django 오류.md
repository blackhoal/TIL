# ImportError: cannot import name 'six' from 'django.utils'
- Django의 현재 버전과 API의 호환 문제로 인해 발생하는 오류  
- Django의 버전을 다운그레이드하여 해결  

# TypeError : on_delete must be callable.
- on_delete 구문 삽입 과정에서 Django가 3.x 버전일 경우 발생하는 오류
- Django의 버전을 다운그레이드하거나 아래와 같이 수정하여 해결
~~~python
[Before]
author = models.ForeignKey(User, on_delete=True)

[After]
author = models.ForeignKey(User, on_delete=models.CASCADE)
~~~

# TypeError: argument of type 'WindowsPath' is not iterable
- Django의 버전을 다운그레이드한 이후 makemigrations를 실행할 경우 발생하는 오류
- 아래와 같이 settings.py를 수정
~~~python
[Before]
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

[After]
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': str(BASE_DIR / 'db.sqlite3'),
    }
}
~~~

# A server error occurred.  Please contact the administrator.
- 템플릿의 유니코드 인코딩 문제  
- 참고 : https://practice-a-lot.tistory.com/107  
- Lib\site-packages\django\views\debug.py
~~~python
[Before]
def get_traceback_html(self):
    """Return HTML version of debug 500 HTTP error page."""
    with Path(CURRENT_DIR, 'templates', 'technical_500.html').open() as fh:
        t = DEBUG_ENGINE.from_string(fh.read())
    c = Context(self.get_traceback_data(), use_l10n=False)
    return t.render(c)
    
[After]
def get_traceback\_html(self): 
    """Return HTML version of debug 500 HTTP error page.""" 
    with Path(CURRENT_DIR, 'templates', 'technical_500.html').open(encoding="utf-8") as fh: 
        t = DEBUG\_ENGINE.from_string(fh.read()) 
    c = Context(self.get_traceback_data(), use_l10n=False) 
    return t.render(c) 
~~~

# Python Pillow failed with error code 1 in
- cmd로 pip 현재 버전 확인 및 설치 시도
~~~
$ python -m pip install --upgrade pip
$ python -m pip install --upgrade Pillow
~~~
