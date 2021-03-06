# 스택(Stack)?
![1](https://user-images.githubusercontent.com/48504392/75146038-8b4e2f80-573d-11ea-838b-2e9d67744c7b.jpg)  
- 배열의 끝에서만 데이터를 접근할 수 있는 선형 자료구조
# 특징
- 후입선출(LIFO) 구조
- Push 연산을 통해 삽입한 자료는 가장 위쪽에 위치하며 맨 위의 자료부터 Pop 연산으로 출력
- 시간복잡도 : O(1)

# 동작
- push : 스택 맨끝의 항목을 삽입
- pop : 스택 맨끝의 항목을 반환 및 제거
- peek : 스택 맨 끝의 항목 조회
- empty : 스택이 비어 있는지 확인
- size : 스택의 크기를 확인
# 구현 1 - 일반적인 스택
~~~python
class Stack(object):
    def __init__(self):
        self.items = []
        
    def isEmpty(self):
        return not bool(self.items)
    
    def push(self, value):
        self.items.append(value)
        
    def pop(self):
        value = self.items.pop()
        if value is not None:
            return value
        else:
            print("Stack is empty.")
            
    def size(self):
        return len(self.items)
    
    def peek(self):
        if self.items:
            return self.items[-1]
        else:
            print("Stack is empty.")
            
    def __repr__(self):
        return repr(self.items)
    
if __name__ == "__main__":
    stack = Stack()
    print("스택이 비었나요? {0}".format(stack.isEmpty()))
    print("스택에 숫자 0~9를 추가")
    for i in range(10):
        stack.push(i)
    print("스택의 크기: {0}".format(stack.size()))
    print("peek: {0}".format(stack.peek()))
    print("pop: {0}".format(stack.pop()))
    print("peek: {0}".format(stack.peek()))
    print("스택이 비었나요? {0}".format(stack.isEmpty()))
    print(stack)
~~~
~~~python
Out:
스택이 비었나요? True
스택에 숫자 0~9를 추가
스택의 크기: 10
peek: 9
pop: 9
peek: 8
스택이 비었나요? False
[0, 1, 2, 3, 4, 5, 6, 7, 8]
~~~
# 구현 2 - 노드의 컨테이너로 구현한 스택
~~~python
class Node(object):
    def __init__(self, value=None, pointer=None):
        self.value = value
        self.pointer = pointer

class Stack(object):
    def __init__(self):
        self.head = None
        self.count = 0
        
    def isEmpty(self):
        return not bool(self.head)
    
    def push(self, item):
        self.head = Node(item, self.head)
        self.count += 1
        
    def pop(self):
        if self.count > 0 and self.head:
            node = self.head
            self.head = node.pointer
            self.count -= 1
            return node.value
        else:
            print("Stack is empty")
            
    def size(self):
        return self.count

    def peek(self):
        if self.count > 0 and self.head:
            return self.head.value
        else:
            print("Stack is empty")
            
    def _printList(self):
        node = self.head
        while node:
            print(node.value, end = " ")
            node = node.pointer
        print()
    
if __name__ == "__main__":
    stack = Stack()
    print("스택이 비었나요? {0}".format(stack.isEmpty()))
    print("스택에 숫자 0~9를 추가")
    for i in range(10):
        stack.push(i)
    print("스택의 크기: {0}".format(stack.size()))
    print("peek: {0}".format(stack.peek()))
    print("pop: {0}".format(stack.pop()))
    print("peek: {0}".format(stack.peek()))
    print("스택이 비었나요? {0}".format(stack.isEmpty()))
    stack._printList()
~~~
~~~python
Out:
스택이 비었나요? True
스택에 숫자 0~9를 추가
스택의 크기: 10
peek: 9
pop: 9
peek: 8
스택이 비었나요? False
8 7 6 5 4 3 2 1 0 
~~~
# 참고
https://gmlwjd9405.github.io/2018/08/03/data-structure-stack.html  
https://www.leafcats.com/125
