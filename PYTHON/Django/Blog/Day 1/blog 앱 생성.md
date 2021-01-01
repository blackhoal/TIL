# blog 앱 생성
~~~
[cmd]

λ python manage.py startapp blog
~~~
> settings.py 수정 
> - INSTALLED_APPS 부분에 'blog' 추가  
~~~python
INSTALLED_APPS = [
    'blog',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]
~~~

# Post 모델 생성
> models.py
> - on_delete=True → 사용자 객체가 삭제될 시 작성한 Post도 함께 삭제될 것임을 명시
> - title(블로그 포스트의 제목), content(블로그 내용), created(블로그 포스트 작성시간), author(블로그 포스트 작성자)
~~~python
from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    title = models.CharField(max_length=30)
    content = models.TextField()
    created = models.DateTimeField()
    author = models.ForeignKey(User, on_delete=True)
~~~

# Admin에 추가
> admin 계정 생성
> - ID, Email, Password 순으로 입력
~~~
[cmd]
λ python manage.py createsuperuser
~~~
> initial.py를 git으로 관리하지 않도록 하기 위해 admin.py에 아래 구문 추가  
~~~
from .models import Post

admin.site.register(Post)
~~~


