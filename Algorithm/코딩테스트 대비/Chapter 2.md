# 문제
~~~
N개의 숫자로 이루어진 숫자열이 주어지면 해당 숫자열중에서 s번째부터 e번째 까지의 수 중
k번째로 작은 수를 출력하는 프로그램을 작성하세요.
~~~
# 소스코드
~~~python
# 나의 답안
t = int(input("테스트 케이스: ")) # 테스트 케이스 수

for i in range(t):
    n, s, e, k = map(int,input("입력:").split())
    list_2 = list(range(1, n+1))
    list_2_2 = list()
    result = 0

    if k<1 or s<1 or len(list_2)<e :
        result = -1
    else:
        list_2_2 = list_2[s-1:e]
        print(list_2)
        print(list_2_2)
        if len(list_2_2)<k:
            result = -1
        else:
            result = list_2_2[k-1]

    print("{}번째로 작은 수: ".format(k), result, '\n')
~~~
~~~python
# 선생님의 답안
T=int(input())
for t in range(T):
    n, s, e, k=map(int, input().split())
    a=list(map(int, input().split()))
    a=a[s-1:e]
    a.sort()
    print("#%d %d" %(t+1, a[k-1]))
~~~
# 피드백
~~~

~~~
