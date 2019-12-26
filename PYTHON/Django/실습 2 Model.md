# 1. 모델 설계
~~~
1. 게시판에는 게시글의 목록이 나열
2. 게시글에는 제목과 작성자가 표시
3. 게시글을 클릭 시 상세화면으로 이동되며 제목, 내용, 작성일이 출력됨
4. 게시글 상세화면에서 수정하기 버튼을 누르면 수정 화면으로 이동
5. 게시글 수정화면에서 저장하기 버튼을 누르면 수정된 내용이 저장되고 게시판으로 이동
6. 게시글 수정화면에서 삭제하기 버튼을 누르면 게시글이 삭제되고 게시판으로 이동
7. 게시판에서 새글쓰기 버튼을 누르면 새로운 게시글을 입력할 수 있는 화면이 출력
8. 게시글을 작성하고 저장하기 버튼을 누르면 수정된 내용이 저장되고 게시판으로 이동
~~~
→ `게시글(Article)` 모델을 생성하고 `제목(title)`, `내용(content)`, `작성자(author)`, `작성일(created_at)` 속성을 정의  

# 2. 모델 생성
## ① 모델 정의(bbs/models.py)
~~~python
from django.db import models

class Article(models.Model):
    title      = models.CharField('제목', max_length=126, null=False)
    content    = models.TextField('내용', null=False)                  
    auther     = models.CharField('작성자', max_length=16, null=False) 
    created_at = models.DateTimeField('작성일', auto_now_add=True)     
~~~
ⓐ models 모듈  
장고의 모델과 관련된 모든 기능이 구현된 모듈  
위의 모델 클래스(Article)는 models.Model 클래스로부터 상속을 받음  

ⓑ 데이터 타입  
`CharField` : sql에서의 varchar 자료형으로 변환 / 글자수 제한 있는 문자열 데이터를 저장  
`TextField` : sql에서의 text 자료형으로 변환 / 길이수 제한 없는 문자열 데이터를 저장  
`DateTimeField` : sql에서의 datetime 자료형으로 변환 / 날짜와 시간이 utc 시간으로 저장  
## ② 앱 등록(settings.py)
~~~python
# 생략
INSTALLED_APPS = [
    'bbs',                         # 등록할 앱의 이름
    'django.contrib.admin',        # 장고 Admin 앱
    'django.contrib.auth',         # 장고 인증 앱
    'django.contrib.contenttypes', # 다양한 종류의 모델 데이터를 관리할 수 있게 도와주는 앱
    'django.contrib.sessions',     # 클라이언트 정보를 세션에서 관리하도록 하는 프레임워크
    'django.contrib.messages',     # 컨트롤러에서 발생한 정보를 뷰에서 쉽게 접근하도록 연결하는 프레임워크
    'django.contrib.staticfiles',  # html, css, js 파일등의 정적파일들을 관리해주는 프레임워크
]
# 생략

TIME_ZONE = 'Asia/Seoul' # 시간대를 서울로 변경

USE_TZ = False           # 기본 시간대(UTC)를 사용 X

# 생략
~~~
## ③ 데이터베이스 설정(settings.py)
~~~
(venv) minitutorials> python manage.py makemigrations

Migrations for 'bbs':
  bbs\migrations\0001_initial.py
    - Create model Article
~~~
~~~python
# bbs/migrations/0001_initial.py

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=126, verbose_name='제목')),
                ('content', models.TextField(verbose_name='내용')),
                ('auther', models.CharField(max_length=16, verbose_name='작성자')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='작성일')),
            ],
        ),
    ]
~~~
> - primary 키를 따로 설정하지 않을 경우 자동으로 id 필드가 생성되고 pk로 설정  
> - migration 파일은 가급적 수정 및 삭제 X → 수동으로 변경 시 스키마 동기화 작업에서 문제 발생 가능성 有  

