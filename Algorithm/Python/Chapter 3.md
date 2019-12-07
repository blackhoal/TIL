# 1. 순차 탐색(Sequential Search)
## 로직
① 리스트의 첫 번째 요소부터 하나씩 비교  
② 같은 값이 존재할 경우 해당 위치의 인덱스를 결과값으로 반환  
③ 같은 값이 존재하지 않을 경우 결과값 -1 반환  
## 코드
~~~python
list = [1,2,3,4,5,6,7,8]

def seq(a, x):
    n = len(a)
    for i in range(0, n):
        if a[i] == x :
            return i
    return -1

seq(list, 3)
~~~
## 특징
- 평균 연산 횟수 : n+1/2  
- 계산 복잡도 : O(n)  

# 2. 이진 탐색(Binary Search)
## 로직
① 중간 위치의 인덱스 계산  
② 찾는 값과 중간 위치의 값을 비교  
③ 같을 경우 해당 위치의 인덱스를 결과값으로 반환  
④ 찾는 값이 중간 위치의 값보다 클 경우, 중간 위치의 오른쪽을 대상으로 ①-③ 반복  
⑤ 찾는 값이 중간 위치의 값보다 작을 경우, 중간 위치의 왼쪽을 대상으로 ①-③ 반복  
## 코드
~~~python
list = [1,2,3,4,5,6,7,8,9]

def bin_search(a, x):
    start = 0
    end = len(a) - 1
    
    while start <= end:
        mid = (start+end) // 2
        if x == a[mid]:
            return mid
        elif x > a[mid]:
            start = mid + 1
        else:
            end = mid + 1            
    return -1

bin_search(list, 3)
~~~
## 특징
-  알고리즘 수행 전 입력 리스트 내 요소들의 오름차순 정렬이 필요
- 계산 복잡도 : O(logN) → 복잡도가 O(n)인 순차 탐색보다 효율적  

# 3. 삽입 정렬(Insertion Sort)
## 로직
① 두 번째 인덱스부터 알고리즘 수행  
② 해당 인덱스에서 앞의 요소들과 비교 후 자료가 삽입될 위치를 탐색  
~~~
index[1] → index[0]
index[2] → index[0] + index[1]
index[3] → index[0] + index[1] + index[2]
~~~  
③ 위치가 탐색되었을 경우 자료를 한 칸씩 뒤로 이동 후 해당 위치에 자료 삽입  
## 코드
~~~python
ins_list = [3, 7, 2, 9, 5, 1]

def ins_sort(a):
    n = len(a)
    for i in range(1, n):
        key = a[i]
        j = i - 1
        while j >=0 and a[j] > key:
            a[j+1] = a[j]
            j -= 1
        a[j+1] = key
        
print(ins_list) # 정렬 전
print(ins_sort(ins_list)) # 정렬 후
~~~
## 특징
- 자료 배열의 모든 요소를 앞에서부터 차례대로 이미 정렬된 배열 부분과 비교 하여, 자신의 위치를 찾아 삽입  
- 레코드 수가 많거나 크기가 클 경우 비효율적  

# 4. 선택 정렬(Selection Sort)
## 로직
① 주어진 리스트 내의 최소값 탐색  
② 탐색된 최소값을 리스트의 첫 번째 인덱스 값과 교체  
③ 교체된 첫 번째 인덱스를 제외한 나머지 리스트를 위와 같은 방식으로 교체  
④ 하나의 요소만 남을 경우 해당 리스트를 결과값으로 반환  
## 코드
~~~python
sel_list = [3, 7, 2, 9, 5, 1]

def sel_sort(a):
    n = len(a)
    for i in range(0, n - 1): # 0부터 n -2까지 반복
        # i번 위치부터 끝까지 자료 값 중 최솟값의 위치를 찾음
        min_idx = i
        for j in range(i + 1, n):
            if a[j] < a[min_idx]:
                min_idx = j
        # 찾은 최솟값을 i번 위치로
        a[i], a[min_idx] = a[min_idx], a[i]

print(sel_list) # 정렬 전
print(sel_sort(sel_list)) # 정렬 후
~~~
## 특징
- 제자리 정렬(in-place sorting) 알고리즘  
→ 입력 배열 이외에 다른 메모리를 추가로 요구 X  
- 해당 순서에 삽입될 원소의 위치가 사전에 결정 → 자료의 이동 횟수가 초기에 결정  

# 5. 버블 정렬(Bubble Sort)
## 코드
~~~python
bub_list = [3, 7, 2, 9, 5, 1]
 
def bub_sort(a):
    for i in range(len(a)-1, 0, -1):
        for j in range(0, i):
            if a[j] > a[j+1]:
                a[j], a[j+1] = a[j+1], a[j] # 자리 바꿈
    return a
 
print(bub_list) # 정렬 전
print(bub_sort(bub_list)) # 정렬 후
~~~
## 특징
- 선택 정렬과 기본 로직은 유사  
- 일반적으로 자료의 교환 작업이 자료의 이동보다 복잡하다는 성질때문에 단순성에도 불구하고 보편적으로 사용 X  

# 6. 퀵 정렬(Quick Sort)
## 코드
~~~python
~~~
## 특징

# 7. 병합 정렬(Merge Sort)
## 코드
~~~python
~~~
## 특징

# 8. 힙 정렬(Heap Sort)
## 코드
~~~python
~~~
## 특징

![3-1](https://user-images.githubusercontent.com/48504392/70370145-01918180-1907-11ea-8ced-f745787868f8.png)  

참고  
https://smujihoon.tistory.com/143  
https://gmlwjd9405.github.io/2018/05/06/algorithm-insertion-sort.html  
