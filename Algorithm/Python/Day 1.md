# 1. 절댓값 출력  
~~~
import math

def abs_sign(a):
    if a >= 0 :
        return a
    else :
        return -a
    
def abs_square(a):
    b = a * a
    return math.sqrt(b)

print(abs_sign(5))
print(abs_sign(-3))
print()
print(abs_square(5))
print(abs_square(-3))
~~~
~~~
[출력]
5
3

5.0
3.0
~~~  
# 2. 1부터 n까지의 합  
~~~
[작성 답안]
def sum_n(n):
    for a in n:
        b += a
    return b

sum_n(10)

실수 1 - b의 초기화 X
실수 2 - for문의 범위 설정 X
~~~
~~~
[정답 1]
def sum_n(n):
    b = 0                   
    for a in range(1, n+1): 
        b += a
    return b

sum_n(100)

[정답 2]
def sum_n(n):
    return n*(n+1)//2

sum_n(5)
~~~  

# 필기  
/은 실수형 나눗셈, //은 정수형 나눗셈에 사용  
