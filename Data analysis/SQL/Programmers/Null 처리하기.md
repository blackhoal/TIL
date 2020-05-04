# 문제
> ![200504_13](https://user-images.githubusercontent.com/48504392/80968322-b8604200-8e52-11ea-9db5-94d37dbdce36.png)  

# 코드
~~~mysql
SELECT ANIMAL_TYPE, IFNULL(name, 'No name') AS NAME, SEX_UPON_INTAKE FROM ANIMAL_INS ORDER BY ANIMAL_ID;
~~~

# 필기
~~~
- ifnull(name, 'No name') : name이 null값일 경우 해당 값을 'No name'으로 변환
~~~
