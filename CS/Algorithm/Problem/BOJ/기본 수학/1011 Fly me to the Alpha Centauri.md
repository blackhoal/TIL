# 문제
https://www.acmicpc.net/problem/1011

# 코드
~~~
t = int(input())

for _ in range(t):
    x, y = map(int,input().split())
    distance = y - x
    count = 0  
    move = 1  
    move_plus = 0 
    while move_plus < distance :
        count += 1
        move_plus += move 
        if count % 2 == 0 : 
            move += 1  
    print(count)
~~~

# 풀이
1. 테스트 케이스 수 입력  
`t = int(input())` 
2. 테스트 케이스 수 t만큼 반복  
`for _ in range(t) :`
3. 값 입력  
```
x, y = map(int, input().split())  # 위치 x, 위치 y
distance = y - x                  # 총 거리
cnt = 0                           # 이동 횟수
mv = 1                            # 한 번의 이동에 이동 가능한 거리
mv_sum = 0                        # 이동한 거리의 합
```
4. 이동한 거리의 합이 총 거리보다 작을 때만 반복
`while mv_sum < distance :`
5. 반복될 때마다 cnt(이동 횟수)에 1씩 추가, mv_sum(이동한 거리의 합)에 mv(한 번의 이동에 이동 가능한 거리)씩 추가
```
cnt += 1
mv_sum += mv
```
# Reference
https://ooyoung.tistory.com/91