# 3. Django Shell 환경에서 테스트
~~~
(venv) minitutorials> python manage.py shell
>>>
~~~
## ① 객체 생성
~~~shell
(venv) minitutorials> python manage.py shell
>>> from bbs.models import Article
>>> article = Article.objects.create(title='title 1', content='content 1', author='author 1', created_at='2019-12-26')
>>> print(article)
Article object (1)
>>> print('{} title: {}, content: {}, author: {} created_at: {}'.format(article.id, article.title, article.content, article.author, article.created_at))
1 title: title 1, content: content 1, author: author 1 created_at: 2019-12-26 17:51:59.305617
~~~
> `objects`
>> - Article 모델을 관리하며 Article 클래스가 상속 받은 models.Model 클래스에 기본적으로 내장  
>> - 해당 objects 매니저를 통해 CRUD 구문 실행  
## ② 객체 생성 방식 3가지
~~~shell
# 방법 1
# save 메소드를 수행하지 않을 경우 insert가 이루어지지 않음(☆)
>>> article.title = 'first' 
>>> article.content = 'django!'
>>> article.author = 'A'
>>> article.created_at = '2019-12-26'
>>> article.save() 

# 방법 2
# 숫자는 객체의 번호를 의미 / 만약 2번 객체를 지우더라도 새로 생성시 2번이 아닌 3번부터 생성
>>> article = Article(title = 'second', content = 'django!', author = 'B', created_at = '2019-12-26') 
>>> article.save()
Output : 
<Board: Board object (2)>   

# 방법 3 
# save 메소드가 필요 X / 즉각적으로 반영 및 저장까지 수행
>>> Article.objects.create(title = 'third', content='django!', author = 'C', created_at = '2019-12-26') 
>>> Article.objects.all() 
Output : 
<QuerySet [<Board: Board object (1)>, <Board: Board object (2)>, <Board: Board object (3)>]>
~~~
## ③ 데이터 표시 형식 변경
> - 위의 Article 객체의 `created_at` 필드가 입력한 값과 다르게 출력되는 상황 확인
>> → 매번 `string formatter`를 이용할 수 없으므로 models.py에서 `__str__`메소드를 오버라이딩
~~~python
# bbs/models.py

from django.db import models

class Article(models.Model):
    title      = models.CharField('타이틀', max_length=126, null=False)
    content    = models.TextField('내용', null=False)
    author     = models.CharField('작성자', max_length=16, null=False)
    created_at = models.DateTimeField('작성일', auto_now_add=True)

    def __str__(self):
        return '[{}] {}'.format(self.id, self.title)
~~~
## ④ 데이터 검색, 수정, 저장
~~~shell
>>> from bbs.models import Article
>>> article = Article.objects.get(id=1)     # id가 1인 Article 데이터 검색 / 없거나 2개 이상일 경우 에러 발생
>>> print(article)
<Article: [1] How to create a article>
>>> article.created_at = '2018-11-22 01:15' # 'time formatter' 형식의 문자열은 DateTimeField에서 자동으로 시간 데이터로 변환
>>> article.save()                          # 변경된 값 저장                                 
>>> article.created_at.strftime('%Y-%m-%d') # 변경된 created_at 값을 time fomatter를 이용해 출력 / but 에러 발생
---------------------------------------------------------------------------
AttributeError                            Traceback (most recent call last)
<ipython-input-16-560946d1936a> in <module>
----> 1 article.created_at.strftime('%Y-%m-%d')
AttributeError: 'str' object has no attribute 'strftime'

>>> article.refresh_from_db()               # DB로부터 새로 검색
>>> article.created_at.strftime('%Y-%m-%d') # 정상 출력
'2018-11-22'
~~~
> objects의 get 메소드를 통해 데이터를 검색
>> - SQL의 where에 해당되는 내용을 keyword argument로 전달  
>> - 데이터가 없거나 2개 이상이 발견될 경우 에러 출력  

