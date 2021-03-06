# 데큐(Deque)?
![3](https://user-images.githubusercontent.com/48504392/75150119-fc461500-5746-11ea-987c-ed3fb30a2618.jpg)  
- 스택과 큐의 장점을 합쳐 양방향에서 자료의 삽입 및 삭제가 가능한 자료구조
# 특징
- 

# 동작
- 

# 구현 1 - 기존의 큐를 활용한 데큐
~~~python
from queue import Queue

class Deque(Queue):
    def enqueue_back(self, item):
        self.items.append(item)
    
    def dequeue_front(self):
        value = self.items.pop(0)
        if value is not None:
            return value
        else:
            print("Deque is empty.")
        
if __name__ == "__main__":
    deque = Deque()
    print("데큐가 비었나요? {0}".format(deque.isEmpty()))
    print("데큐에 숫자 0~9를 추가")
    for i in range(10):
        deque.push(i)
    print("데큐의 크기: {0}".format(deque.size()))
    print("peek: {0}".format(deque.peek()))
    print("pop: {0}".format(deque.pop()))
    print("peek: {0}".format(deque.peek()))
    print("데큐가 비었나요? {0}".format(deque.isEmpty()))
    print()
    print("데큐: {0}".format(deque))
    print("dequeue: {0}".format(deque.dequeue_front))
    print("peek: {0}".format(deque.peek()))
    print("데큐: {0}".format(deque))
    print("enqueue_back(50)을 수행합니다.")
    deque.enqueue_back(50)
    print("peek: {0}".format(deque.peek()))
    print("데큐: {0}".format(deque))
~~~
~~~python
Out:
데큐가 비었나요? True
데큐에 숫자 0~9를 추가
데큐의 크기: 10
peek: 0
pop: 0
peek: 1
데큐가 비었나요? False

데큐: [9, 8, 7, 6, 5, 4, 3, 2, 1]
dequeue: <bound method Deque.dequeue_front of [9, 8, 7, 6, 5, 4, 3, 2, 1]>
peek: 1
데큐: [9, 8, 7, 6, 5, 4, 3, 2, 1]
enqueue_back(50)을 수행합니다.
peek: 50
데큐: [9, 8, 7, 6, 5, 4, 3, 2, 1, 50]
~~~

# 참고
https://gmlwjd9405.github.io/2018/08/03/data-structure-stack.html  
https://www.leafcats.com/125

