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
### ⓐ 인스턴스 자신을 의미하는 키워드이며 메소드 내에서만 사용  
### ⓑ 생성자 내에 한해서(★) 오버로딩된 다른 생성자를 호출하는 것이 가능  
~~~
class Person
{
  public Person(int a, int b, int c)
  {
    …;
  }
  public Person(int a, int c)
  {
     this(int a, 0 ,int c);         
  }
}
~~~
### ⓒ 생성자마다 중복되는 초기화 과정의 중복 회피  
- 키워드 this를 이용한 생성자 호출을 사용할 수 없다면 다음과 같이 불필요한 길이의 코드가 필요  
~~~
public Person(int pID, int bYear, int bMonth, int bDay) 
{
  this.perID = pID;
  this.milID = 0;
  birthYear = bYear;
  birthMonth = bMonth;         // 예제의 5문장을 1문장으로 표현
  birthDay = bDay;             // this(pID, 0, bYear, bMonth, bDay);
}
~~~
### ⓓ 자신에 대한 참조값을 가지기에 자신의 참조값을 다른 객체 혹은 메소드에 전달하거나 반환하는 용도로 사용  
~~~
class AAA
{
  AAA aaa = new AAA();
  public void setA(AAA anotherA)
  {
    anotherA = this;
  }
}
~~~  
#
# 2. String 클래스  
## ① 정의  
- JAVA에서 문자열을 인스턴스화하여 표현할 때 사용되는 클래스  
## ② 특징  
~~~
String str1 = "String Instance";
String str2 = "My String";

System.out.println("Hello JAVA!");
System.out.println("My Coffee");
~~~  
### ⓐ 큰 따옴표만으로 인스턴스 생성이 가능  
~~~
String str1 = "String Instance";
String str2 = "My String";
~~~  
### ⓑ 대입 연산자의 왼편(String str1, String str2) : **인스턴스 생성시 반환되는 참조 값의 저장을 위한 참조변수**  
### ⓒ 대입 연산자의 오른편("String Instance", "My String") : **실제 인스턴스가 생성**  
### ⓓ println 메소드의 매개변수형이 String이기 때문에 위의 println 구문과 같은 구성이 가능  
~~~
System.out.println("Hello JAVA!");
System.out.println("My Coffee");
~~~  
#
## ③ String 클래스를 상수로 정의하는 이유?  
### String 인스턴스는 배열을 기반으로 저장된 문자열의 내용을 직접 접근을 통한 변경이 불가능  
- 직접 접근 방식 외의 다른 방식으로는 변경 가능  
- 동일한 문자열의 인스턴스를 하나만 생성하여 공유함으로써 **인스턴스의 생성을 최소화하여 컴퓨터의 성능 향상**  
- String 인스턴스의 문자열은 변경이 불가능하기 때문에 둘 이상의 참조변수가 동시 참조를 해도 문제 X  
![11-1](https://user-images.githubusercontent.com/48504392/68119538-4f9d1900-ff46-11e9-92aa-4ae48d8dbb7b.png)  
#
## ④ String 클래스가 제공하는 유용한 메소드 
~~~
class StringMethod
{
  public static void main(String[] args)
  {
    String str1 = "Smart";
    String str2 = " and ";
    String str3 = "simple";
    String str4 = str1.concat(str2).concat(str3);
    
    System.out.println(str4);
    System.out.println("문자열 길이 : " + str4.length());
    
    if(str1.compareTo(str3)<0)
      System.out.println("str1이 앞선다");
    else
      System.out.println(str3이 앞선다);
  }
}
~~~  
### ⓐ public int length()  
- 문자열의 길이 반환  
### ⓑ public String concat(Strint str)  
- 두 문자열의 결합  
### ⓒ public int compareTo(String another String)  
- 두 문자열의 비교  
### ⓓ public String(String original)  
- 문자열의 복사  
- 새로운 인스턴스를 생성하여 참조값을 넘겨주는 방식  
~~~
String str1 = "String Instance";
String str2 = new String(str1); // str2는 str1과 같은 문자열을 참조하지만 인스턴스는 서로 다른 참조값을 반환하므로 str1과 str2의 값(참조값)은 서로 다름
~~~  
#
## ⑤ + 연산과 += 연산의 진실  
~~~
public static void main(String[] args)
{
  Strint str1 = "Lemon" + "ade";  // String str1 = "Lemon".concat("ade");
  Strint str2 = "Lemon" + 'A';    // String str2 = "Lemon".concat(String.valueOf('A'));
  Strint str3 = "Lemon" + 3;      // String str3 = "Lemon".concat(String.valueOf(3));
  Strint str4 = 1 + "Lemon" + 2;  // String str4 = String.valueOf(1).concat("Lemon").concat(String.valueOf(2));
  Str4 += '!';                    
}
~~~  
- + 연산을 무수히 진행해도 오로지 **두 개의 인스턴스**만 생성(StringBuilder 클래스)
- + 연산이나 concat()을 이용하여 문자열에 변화를 줘도 메모리 공간이 변하는 것이 아니라 새로운 String 객체를 생성하여 새로운 메모리 공간이 할당(★)  
#
## ⑥ String Builder  
### 문자열의 저장 및 변경을 위한 메모리 공간을 지니는 클래스  
### 제공 메소드
- append()  
- insert()  
#
## ⑦ String Buffer  
### 메소드 수, 메소드 기능, 메소드 이름과 매개변수형은 StringBuilder와 동일
#
## ⑧ String 클래스, String Builder, String Buffer의 차이점  
### ⓐ String 클래스 vs String Builder, String Buffer  
String 클래스 → 변경이 불가능한 문자열의 표현을 위한 클래스  
String Builder, String Buffer → 변경이 가능한 문자열의 표현을 위한 클래스  
### ⓑ String Builder vs String Buffer  
String Builder → 동기화를 보장하지 않아 쓰레드에 불안전  
String Buffer → 동기화를 지원하여 쓰레드에 안전  
#
# 3. Reference  
https://peulblog.tistory.com/10  
①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭

ⓐ ⓑ ⓒ ⓓ ⓔ ⓕ

→

…

↓

※

★

≠
