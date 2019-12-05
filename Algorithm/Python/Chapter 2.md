# 1. 팩토리얼 출력
## 방법 1
~~~python
def fact(n):
  x = 1
  for i in range(1, n + 1):
    x = x * i
  return x
~~~
## 방법 2 - 재귀호출 이용
~~~python
def fact_2(n):
  if n <= 1:
    return 1
  return n * fact_2(n-1)
~~~
# 2. 최대공약수
## 방법 1
~~~python
def gcd(a,b):
  x = min(a,b)
  while True:
    if a % x == 0 and b % x == 0 :
      return x
    x = x -1
~~~
## 방법 2 - 유클리드 방식
~~~python
def gcd_2(a,b):
  if b == 0 :
    return a
  return gcd_2(b, a % b)
~~~
