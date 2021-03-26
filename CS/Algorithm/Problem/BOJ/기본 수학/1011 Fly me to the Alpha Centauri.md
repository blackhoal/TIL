# 문제
https://www.acmicpc.net/problem/1011

# 코드
~~~
t = int(input())

for _ in range(t) :
    x, y = map(int, input().split())
    distance = y-x
    step = 1
    while True : 
        if distance > 2 :
            step += 1
            first = step ** 2 - step + 1
            last = step ** 2 + step
            if first <= distance and distance <= last :
                break
        else :
            step = 1
            first = 1
            last = 2
            break

    if first <= distance and distance <= step ** 2 :
        print(2*step-1)
    else : 
        print(2*step)
~~~

# 풀이

# Reference
https://ooyoung.tistory.com/91
