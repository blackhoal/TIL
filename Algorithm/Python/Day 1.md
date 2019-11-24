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
출력
5
3

5.0
3.0
~~~  
# 2. 1부터 n까지의 합  
## 1.
