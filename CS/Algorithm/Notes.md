# 소수 구하기
## 코드
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

# 유클리드 기하학, 택시 기하학
## 코드
~~~python
# 반지름
r = int(input())

# 유클리드기하학 원의 넓이
print(r*r*math.pi)  
# 택시기하학 원의 넓이
print(2*r*r)        
~~~

# 피보나치 수열
## 코드
~~~python
def fib(n) : 
    if n <= 1 :
        return n
    return fib(n-1) + fib(n-2)
~~~

# 팩토리얼
## 코드
~~~python
def factorial(n) :
    result = 1
    if n > 0 :
        result = n * factorial(n-1)
    return result
~~~

# 하노이의 탑
## 코드 
~~~python

~~~
## 메커니즘
~~~
1. n-1개의 원반을 2번 위치로 이동
2. 가장 큰 원반의 위치를 1번에서 3번으로 이동
3. n-1개의 원반을 2번 위치에서 3번 위치로 이동
~~~

# 삽입 정렬
## 코드 
~~~python
def insertion_sort(arr):
    for end in range(1, len(arr)):
        for i in range(end, 0, -1):
            if arr[i - 1] > arr[i]:
                arr[i - 1], arr[i] = arr[i], arr[i - 1]
                
    return arr
~~~
## 메커니즘
~~~
1. 두 번째 인덱스부터 시작 / 현재 인덱스는 별도의 변수에 저장 / 비교 인덱스는 현재 인덱스 - 1로 설정
2. 별도로 저장한 삽입을 위한 변수와 비교 인덱스의 배열 값을 비교
3. 삽입 변수의 값이 더 작으면, 현재 인덱스로 비교 인덱스의 값을 저장 및 비교 인덱스를 -1하여 비교 반복
4. 삽입 변수의 값이 더 크면, 비교 인덱스 + 1에 삽입 변수를 저장
~~~

# 선택 정렬
## 코드 
~~~python
def selection_sort(arr):
    for i in range(len(arr) - 1):
        min_idx = i
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
        
    return arr
~~~
## 메커니즘
~~~
1. 정렬되지 않은 인덱스의 맨 앞에서부터, 이를 포함한 그 이후의 배열 값 중 가장 작은 값을 탐색
2. 가장 작은 값을 발견 시 해당 값을 현재 인덱스의 값과 swap
3. 다음 인덱스부터 1~2 과정 반복
~~~

# 버블 정렬
## 코드 
~~~python
def bubble_sort(arr):
    for i in range(len(arr) - 1, 0, -1):
        for j in range(i):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                
    return arr
~~~
## 메커니즘
~~~
1. 두 번째 인덱스부터 시작하며 현재의 인덱스 값과 이전의 인덱스 값을 비교
2. 이전 인덱스 값이 더 클 경우, 현재 인덱스와 swap
3. 현재 인덱스 값이 더 클 경우, 교환하지 않고 연속되는 다음 두 배열의 값을 비교
4. 1~3 과정을 (전체 배열의 크기 - 현재까지 순환한 바퀴의 수)만큼 반복
~~~