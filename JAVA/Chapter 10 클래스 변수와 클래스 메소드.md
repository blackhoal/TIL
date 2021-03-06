# 1. Static  
## ① 정의
- 프로그램이 시작될 때 메모리에 할당되어 프로그램이 종료될 때까지 남아있음을 명시  
#
## ② Static의 필요성  
은행의 각 기계(객체)마다 독립적으로 번호표를 사용할 시 중복된 번호를 가지는 대기자 발생  
- 근본적인 문제 : **각 기계(객체)가 독자적인 번호표(데이터)를 가진다는 것**  
- 해결 방안 : **모든 기계(객체)가 같은 번호표(데이터)를 공유하는 방식**으로 해결(Static)  
#
## ③ Static이 가지는 의미
### ⓐ 공유  
- static이 선언된 변수를 사용하는 모든 객체는 공유된 데이터를 사용  
### ⓑ 객체와 무관한 메소드와 함수  
- 객체가 가진 데이터에 의해 영향을 받는 것을 방지하기 위해 static 사용  
### ⓒ 단 한번만 동작할 것을 명시
- 객체의 생성과 관계 없이 클래스가 로딩되는 시점에 단 한 번만 실행하고 싶은 처리를 하기 위해 사용  
#
## ④ 메모리 상의 Static  
![10-1](https://user-images.githubusercontent.com/48504392/68106870-5320a800-ff26-11e9-8866-61b346feba5d.jpg)  
- 사용자가 생성한 Class는 Static 영역에 생성 / new 연산을 통해 생성한 객체는 Heap 영역에 생성  
- Static 사용의 장단점  
장점 : Static 영역에 할당된 메모리(데이터)를 모든 객체가 공유 가능  
단점 : garbage Collector의 관리 영역 밖에 존재하므로 자주 사용할 경우 프로그램의 종료 시까지 메모리에 할당된 채로 존재하게 되어 시스템에 악영향 부여  
#
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
[Out]
인스턴스 생성 : 1
인스턴스 생성 : 2
인스턴스 생성 : 3
~~~  
## ① 정의  
- 메모리에 고정적으로 할당되어, 프로그램이 종료될 때 해제되는 변수  
#
## ② 특징  
- 클래스가 정의만 되면 어디에서나 접근이 가능, but 어디에서나 접근 가능하려면 public 선언 필요  
- 변수가 선언된 클래스의 모든 인스턴스가 데이터를 공유  
→ 동일한 클래스의 인스턴스 사이에서 데이터 공유가 필요할 때 static 변수를 사용  
- 메모리 공간에 오직 한 개만 존재(static)  
#
## ③ 접근 방식  
- 접근하는 위치에 따라 접근의 형태가 상이  
~~~
class AccessWay
{
  static int num = 0;
  AccessWay()
  {
    incrCnt();
  }
  public void incrCnt() 
  {
    num++; // ⓐ 클래스 내부 접근
  }
}
class ClassVarAccess
{
  public static void main(String[] args)
  {
    AccessWay way = new AccessWay();
    way.num++; // ⓑ 인스턴스의 이름을 이용한 접근
    Accessway.num++;
    System.out.println("num="+AccessWay.num); // ⓒ 클래스의 이름을 이용한 접근 
  }
}
~~~  
ⓐ 방법 1 - 클래스 내부 접근  
~~~
num++;
~~~  
ⓑ 방법 2 - 인스턴스의 이름을 이용한 접근  
~~~
way.num++;
~~~  
ⓒ 방법 3 - 클래스의 이름을 이용한 접근  
~~~
AccessWay.num
~~~  
#
## ④ Static 변수의 초기화 시점
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

class StaticValNoInst
{
  public static void main(String[] args)
  {
    InstCnt.instNum-=15;
    System.out.println(InstCnt.instNum);
  }
}
~~~  
- 인스턴스 생성되지 않음  
→ static 변수는 인스턴스 생성과 관계 X
- **JVM이 실행과정에서 필요한 클래스의 정보를 메모리에 로딩할 때** static 변수가 초기화 
#
# 3. 클래스 메소드(Static 메소드)
## 정의  
- static이 선언된 메소드  
#
## 특징  
- 기본적인 특성과 접근 방식은 static 변수와 동일  
- 객체의 생성 없이 호출 가능  
- 인스턴스 멤버에 접근 불가능  
~~~
class AAA
{
  int num1;
  static int num2; // static 변수
  static void changeNum() // static 메소드
  {
    num1++; // 
    num2++; // 
  }
}
~~~  
![10-2](https://user-images.githubusercontent.com/48504392/68115929-e49b1480-ff3c-11e9-8aba-3f6e7119935b.png)  
- static 멤버(changeNum(), num2)는 공유되는 것과 대조적으로 num1은 공유가 되지 않아 num1++을 진행할 수 없어 컴파일 오류 발생  
#
# 4. Reference
https://mangkyu.tistory.com/47  
https://devbox.tistory.com/entry/Java-static  
