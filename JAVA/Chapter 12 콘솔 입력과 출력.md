# 1. print 메소드 / println 메소드 / printf 메소드  
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
#
## ② println 메소드는 출력 후 개행 O  
~~~
[Out]
System.out.println(fnd1); // 제 이름은 철수입니다.
System.out.println(fnd2); // 제 이름은 영희입니다.
~~~  
#
## ③ print, println 메소드의 인자로 인스턴스의 참조값이 전달 가능  
~~~
System.out.println(fnd1); 
System.out.println(fnd2); // println 메소드의 인자로 참조값(fnd1, fnd2)이 전달
~~~  
#
## ④ printf 메소드는 문자열을 조합해서 출력  
![12-1](https://user-images.githubusercontent.com/48504392/68179391-05ae4480-ffd3-11e9-97b7-0e408349df83.png)  
~~~
%d - 10진수 정수 출력
%o - 8진수 정수 출력
%x - 16진수 정수 출력
%f - 실수 출력
%e - e 표기법 기반의 실수 출력
%g - 출력의 대상에 따라 %e or %f 출력
%s - 문자열 출력
%c - 문자 출력
~~~  
#
## ⑤ 이스케이프 시퀀스  
### ⓐ 문자열 내에서 특별한 의미로 해석되는 문자  
~~~
System.out.println("제가 어제 "당신 누구세요?" 라고 물었더니"); // 문자열 내에 큰 따옴표가 들어갈 경우 문자열의 구분자로 인식됨
System.out.println("제가 어제 \"당신 누구세요?\" 라고 물었더니"); // 문자열 내에 큰 따옴표를 삽입하려면 다음과 같이 이스케이프 시퀀스를 사용
~~~  
### ⓑ 종류  
~~~
\n - 개행  
\t - 탭  
\" - 큰 따옴표  
\\ - 역슬래시  
~~~  
#
# 2. 콘솔 입력  
## ① 콘솔 입력의 변화  
~~~
// 과거의 정수 입력 방식
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
String str = br.readLine();
int num = Integer.parseInt(str);

// 개선된 정수 입력 방식
Scanner kb = new Scanner(System.in);
int num = kb.nextInt();
~~~   
## ② Scanner 클래스
- 단순히 키보드의 입력만을 목적으로 디자인된 클래스가 아닌 **다양한 리소스를 대상으로 입력받을 수 있도록 정의된 클래스**  
~~~
import java.util.Scanner;

class StringScanning
{
  public static void main(String[] args)
  {
    String source = "1 5 7";
    Scanner sc = new Scanner(source);    // String을 대상으로 Scanner의 인스턴스 생성
    Scanner sc = new Scanner(System.in); // 키보드 입력을 대상으로 Scanner의 인스턴스 생성
    int num1 = sc.nextInt();
    int num2 = sc.nextInt();
    int num3 = sc.nextInt();
    int sum = num1 + num2 + num3
    System.out.printf("문자열에 저장된 %d, %d, %d의 합은 %d \n". num1, num2, num3, sum);
  }
}
~~~  
- Scanner 클래스의 생성자  
~~~
Scanner(File source)
Scanner(InputStream source)
Scanner(Readable source)
Scanner(String source)
~~~  
