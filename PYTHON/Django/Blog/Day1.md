# 장고 기초
## 1. 가상환경 활성화/
~~~
$ venv\Scripts\activate.bat
$ deactivate.bat
~~~

## 2. gitignore 생성
> .gitignore
~~~
venv/
.idea/

*.pyc

db.sqlite3

migrations/
~~~

## 3. 프로젝트 생성
~~~
$ django-admin startproject 프로젝트명 .
$ python manage.py migrate
$ python manage.py makemigrations 
~~~

## 4. blog 앱 생성
> settings.py - INSTALLED_APPS 부분에 'blog' 추가  
> author = models.Foreignkey(User, on_delete=True)  
>> 사용자 객체가 삭제될 시 작성한 Post도 함께 삭제될 것임을 명시  
> initial.py를 git으로 관리하지 않도록 하기 위해 admin.py에 아래 구문 추가  
~~~
from .models import Post

admin.site.register(Post)
~~~

## 5. Django 지역(시간, 언어 등) 세팅
> settings.py
~~~
LANGUAGE_CODE = 'ko-kr'

TIME_ZONE = 'Asia/Seoul'
~~~
> def __str__의 역할  
>> Post 객체의 출력을 어떻게 표현할 것인지를 암시  
~~~python
def __str__(self):
        return '{} :: {}'.format(self.title, self.author)
~~~

## 6. MTV 구조 생성
> my_site_prj\urls.py 수정
~~~python
from django.urls import path, include # 추가

urlpatterns = [
    path('blog/', include('blog.urls')), # 추가
    path('admin/', admin.site.urls),
]
~~~
> urls.py를 복사하여 blog 앱에 붙여넣기 후 수정
~~~python
# blog\urls.py
from django.urls import path, include
from . import views

urlpatterns = [
    path('blog/', views.index),
]
~~~
> blog\views.py 수정  
~~~python
from django.shortcuts import render

def index(request):
    return render(
        request,

    )
~~~
> blog\templates\blog 폴더 구조 생성 후 index.html 생성  

> views.py 수정  
~~~python
from django.shortcuts import render
from .models import Post # 추가

def index(request):
    posts = Post.objects.all() # 추가
    return render(
        ~
        {
            'posts': posts, # 추가
        }
    )
~~~

> index.html 수정  
~~~
~
<body>
    ~
    {% for p in posts %}
        <h3>{{ p.title }}</h3>
        <h4>{{ p.created }} by {{ p.author }}</h4>
        <p>{{ p.content }}</p>
    {% endfor %}
</body>
~
~~~
![6](https://user-images.githubusercontent.com/48504392/79460629-0e01b580-8030-11ea-8cfb-b2706fb8dfc7.png)  

## 7. FBV에서 CBV로 변환(리스트뷰 적용)  
> blog\views.py 코드 수정  
~~~python
from .models import Post
from django.views.generic import ListView # 추가

class PostList(ListView): # 기존의 def index() 구문 삭제 후 추가
    model = Post
~~~

> blog\urls.py 코드 수정  
~~~
urlpatterns = [
    path('', views.PostList.as_view()),
]
~~~
> index.html을 post_list로 이름 변경 후 코드 수정  
~~~
<body>
    {% for p in object_list %} # posts -> object_list
    ~
</body>
~~~
> 작성일이 최신인 Post부터 출력이 되도록 views.py 코드 수정  
~~~python
class PostList(ListView):
    ~
    def get_queryset(self): # 추가
        return Post.objects.order_by('-created') 
~~~