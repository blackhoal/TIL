# 문제
~~~
두 개의 자연수 N과 K가 주어졌을 때, N의 약수들 중 K번째로 작은 수를 출력하는 프로그램을 작성하시오.
~~~
# 작성 답안
~~~python
a = list(map(int, input("입력: ").split()))
list_1 = list()
result = 0
for i in range(1, a[0]+1):
    if a[0]%i == 0:
        list_1.append(i)
        
if len(list_1)<a[1]:
    result = -1
else:
    result = list_1[a[1]-1]

print(result)
~~~
# 피드백
~~~
~~~
