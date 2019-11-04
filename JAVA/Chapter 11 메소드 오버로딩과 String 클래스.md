# 1. 메소드 오버로딩  
~~~
class AAA
{
  void isYourFunc(int n) { … } // 오버로딩이 적용된 메소드 1
  void isYourFunc(int n1, int n2) { … } // 오버로딩이 적용된 메소드 2
  void isYourFunc(int n1, double n2) { … } // 오버로딩이 적용된 메소드 3
}
~~~  
## ① 정의  
- 매개변수의 선언형태가 다를 때 동일한 이름의 메소드를 둘 이상 동시에 정의하는 기술  
#
## ② 특징  
### ⓐ 매개변수의 선언(전달되는 데이터의 개수 및 자료형)이 다를 경우(★) 오버로딩 성립 O   
### ⓑ 반환형이 다를 경우 오버로딩 성립 X  
~~~
class AAA
{
  int isYourFunc(int n) { … } 
  boolean isYourFunc(int n1, int n2) { … } 
}
~~~  
- 반환형이 각각 int와 boolean으로 서로 달라 오버로딩이 성립되지 않음  
### ⓒ 형변환의 규칙이 적용  
~~~
class AAA
{
  void isYourFunc(int n) { … } // 오버로딩이 적용된 메소드 1
  void isYourFunc(int n1, int n2) { … } // 오버로딩이 적용된 메소드 2
  void isYourFunc(int n1, double n2) { … } // 오버로딩이 적용된 메소드 3
}
~~~
~~~
AAA inst = new AAA();
inst.isYourFunc(10, 'a'); // (int, char)
~~~
- 형변환 규칙이 적용될 경우 **가장 가까운 위치의 자료형**으로 형변환  
→ char형의 'a'는 int형으로 변환되어 (int n1, int n2)를 매개변수로 가지는 메소드 2가 호출  
- 형변환 규칙까지 적용하는 메소드는 가급적 지양할 것  
### ⓓ 메소드뿐만 아니라 생성자도 오버로딩 가능  
~~~
class Person
{
  private int perID;
  private int milID;
  public Person(int pID, int mID) // 군 필자를 위한 생성자
  {
    perID = pID;
    milID = mID;
  }
  public Person(int pID) // 군 미필자를 위한 생성자
  {
    perID = pID;
    milID = 0;
  }
  public void showInfo()
  {
    System.out.println("민번 : " + perID);
    if(milID!=0)
      System.out.println("군번 : " + milID + '\n');
    else
      System.out.println("군과 관계 없음 \n");
  }
  
  public static void main(String[] args)
  {
    Person man = new Person(950123, 880102);
    Person woman = new Person(941125);
    man.showInfo();
    woman.showInfo();
  }
}
~~~  
#
## ③ 키워드 this  
~~~
class Person 
{
  private int perID;
  private int milID;
  private int birthYear;
  private int birthMonth;
  private int birthDay;
    
  public Person(int perID, int milID, int bYear, int bMonth, int dDay) 
  {
    this.perID = perID;
    this.milID = milID;
    birthYear = bYear;
    birthMonth = bMonth;
    birthDay = bDay;
  }
  public Person(int pID, int bYear, int bMonth, int bDay) 
  {
    this(pID, 0, bYear, bMonth, bDay);
  }
}
~~~  
### ⓐ 생성자 내에 한해서(★) 오버로딩된 다른 생성자를 호출하는 것이 가능  
### ⓑ 생성자마다 중복되는 초기화 과정의 중복 회피  
~~~
public Person(int pID, int bYear, int bMonth, int bDay) 
{
  this(pID, 0, bYear, bMonth, bDay);
}
~~~
- 키워드 this를 사용하지 않을 경우 다음과 같이 불필요한 길이의 코드 작성  
~~~
public Person(int pID, int bYear, int bMonth, int bDay) 
{
  this.perID = pID;
  this.milID = 0;
  birthYear = bYear;
  birthMonth = bMonth;
  birthDay = bDay;
}
~~~
#
# 2. String 클래스  
## ① 정의  
## ② 특징  
## ③ 상수로 String 클래스를 정의하는 이유?  
## ④ String 대표 메소드 4종류  
### ⓐ 
### ⓑ 
### ⓒ 
### ⓓ 
## ⑤ String Builder  
## ⑥ String Buffer  
## ⑦ String Builder, String Buffer의 차이  

①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭

ⓐ ⓑ ⓒ ⓓ ⓔ ⓕ

→

…

↓

※

★

≠
