# 개요
![1](https://user-images.githubusercontent.com/48504392/84117753-f9103400-aa6c-11ea-81a6-757d091c0073.png)  
1. 음식점에서 구매를 위해 줄을 서는 행위와 유사
2. 가장 먼저 넣은 데이터를 가장 먼저 꺼내는 구조(FIFO)
3. 멀티 태스킹을 위한 프로세스 스케줄링 방식 구현에 많이 사용

# 용어
- Enqueue : 큐에서 데이터를 넣는 기능
- Dequeue : 큐에서 데이터를 꺼내는 기능
- Overflow : 큐가 전부 채워진 상태에서 Enqueue할 때 발생
- Underflow : 큐가 전부 비워진 상태에서 Dequeue할 때 발생

# 파이썬 queue 라이브러리
- 파이썬에서 Queue(), LifoQueue(), PriorityQueue() 제공  
- 프로그램 작성 시 프로그램에 따라 적절한 구조 사용  
~~~
Queue(): 가장 일반적인 큐  
LifoQueue(): 나중에 입력된 데이터가 먼저 출력되는 구조이며 스택과 동일  
PriorityQueue(): 데이터마다 우선순위를 넣어 우선순위가 높은 순으로 데이터 출력  
~~~

# 파이썬으로 Queue 구현
~~~python
def enqueue(data):
    queue_list.append(data)
    
def dequeue():
    if len(queue_list) != 0:
        data = queue_list[0]
        del queue_list[0]
        return data
    else:
        print("Underflow 발생")
        
queue_list = []
for i in range(10):
    queue_list.append(i)
    

~~~