> Queryset 객체
>> - 이터레이터의 모든 기능 사용 가능
>> - 검색 결과가 0인 경우 None 반환
~~~shell
>>> Article.objects.filter(author='swarf00').first() # author='swarf00'인 첫번째 레코드 검색
>>> Article.objects.filter(author='swarf00').last()  # author='swarf00'인 마지막 레코드 검색
>>> Article.first()                                  # Article 테이블의 첫번째 레코드 검색
>>> Article.last()                                   # Article 테이블의 마지막 레코드 검색
~~~
# 4. Admin 환경
## ① Administrator 등록
~~~shell
(venv) minitutorials> python manage.py createsuperuser
Username (leave blank to use 'swarf00'):
Email address: 
Password:
Password (again):
Superuser created successfully.
~~~
> - 위의 항목 4개를 적절하게 입력 시 admin 사이트에서 `username`과 `password`로 접속 가능
## ② Admin 사이트 접속
### ⓐ Django를 재시작 후 /127.0.0.1:8000/admin로 접속 및 superuser로 로그인
![2-1](https://user-images.githubusercontent.com/48504392/71472911-3b73ea80-2818-11ea-95b0-437ef22bf233.png)
### ⓑ 로그인 후 나오는 화면
![2-2](https://user-images.githubusercontent.com/48504392/71472926-429af880-2818-11ea-98e1-bd50acee1308.png)
### ⓒ Users 내의 정보 화면
![2-3](https://user-images.githubusercontent.com/48504392/71472933-4890d980-2818-11ea-9055-1180be03eb90.png)

## ③ Admin 사이트 등록
### ⓐ bbs/admin.py 수정
~~~python
from django.contrib import admin
from .models import Article

admin.site.register(Article) 
~~~
- `admin.site.register` 함수를 통해 Article 모델이 admin 사이트에 등록   
### ⓑ admin의 bbs앱에 Article 모델 추가 확인  
![2-4](https://user-images.githubusercontent.com/48504392/71473059-d5d42e00-2818-11ea-804b-d89a0e084ba1.png)  
### ⓒ Article 모델 내의 레코드 목록 확인
![2-5](https://user-images.githubusercontent.com/48504392/71473219-7aef0680-2819-11ea-947a-8f6ce3089fe0.png)
## ④ Admin 사이트 커스터마이징
### ⓐ bbs/admin.py 수정
~~~python
from django.contrib import admin
  
from .models import Article

@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'author', 'date_created') 
    list_display_links = ('id', 'title')                      # 상세페이지로 이동할 수 있는 필드 리스트

    def date_created(self, obj):                              # create_at 필드의 출력 형식을 변경해주는 메소드
        return obj.created_at.strftime("%Y-%m-%d")

    date_created.admin_order_field = 'created_at'             # date_created 컬럼 제목을 클릭시 어떤 데이터를 기준으로 정렬할 지 결정
    date_created.short_description = '작성일'                  # date_created 컬럼 제목에 보일 텍스트
~~~
- ArticleAdmin 클래스를 생성 후 @admin.register(Article) 구문의 데코레이터로 wrapping 수행
### ⓑ 변경된 요소 확인
![2-6](https://user-images.githubusercontent.com/48504392/71473527-a9b9ac80-281a-11ea-9d17-5b7a4789f792.png)  
> - 상세 페이지에서 작성일이 나타나지 않는 것을 확인
>> → `DateTimeField`의 `auto_now_add` 속성이 `True`로 설정되면 `editable` 속성이 자동으로 `False`로 설정되면서 나타나는 현상
### ⓒ bbs/models.py 수정
~~~python
from django.db import models
  
class Article(models.Model):
    title      = models.CharField('제목', max_length=126, null=False)
    content    = models.TextField('내용', null=False)
    author     = models.CharField('작성자', max_length=16, null=False)
    created_at = models.DateTimeField('작성일', auto_now_add=True)
    created_at.editable = True                                     # created의 editable 속성을 True를 설정

    def __str__(self):
        return '[{}] {}'.format(self.id, self.title)
~~~
### ⓓ 최종 변경 확인
![2-7](https://user-images.githubusercontent.com/48504392/71473729-9b1fc500-281b-11ea-91bf-901b87e5cd3a.png)
