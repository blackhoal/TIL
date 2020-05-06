# 문제
![200506_1](https://user-images.githubusercontent.com/48504392/81183573-4458a200-8fea-11ea-8482-e100b0c4e91f.png)
# 코드
~~~mysql
SELECT ANIMAL_ID, NAME 
FROM ANIMAL_INS 
WHERE NAME LIKE '%EL%' AND ANIMAL_TYPE = 'Dog' 
ORDER BY NAME;
~~~
