# Relation
## 1. 1:N 관계
![1](https://user-images.githubusercontent.com/48504392/85196514-b1639500-b315-11ea-8432-914602cc04d4.png)
## 2. M:N 관계
![2](https://user-images.githubusercontent.com/48504392/85196515-b294c200-b315-11ea-942c-ff86d2363f68.png)

# 블로그 post에 카테고리 추가
> 1. models.py 수정  
>> 사진 8-1
> 2. tests.py 수정  
>> 사진 8-2
>> - get_or_create 메소드 : 아래의 요소들이 충족될 경우 get, 없을 경우 create  
>> - 왼쪽 description -> model의 Category에 있는 description  
>> - 오른쪽 description -> create_category 함수에서 인자로 받는 description  
> 3. DB 적용  
~~~
$ python manage.py makemigrations
$ python manage.py migrate
~~~
# 블로그 post_list와 post detail 페이지에 카테고리 추가
# 사소한 문제 해결(불필요한 내용 삭제, 카테고리 복수형 수정)
# Category 페이지 생성
