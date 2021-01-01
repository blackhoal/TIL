# Django 지역(시간, 언어 등) 세팅
> settings.py
~~~python
LANGUAGE_CODE = 'ko-kr'

TIME_ZONE = 'Asia/Seoul'
~~~
# Post 개선
> def __str__의 역할  → Post 객체의 출력을 어떻게 표현할 것인지를 암시  
~~~python
def __str__(self):
        return '{} :: {}'.format(self.title, self.author)
~~~
