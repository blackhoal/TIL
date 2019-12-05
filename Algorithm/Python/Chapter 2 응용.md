# [문제 1] n까지의 합을 재귀호출문으로 구현
~~~python
def ch2_sum(n):
    if n <= 1:
        return 1
    return n + ch2_sum(n-1)

ch2_sum(10)
~~~

# [문제 2] 최댓값 출력을 재귀호출문으로 구현
~~~python
list = [17, 92, 18, 33, 58, 7, 33, 42]

def ch2_max(a, n):
# a : 리스트
# n : 리스트 내 요소의 수(len(a))
    if n == 1:
        return a[0]
    max_n_1 = ch2_max(a, n-1)
    if max_n_1 > a[n-1]:
        return max_n_1
    else:
        return a[n-1]

ch2_max(list, len(list))
~~~

# [문제 3] 피보나치 수열을 재귀호출문으로 구현
~~~python
def fibo(n):
    if n <= 1:
        return n
    return fibo(n-2) + fibo(n-1)
~~~

