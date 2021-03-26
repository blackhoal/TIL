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
3. 위치 x, 위치 y 입력
`x, y = map(int, input().split())`

`distance = y - x` # 총 거리
cnt = 0 # 이동 횟수
mv = 1 # 한 번의 이동에 이동 가능한 거리
mv_sum = 0 # 이동한 거리의 합
while mv_sum < distance : # 이동한 거리의 합이 총 거리보다 작을 때까지 반복
cnt += 1
mv_sum += mv # 
