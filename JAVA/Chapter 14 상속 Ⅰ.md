# 1. 상속
## ① 정의
- 기존에 정의된 클래스에 메소드와 변수를 추가하여 새로운 클래스를 정의하는 것  
~~~
// 상위 클래스(기초 클래스)
class Man
{
  public String name;
  public void tellYourName() {
    System.out.println("My name is " + name);
  }
}

// 하위 클래스(유도 클래스)
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
- 상속을 통해 연관된 일련의 클래스에 대한 공통적인 규약을 정의 및 적용  

## ③ 객체지향이 재활용의 관점에서 실패한 원인
ⓐ 클래스 하나를 정의하는 것이 새롭게 디자인하는 것보다 많은 노력이 소요  
ⓑ 클래스 디자인 시 재활용을 고려할 경우 설계 소요시간 증가  
ⓒ 실무 간에 다른 사용자가 설계한 클래스에 대한 이해 및 신뢰도 부족  

## ④ super 키워드

# 2. 상속한 클래스의 인스턴스 생성 과정
## ① 메모리 공간에 인스턴스 할당 및 모든 인스턴스 변수의 디폴트 초기화
## ② 하위 클래스(BusinessMan)의 생성자 호출
## ③ 상위 클래스(Man)의 생성자 호출 및 실행
## ④ 하위 클래스(BusinessMan)의 생성자 실행

# 3. 접근제어 지시자와 상속
## ① protected 
## ② private의 상속

# 4. static 변수(메소드)의 상속

# 5. 생성자의 상속
