# 1. Static
# 2. 클래스 변수(Static 변수)
~~~
class InstCnt
{
  static int instNum = 0;
  
  public InstCnt()
  {
    instNum++;
    System.out.println("인스턴스 생성 : "+instNum);
  }
}

class ClassVar
{
  public static void main(String[] args)
  {
    InstCnt1 = new InstCnt();
    InstCnt2 = new InstCnt();
    InstCnt3 = new InstCnt();
  }
}
~~~  
~~~
Out:
인스턴스 생성 : 1
인스턴스 생성 : 2
인스턴스 생성 : 3
~~~  
## 정의  
## 특징  
클래스가 정의만 되면 어디에서나 접근이 가능 / but 어디에서나 접근 가능하려면 public 선언 필요
변수가 선언된 클래스의 모든 인스턴스가 공유
메모리 공간에 오직 한 개만 존재
## 접근 방식
# 3. 클래스 메소드(Static 메소드)
## 정의  
## 특징  
# 4. Reference
https://mangkyu.tistory.com/47  

①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭

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
