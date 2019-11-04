1. 클래스의 정의 및 인스턴스 생성
① 객체지향 프로그래밍의 정의
- 현실에 존재하는 사물과 대상, 그리고 그에 따른 행동을 있는 그대로 실체화시키는 형태의 프로그래밍
② 객체 구성
- 데이터(변수) + 기능(메소드)
- 하나 이상의 상태 정보 + 하나 이상의 행동
③ 클래스라는 이름의 틀을 기반으로 객체 생성
class FruitSeller
{
int numOfApple=20;
int myMoney=0;
→ 변수 선언
public int SaleApple(int money)
{
int num=money/1000;
numOfApple-=num;
myMoney+=money;
return num;
} → 메소드 정의
}
ⓐ Class FruitSeller 구문의 의미
→ FruitSeller라는 이름의 틀을 정의
ⓑ 클래스는 객체를 구성하는데 필요한 ①변수와 ②메소드로 구성
ⓒ 클래스 내에 정의된 메소드 내에서는 동일한 클래스 내에 선언된 변수에 접근 가능
④ final 키워드
class FruitSeller
{
final int APPLE_PRICE=1000;
int numOfApple=20;
int myMoney=0;
…
}
ⓐ Final 변수의 의미
→ 한번 값이 결정된 이 변수의 값은 변경이 불가능
ⓑ 지역변수로 final이 선언될 경우 한 번만 초기화가 가능
final int APPLE_PRICE;
APPLE_PRICE=1000;
⑤ 나 자신(과일 구매자) 클래스 정의
ⓐ 데이터적 측면
- 보유 현금 → int myMoney
- 사과 개수 → int numOfApple
ⓑ 기능적 측면
- 과일구매자가 필요한 기능 → 과일의 구매(BuyApple)
ⓒ 위의 두 가지 측면을 기반으로 클래스 정의
class FruitBuyer
{
int myMoney=5000;
int numOfApple=0;

public int BuyApple(FruitSeller seller, int money)
{
numOfApple+=seller.saleApple(money);
myMoney-=money;
}
}
⑥ 클래스를 기반으로 객체 생성
ⓐ 클래스는 실체가 아닌 틀에 지나지 않으므로 클래스 내의 메소드를 접근 및 호출하는 것이 불가능
→ 클래스를 실체화하여 객체를 생성
★ 객체 생성 방식
ClassName name = new ClassName();
  ↓
FruitSeller seller = new FruitSeller();
FruitBuyer buyer = new FruitBuyer();
ⓑ 인스턴스화
→ 객체 생성 구문을 통해 메모리 공간에 객체를 생성하는 행위
ⓒ 메모리 관점에서 클래스와 객체(인스턴스)의 차이
- 클래스에 존재하는 변수와 메소드는 메모리 공간에 할당된 형태로 존재 X
→ 접근 및 호출 불가능하며 그저 틀의 역할만 수행
- 객체(인스턴스)의 경우 메모리 공간에 할당이 되므로 변수와 메소드 또한 메모리 공간에 존재
ⓓ 클래스를 정의하는 것의 의미
→ ★프로그래머가 자바의 기본 자료형이 아닌 새로운 명칭의 자료형을 정의하는 것
FruitSeller seller = new FruitSeller();
- FruitSeller라는 객체를 생성하고 이를 seller라는 이름의 변수로 참조하는 구문
- seller와 같이 각각의 객체에 접근을 할 수 있도록 하는 변수 → 참조변수
⑦ 객체 생성과 참조의 관계
ⓐ 참조변수(seller,buyer)에는 new 키워드에 의해 생성된 객체가 저장된 메모리의 주소 값이 반환되어 저장
→ 참조변수에 의한 객체 접근이 가능
FruitSeller seller1 = new FruitSeller();
FruitSeller seller2 = seller1;
→ seller1에 저장된 주소 값이 seller2에도 저장이 되어 두 개의 참조변수가 하나의 객체를 참조하는 형태
ⓑ 참조
- 키워드 new에 의해 반환되는 주소 값(참조변수가 저장하고 있는 값)을 의미
⑧ 생성된 객체의 접근 방식
ⓐ 연산자(.)을 이용하여 객체의 변수 또는 메소드에 접근
seller.numOfApple=20;
→ seller가 참조하는 객체의 변수 numOfApple에 값 20을 저장
seller.saleApple(10);
→ seller가 참조하는 객체의 메소드 saleApple 호출
ⓑ 실제 접근을 할 때 접근권한이 필요
→ Chapter 9
⑨ 참조 변수와 메소드의 관계
public void myMethod()
{
FruitSeller seller1 = new FruitSeller();
instMethod(seller1);
…
}
public void instMethod(FruitSeller seller2)
{
…
}
ⓐ 매개변수로 선언된 seller2에 seller1이 저장하고 있는 객체의 참조 값이 전달
ⓑ 참조변수 seller1, seller2가 하나의 객체를 동시에 참조
⑩ 참조 변수의 NULL 초기화
MyInst my=null;
ⓐ MyInst 클래스의 참조변수 my에 대한 선언
ⓑ null로 초기화된 참조변수를 System.out.println 메소드로 출력 시 문자열 null이 출력
⑪ 객체 간의 대화 방식
- 하나의 객체에서 다른 객체로 메시지(어떠한 행위의 요구를 위한 메시지)를 전달할 때는 메소드 호출을 사용
⑫ 객체와 인스턴스의 차이
ⓐ 객체
- 클래스의 타입으로 선언된 것
- 현실 세계에 근접
- 실제에 초점
ⓑ 인스턴스
- 메모리에 할당되어 실제로 사용되는 객체
- 소프트웨어 세계에 근접
- 관계에 초점

2. 생성자
① 정의
- 객체를 생성할 때 항상 실행되며 객체를 초기화하기 위해 가장 먼저 실행되는 메소드
② 특징
ⓐ 유일하게 반환값이 없는 메소드
ⓑ 클래스 내에 반드시 존재
ⓒ 인스턴스 생성 시 딱 한 번만 호출
ⓓ 인스턴스 변수의 초기화 목적으로 사용
ⓔ 클래스의 이름과 생성자의 명칭은 동일
③ 기본 생성자(디폴트 생성자)
ⓐ 객체 생성 시 사용자가 생성자를 삽입하지 않을 경우 컴파일러로부터 자동으로 삽입되는 생성자
ⓑ public이 아닌 다른 제어 지시자로 선언될 수도 있음

3. 자바 명명규칙
① 클래스의 명명규칙(Camel Case)
ⓐ 첫 문자는 대문자로 시작
class circle (X)
class Circle (O)
ⓑ 둘 이상의 단어가 묶여 하나의 이름으로 구성될 때 새로 시작하는 단어는 각각 대문자로 시작
class Circlepoint (X)
class CirclePoint (O)
② 메소드 및 변수의 명명규칙
- 기존의 Camel Case 방식에서 첫 문자를 소문자로 시작
public void BuyApple(int money) (x)
public void buyApple(int money) (O)
③ 상수의 명명규칙
ⓐ 변수와 구분이 되도록 모든 문자를 대문자로 작성
final int COLOR = 7;
ⓑ 둘 이상의 단어가 연결이 필요한 경우 언더바(_) 사용
final int COLOR_RAINBOW = 7;
