# 1. 규제의 필요성  
  - 프로그래밍 도구의 기본적인 목표는 생각하는 것을 자유롭게 표현할 수 있도록 하는 것이지만 프로그래밍의 규모가 점점 커지고, 복잡해지며 단독 작업에서 협업으로 넘어감에 따라 생기는 변화를 수용하기 위해 다양한 규제가 필요  
  - 규제의 종류 :  
  데이터 타입, 추상 클래스, final, 접근 제어자, 인터페이스 등
#
# 2. 정보 은닉  
~~~
class FruitSaleMain4
{
  public static void main(String[] args)
  {
    FruitSeller seller = new FruitSeller(0, 30, 1500);
    FruitBuyer buyer = new FruitBuyer(10000);
    seller.myMoney += 500; 
    buyer.myMoney -= 500;
    seller.numOfApple -= 20;
    buyer.numOfApple += 20;
    System.out.println("과일 판매자의 현재 상황");
    seller.showSaleResult();
    System.out.println("과일 구매자의 현재 상황");
    buyer.showSaleResult();
  }
}
~~~
- 문제 발생  
  ![9-1](https://user-images.githubusercontent.com/48504392/67652939-9dd07c00-f98a-11e9-9f18-4c57f1f0af04.png)  
  - 개당 500원이 아니라 20개를 500원에 가져감으로 인해 메소드로 정의한 판매 규칙이 무시되는 상황 발생  
- 해결책  
  - 외부에서 인스턴스 변수에 직접 접근을 방지함으로써 위의 상황을 방지  
    → 정보 은닉의 필요성
  ~~~
  class FruitSeller
  {
    private int numOfApple;
    private int myMoney;
    private final int APPLE_PRICE;
  }
  class FruitBuyer
  {
    private int numOfApple;
    private int myMoney;    
  }
  ~~~  
#
## ① 정의  
  - 인스턴수 변수에 private 선언을 하는 것  
#
## ② 특징  
#### ⓐ 외부에서 인스턴스 변수에 직접 접근이 가능할 경우 문제 발생할 수 있으므로 직접적인 접근 방지  
#### ⓑ 프로그램의 안정성을 높임  
#### ⓒ 인스턴스 변수의 private 선언으로 인해 메소드로만 유일하게 접근 가능  
- 클래스는 기본적으로 데이터(변수)와 기능(메소드)이 균형 있게 존재하는데, 데이터의 표현에만 초점을 맞춰 설계된 클래스의 경우에는 편의상 인스턴스 변수를 public으로 선언하기도 함  
#
## ③ Access 메소드  
#### ⓐ 정보 은닉의 대상인 인스턴스 변수는 대부분 private로 선언됨에 따라 외부 클래스에서 접근 불가능  
#### ⓑ 외부에서 이런 상황일 때 변수의 간접접근을 허용하기 위해 제공되는 추가적인 메소드  
#### ⓒ 변수 age의 값을 변경하는 메소드는 setAge, 변수 age의 값을 반환하는 메소드는 getAge로 정의  
  - 모든 인스턴스 변수마다 Access메소드를 정의할 필요 없이 클래스의 성격과 필요에 따라 정의  
~~~
class Person
{
  private int age;
  public void setAge(int ag){age=ag;}
  public int getAge(){return age;}
}
~~~  
#
# 2. 접근 제어자  
- 클래스의 멤버(변수와 메소드)들의 접근 권한을 지정
- 접근제어 지시자에 의한 접근 허용여부는 인스턴스가 아닌 클래스를 기준으로 판단
## ① private(클래스 내부)  
~~~
public class AccessModifier 
{
  private String secret;
  private String getSecret() 
  {
    return this.secret;
  }
}
~~~  
- 클래스 내부에서만 접근 가능  
## ② default(동일 패키지)  
- 접근 제어자를 선언하지 않는 경우  
- 동일 패키지 내에서 접근 가능  
## ③ protected(상속)  
- 상속 관계에서도 접근 가능  

## ④ public(모든 영역)  
- 어디서든 접근이 가능  

## ⑤ 접근 제어 수준  
**Public > protected > default > private**  
- 왼쪽으로 갈수록 제어의 정도가 약함  

# 3. 클래스의 접근 제어자  
- Default는 동일한 패키지로 묶여있는 클래스 내에서만 생성이 가능, public는 어느 위치에서나 인스턴스 생성 가능  
~~~
package apple;
class AAA
{
  …
}

package pear;
class BBB
{
  public void make()
  {
    apple.AAA inst = new apple.AAA(); → 클래스가 default로 선언되었으므로 성립 X, 같은 패키지에서만 인스턴스 생성 가능
    …
  }
  …
}
~~~  

생성자가 private로 선언되는 경우
생성자도 클래스 내부에서만 호출 가능

# 4. public 클래스 선정 기준  
## ① public 선언 조건  
### ⓐ 하나의 소스파일에는 하나의 클래스만 public으로 선언하는 것이 가능  
### ⓑ public 클래스 명과 소스파일 명은 동일해야함  
## ② 자바의 라이브러리  
- 이미 만들어져서 필요 시 언제나 사용이 가능한 클래스와 클래스를 구성하는 메소드  
## ③  

# 5. 캡슐화  
## ① 정의  
- 관련 있는 모든 메소드와 변수를 하나의 클래스로 묶는 것 
## ② 특징  
- 둘 이상의 클래스를 묶을 수도 있음  
①②③④⑤⑥⑦⑧
ⓐⓑⓒⓓⓔⓕⓖⓗ
