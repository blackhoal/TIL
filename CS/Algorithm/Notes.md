1. 소수 구하기
~~~python
# 방법 1 - 차집합 = 에라토스테네스의 체를 이용한 소수의 집합 구하기
nums = {x for x in range(2, 10_001) if x == 2 or x % 2 == 1}
for odd in range(3, 101, 2):
    nums -= {i for i in range(2 * odd, 10_001, odd) if i in nums}
~~~

~~~python
# 방법 2 - 에라토스테네스의 체
def sieve(n) : 
    n += 1
    arr = [True] * n
    sqrt_num = int(n**0.5)

    for i in range(2, sqrt_num + 1):
        if arr[i] == True:
            for j in range(2*i, n, i):
                arr[j] = False

    return [i for i in range(2, n) if arr[i] == True ]
~~~

2. 유클리드 기하학, 택시 기하학
~~~python
# 반지름
r = int(input())

# 유클리드기하학 원의 넓이
print(r*r*math.pi)  
# 택시기하학 원의 넓이
print(2*r*r)        
~~~