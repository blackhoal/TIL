# 1. Hash Table(해시 테이블)  
## ① 정의  
- 키(key)와 값(value)으로 구성된 자료구조
- 해싱(Hashing)
  - 기억공간(Hash Table)을 할당하고 해시함수(Hash Function)을 이용하여 키에 대한 기억 공간 내의 Home Address를 계산한 후 주어진 레코드를 해당 기억장소에 저장하거나 검색 작업을 수행하는 방식
  - 키-주소 변환 방식
  - 직접 접근 방식(DAM)을 구성할 때 사용
## ② 구조
### ⓐ 키(Key)
- 매핑 전의 데이터 값
### ⓑ 해시 함수(Hash Function)
- 임의의 길이의 데이터(key)를 고정된 길이의 데이터(value)로 매핑하는 함수
### ⓒ 값(Hash Value)
- 매핑 후의 데이터 값
- 저장소(Bucket, Slot)에 최종적으로 저장
- 키(Key)와 매칭되어 저장, 삭제, 검색, 접근이 가능
### ⓓ 저장소(Bucket, Slot)
- 슬롯(Slot) : 한 개의 레코드를 저장할 수 있는 공간이며 n개의 슬롯이 모여 하나의 버킷을 형성
- 버킷(Bucket) : 하나의 주소를 갖는 파일의 한 구역이며 버킷의 크기는 같은 주소에 포함될 수 있는 레코드 수를 의미

## ③ 특징
ⓐ 
ⓑ 
ⓒ 
ⓓ 
## ④ 장단점
### 장점
ⓐ 적은 리소스로 많은 데이터를 효율적으로 관리 가능
ⓑ 무한에 가까운 데이터를 유한한 개수의 값(Value)로 매핑하면서 작은 크기의 캐시메모리로 프로세스를 관리 가능
ⓒ 데이터 액세스(검색, 삽입, 삭제)가 빠르게 가능하며 시간복잡도 O(1) 지향
### 단점
ⓐ 공간 효율성 부족
ⓑ 
ⓒ 해시 함수(Hash Function) 의존도 
ⓓ 해시함수

## ⑤ 관련 용어
충돌(Collision) : 서로 다른 둘 이상의 레코드가 같은 주소를 갖는 현상
동의어(Synonym) : 충돌(Collision)로 인해 같은 주소를 갖는 레코드의 집합

## ⑥ 충돌 해결(Collision Resolution)
### ⓐ 
- 체이닝(Chaining)
### ⓑ 개방주소법(Open Addressing)
- 
- 
- 
- 
## ⑦ 테이블 생성 과정
ⓐ 해시함수를 이용하여 키의 해시코드 계산
ⓑ 해시코드를 이용하여 배열의 인덱스 계산
ⓒ 키와 값을 해당 인덱스에 저장

## ⑧ 코드(JAVA)  
~~~
public HashMap<Integer, Student> buildMap(Student[] students)
{
  HashMap<Integer, Student> map = new HashMap<Integer, Student>();
  for (Student s : students) 
    map.put(s.getId(), s);
  return map;
}
~~~  
## ⑥
#
# 2. ArrayList  

#
# 3. StringBuffer  

①②③④⑤⑥⑦⑧
⑨
⑩
⑪
⑫
⑬
⑭

ⓐ 
ⓑ 
ⓒ 
ⓓ 
ⓔ 
ⓕ 

→

…

↓

※

★

≠

참고
https://coding-factory.tistory.com/233
https://kgh940525.tistory.com/entry/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%ED%95%B4%EC%8B%B1Hashing-%EC%A0%95%EB%A6%AC%ED%95%98%EA%B8%B0
