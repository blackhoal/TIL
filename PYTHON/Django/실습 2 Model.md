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
- primary 키를 따로 설정하지 않을 경우 자동으로 id 필드가 생성되고 pk로 설정  
- migration 파일은 가급적 수정 및 삭제 X → 수동으로 변경 시 스키마 동기화 작업에서 문제 발생 가능성 有  

# 3. Django Shell 환경에서 테스트
~~~
(venv) minitutorials> python manage.py shell
>>>
~~~
## ① 데이터 저장

~~~
(venv) minitutorials> python manage.py shell
>>> from bbs.models import Article
>>> article = Article.objects.create(title='title 1', content='content 1', author='author 1', created_at='2019-12-26')
>>> print(article)
Article object (1)
>>> print('{} title: {}, content: {}, author: {} created_at: {}'.format(article.id, article.title, article.content, article.author, article.created_at))
1 title: title 1, content: content 1, author: author 1 created_at: 2019-12-26 17:51:59.305617
~~~
`objects`
> - Article 모델을 관리하며 Article 클래스가 상속 받은 models.Model 클래스에 기본적으로 내장  
> - 해당 objects 매니저를 통해 CRUD 구문 실행  
## ② 데이터 표시 형식 변경
## ③ 데이터 검색, 수정, 저장

# 4. Admin 환경
~~~python
~~~
## ① Administrator 등록
## ② Admin 사이트 접속
## ③ Admin 사이트 등록
## ④ Admin 사이트 커스터마이징


