# 1. 상속
## ① 정의
기존에 정의된 클래스에 메소드와 변수를 추가하여 새로운 클래스를 정의하는 것  
~~~
// 상위 클래스(= 기초 클래스)
class Man
{
  public String name;
  public void tellYourName() {
    System.out.println("My name is " + name);
  }
}

// 하위 클래스(= 유도 클래스)
class BusinessMan extends Man
{
  public String company;
  public String position;
  public void tellYourInfo()
  {
    System.out.println("My company is " + company);
    System.out.println("My position is " + position);
    tellYourName(); // Man 클래스를 상속했기 때문에 호출 가능
  }
}
~~~  
![14-1](https://user-images.githubusercontent.com/48504392/68524664-d5391400-030c-11ea-8bf9-8b0cf956157a.png)
## ② 목적
상속을 통해 연관된 일련의 클래스에 대한 공통적인 규약을 정의 및 적용  

## ③ 객체지향이 재활용의 관점에서 실패한 원인
ⓐ 클래스 하나를 정의하는 것이 새롭게 디자인하는 것보다 **많은 노력 소요**  
ⓑ 클래스 디자인 시 재활용을 고려할 경우 설계 **소요시간 증가**  
ⓒ 실무 간에 다른 사용자가 설계한 클래스에 대한 **이해 및 신뢰도 부족**  

## ④ super 키워드
~~~
class Man
{
  private String name;
  public Man(String name) { this.name = name;}
  public void tellYourName() {
    System.out.println("My name is " + name);
  }
}

class BusinessMan extends Man
{
  private String company;
  private String position;
  public BusinessMan(String name, String company, String position)
  {
    super(name); // name을 인자로 전달받는 상위 클래스(Man)의 생성자를 호출하겠다의 의미
    this.company = company;
    this.position = position;
  }
  public void tellYourInfo()
  {
    System.out.println("My company is " + company);
    System.out.println("My position is " + position);
    tellYourName();
  }
}
~~~  
~~~
public static void main(String[] args)
{
  BusinessMan man1 = new BusinessMan("Mr.Hong", "Hybrid 3D ELD", "Staff Eng.");
  BusinessMan man2 = new BusinessMan("Mr.Lee", "Hybrid 3D ELD", "Assist Eng.");
  
  System.out.println("First man info...............");
  man1.tellYourName();
  man1.tellYourInfo();
  System.out.println("Second man info...............");
  man2.tellYourInfo();
}
~~~  
#### ⓐ BusinessMan 인스턴스 생성 시 초기화 대상
- BusinessMan 인스턴스 생성 시 초기화 대상인 인스턴스 변수  
→ name(클래스 Man), company, position(클래스 BusinessMan)  
- 외부에서 호출하는 것은 BusinessMan 클래스의 생성자이므로, 이 생성자가 부모 클래스(Man)의 인스턴스 변수(name)까지 초기화 필요(★)  
#### ⓑ 키워드 super는 상위 클래스의 생성자 호출 및 매개 변수에 전달하는 역할
#### ⓒ super에 표시되어 전달되는 인자의 수와 자료형을 참조하여 호출할 생성자가 결정
~~~
class AAA
{
  int num1;
}

class BBB extends AAA
{
  int num2;
  BBB()
  {
    super(5); 
    num2 = 0;
  }
}
~~~
- 위의 코드는 **상위 클래스(AAA)에서 5를 인자로 받는 생성자가 없으므로** 컴파일 수행 X  
- 임의의 클래스를 상속하는 하위 클래스를 정의할 시 상위 클래스에 대한 생성자 정보가 필요  
#### ⓓ 상위 클래스의 생성자는 반드시 호출
![14-2](https://user-images.githubusercontent.com/48504392/68525086-3b279a80-0311-11ea-97d7-2bad4d1d183e.png)  
![14-3](https://user-images.githubusercontent.com/48504392/68525099-63af9480-0311-11ea-9dc6-c7fd83cba9d8.png)  
- 상위 클래스(AAA)의 생성자는 위의 그림과 같이 명시되어 있지 않아도 컴파일러에 의해 자동으로 삽입되어 반드시 호출이 수행  

# 2. 상속한 클래스의 인스턴스 생성 과정
## ① 메모리 공간에 인스턴스 할당 및 모든 인스턴스 변수의 디폴트 초기화  
![14-7](https://user-images.githubusercontent.com/48504392/68525760-521dbb00-0318-11ea-908a-71a7c070754d.png)  
## ② 하위 클래스(BusinessMan)의 생성자 호출  
![14-8](https://user-images.githubusercontent.com/48504392/68525761-534ee800-0318-11ea-8b96-671714ceb72d.png)  
## ③ 상위 클래스(Man)의 생성자 호출 및 실행  
![14-8](https://user-images.githubusercontent.com/48504392/68525761-534ee800-0318-11ea-8b96-671714ceb72d.png)  
## ④ 하위 클래스(BusinessMan)의 생성자 실행  
![14-9](https://user-images.githubusercontent.com/48504392/68525762-53e77e80-0318-11ea-8c10-0ef2b633c511.png)  
## ⑤ 결론
ⓐ 하위 클래스(BusinessMan)의 생성자는 상위 클래스(Man)의 인스턴스 변수를 초기화할 데이터까지 인자로 전달받을 필요 有  
ⓑ 하위 클래스(BusinessMan)의 생성자는 내부에서 상위 클래스(Man)의 생성자 호출을 통해 상위 클래스의 인스턴스 변수를 초기화(★)  
ⓒ super 키워드에 표시된 인자의 수와 자료형을 참조하여 호출할 생성자 결정  
ⓓ 인스턴스 변수의 초기화는 인스턴스 변수가 선언된 클래스(상위 클래스)의 생성자를 통해 진행하고, 하위 클래스는 super 키워드를 동해 상위 클래스의 인스턴스 변수 초기화에 필요한 데이터만 전달하는 것이 이상적인 구조(★)  
→ 상위 클래스의 생성자를 통해 진행하지 않을 경우 상위 클래스를 상속하는 모든 하위 클래스가 상위 클래스의 모든 인스턴스 변수를 초기화해야 하므로 부담 발생  

# 3. 접근제어 지시자와 상속
## ① protected  
~~~
class AAA
{
  int num1;
  protected int num2;
}

class BBB extends AAA
{
  BBB()
  {
    num1 = 10; // AAA 클래스의 default 멤버에 접근
    num2 = 20; // AAA 클래스의 protected 멤버에 접근
  }
}
~~~  
- default 멤버는 기존에 배웠을 때 상속 관계에서 접근 불가로 되어 있으나 그에 앞서 default라는 하나의 패키지에 묶여 있기에 접근이 허용  
- protected는 **다른 패키지에 존재하더라도 상속관계일 경우** 접근을 허용하는 접근제어 지시자  

## ② private의 상속
![14-4](https://user-images.githubusercontent.com/48504392/68525547-0cf88980-0316-11ea-9fdc-37cfa98665e8.png)  
![14-5](https://user-images.githubusercontent.com/48504392/68525548-0d912000-0316-11ea-8ad9-9019d615cbbb.png)  
- private 멤버는 상속은 되지만 직접 접근이 불가능하며, 함께 상속된 다른 메소드를 통해 **간접 접근**이 필요  

# 4. static 변수(메소드)의 상속
- static 메소드와 static 변수는 생성되는 인스턴스가 함께 공유하는 변수 및 메소드  
- static 변수는 public으로 선언될 경우 클래스 이름을 통해 어디서든 접근 가능  
→ 접근 가능 여부보다 **접근 방법**에 초점  
- 상위 클래스의 static 변수에 **이름을 통한 직접 접근**이 가능  
![14-6](https://user-images.githubusercontent.com/48504392/68525572-7ed0d300-0316-11ea-8547-43e1b2de7ef2.png)  
