# ImportError: cannot import name 'six' from 'django.utils'
- Django의 현재 버전과 API의 호환 문제로 인해 발생하는 오류  
- Django의 버전을 다운그레이드하여 해결  

# TypeError : on_delete must be callable.
> on_delete 구문 삽입 과정에서 Django가 3.x 버전일 경우 발생하는 오류
> Django의 버전을 다운그레이드하거나 아래와 같이 수정하여 해결
~~~python
[Before]
author = models.ForeignKey(User, on_delete=True)

[After]
author = models.ForeignKey(User, on_delete=models.CASCADE)
~~~
