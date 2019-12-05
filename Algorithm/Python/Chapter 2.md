# 1. 팩토리얼 출력
## 방법 1
~~~python
def fact(n):
  x = 1
  for i in range(1, n + 1):
    x = x * i
  return x
~~~
## 방법 2 - 재귀호출 이용
~~~python
def fact_2(n):
  if n <= 1:
    return 1
  return n * fact_2(n-1)
~~~
1! = 1                   → 1!  
2! = 2 * 1               → 2 * 1!  
3! = 3 * (2 * 1)         → 3 * 2!  
4! = 4 * (3 * 2 * 1)     → 4 * 3!  
…  
n! = n * (n-1) * … * 1   → n * (n-1)!  

# 2. 최대공약수 출력
## 방법 1
~~~python
def gcd(a,b):
  x = min(a,b)
  while True:
    if a % x == 0 and b % x == 0 :
      return x
    x = x -1
~~~
## 방법 2 - 유클리드 방식
~~~python
def gcd_2(a,b):
  if b == 0 :
    return a
  return gcd_2(b, a % b)
~~~
- a와 b의 최대공약수는 'b'와 'a를 b로 나눈 나머지(a % b)'의 최대공약수와 같다  
gcd_2(a, b) = gcd_2(b, a % b)  
- 어떤 수와 0의 최대공약수는 자기 자신  
gcd_2(n, 0) = n  

# 3. 하노이의 탑
## 방법 1
~~~python
def hanoi(n, from_pos, to_pos, aux_pos): 
#      n   : 이동할 원반의 수(Input) → 원반의 이동 순서 출력(Output)
# from_pos : 이동할 원반이 현재 있는 출발점
#   to_pos : 이동한 원반의 도착점
#  aux_pos : 이동 과정에서 사용할 보조 기둥

    if n == 1: # 종료조건에 해당되는 구문(원반이 1개일 때)
        print(from_pos, "->", to_pos)
        return
    
    hanoi(n - 1, from_pos, aux_pos, to_pos)
    print(from_pos, "->", to_pos)
    hanoi(n - 1, aux_pos, to_pos, from_pos)
    
print("n = 1") # 원반 1개를 1번 기둥에서 3번 기둥으로 이동(2번을 보조 기둥으로 사용)
hanoi(1,1,3,2)
print("")

print("n = 2") # 원반 2개를 1번 기둥에서 3번 기둥으로 이동(2번을 보조 기둥으로 사용)
hanoi(2,1,3,2)
print("")

print("n = 3") # 원반 3개를 1번 기둥에서 3번 기둥으로 이동(2번을 보조 기둥으로 사용)
hanoi(3,1,3,2)
print("")
~~~
## 알고리즘
- 원반이 1개일 경우 옮긴 후 종료(재귀호출의 종료조건)  
- 원반이 n개일 때  
① 1번 기둥에 있는 n개의 원반 중 n-1개를 2번 기둥으로 이동(3번을 보조 기둥으로 사용)  
② 1번 기둥에 남아 있는 가장 큰 원반을 3번 기둥으로 이동  
③ 2번 기둥에 있는 n-1개의 원반을 다시 3번 기둥으로 이동(1번을 보조 기둥으로 사용)  



