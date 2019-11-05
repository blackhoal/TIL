# 1. print 메소드 / println 메소드  
~~~
class Friend
{
  String myName;
  public Friend(String name)
  {
    myName = name;
  }
  
  public String toString()
  {
    return "제 이름은 "+myName+"입니다.";
  }
}

class StringToString
{
  public static void main(String[] args)
  {
    Friend fnd1 = new Friend("철수");
    Friend fnd2 = new Friend("영희");
    System.out.println(fnd1);
    System.out.println(fnd2);
    System.out.print("출력이");
    System.out.print("종료되었습니다.");
    System.out.println("");
  }
}
~~~  
## ① print 메소드는 출력 후 개행 X  
~~~
System.out.print("출력이");          // 개행이 되지 않고 한 줄로 표시
System.out.print("종료되었습니다."); // 출력이 종료되었습니다. 
~~~  
## ② println 메소드는 출력 후 개행 O  
~~~
[Out]
System.out.println(fnd1); // 제 이름은 철수입니다.
System.out.println(fnd2); // 제 이름은 영희입니다.
~~~  
## ③ print, println 메소드의 인자로 인스턴스의 참조값이 전달 가능  
~~~
System.out.println(fnd1); 
System.out.println(fnd2); // println 메소드의 인자로 참조값(fnd1, fnd2)이 전달
~~~  
## ④ 이스케이프 시퀀스  
### ⓐ 문자열 내에서 특별한 의미로 해석되는 문자  
~~~
System.out.println("제가 어제 "당신 누구세요?" 라고 물었더니"); // 문자열 내에 큰 따옴표가 들어갈 경우 문자열의 구분자로 인식됨
System.out.println("제가 어제 \"당신 누구세요?\" 라고 물었더니"); // 문자열 내에 큰 따옴표를 삽입하려면 다음과 같이 이스케이프 시퀀스를 사용
~~~  
### ⓑ 종류  
\n : 개행  
\t : 탭  
\" : 큰 따옴표  
\\ : 역슬래시  
