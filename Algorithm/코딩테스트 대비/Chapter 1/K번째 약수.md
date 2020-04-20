# 문제
~~~
두 개의 자연수 N과 K가 주어졌을 때, N의 약수들 중 K번째로 작은 수를 출력하는 프로그램을 작성하시오.
~~~
# 소스코드
~~~python
# 나의 답안
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
~~~python
# 선생님 답안
n, k = map(int, input().split())
cnt = 0
for i in range(1, n+1):
    if n%i == 0:
        cnt += 1
    if cnt == k:
        print(i)
        break
else:
    print(-1)
~~~
# 피드백
~~~
1. 선생님은 입력값 변수와 카운트용 변수만으로도 구현하였으므로 변수를 줄일 필요성 존재
2. count를 이용해서 5번째로 작은 값을 리스트의 인덱싱 없이 구한 것이 인상적
3. 처음 입력값을 선생님처럼 변수 2개에 나눠 초기화했다면 코드의 가시성이 더 유리했을 것으로  
~~~

