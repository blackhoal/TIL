# 1. 클래스 패스  
## ① 정의  
  - 클래스를 찾기 위한 경로  
  - 자바 가상머신이 프로그램을 실행할 때 클래스 파일을 찾는 기준이 되는 파일 경로  
    
## ② ClassPath.java  
![8-1](https://user-images.githubusercontent.com/48504392/67634122-54851b80-f8fb-11e9-972e-e0488aa007c1.png)  
### ⓐ 위의 코드를 작성 시 아래와 같은 구조가 생성  
![8-2](https://user-images.githubusercontent.com/48504392/67634149-9746f380-f8fb-11e9-8329-54f43eef2010.png)  
### ⓑ 서브 디렉터리 mysubclass 생성 후 AAA.class와 BBB.class를 해당 위치로 이동 
![8-3](https://user-images.githubusercontent.com/48504392/67634161-c3627480-f8fb-11e9-90ef-842ad8e1e918.png)  
### ⓒ Mysubclass로 AAA, BBB를 이동 후 ClassPath.java 실행 시 오류 발생  
![8-4](https://user-images.githubusercontent.com/48504392/67634170-d2492700-f8fb-11e9-98d3-d32a2dc542a0.png)  
### ⓓ 찾고자 하는 클래스가 보이지 않음을 명시하는 오류이므로 서브 디렉터리인 mysubclass 디렉터리에서 클래스를 찾도록 수정 필요  → 환경변수의 역할  
  
## ③ 환경변수(Environment Variable)  
### ⓐ 명령 프롬프트에 구문 입력  
  C;\myclass > calc.exe
  C;\myclass > explorer.exe 
  → myclass 디렉터리에 calc.exe와 explorer.exe가 없음에도 정상적으로 실행
### ⓑ 환경변수 path의 내용을 echo 명령어로 출력  
  C:\myclass> echo %path%  
  → .;C:\WINDOWS\system32;C:\Program Files\Java\jdk1.6.0_10\bin; 구문이 출력  
### ⓒ 출력된 구문 해석  
  세미콜론을 기준으로 세 부분으로 구분  
  **.**; **C:\WINDOWS\system32**; **C:\Program Files\Java\jdk1.6.0_10\bin**;  
#### 경로 1 → .
- 명령 프롬프트가 위치하는 현재 디렉터리  
#### 경로 2 → C:\WINDOWS\system32  
- System32 디렉터리에 calc.exe, explorer.exe가 존재  
  → ⓐ에서 계산기와 파일 탐색기가 실행이 가능했던 이유  
#### 경로 3 → C:\Program Files\Java\jdk1.6.0_10\bin  
- bin 폴더에 javac.exe와 java.exe가 존재  
  → 명령 프롬프트가 어느 디렉터리에 위치하든 항상 자바 프로그램을 컴파일 및 실행 가능한 이유  
  
## ④ 환경변수의 classpath 설정  
### ⓐ path가 하나만 존재 X → 필요에 따라 추가 가능  
### ⓑ 클래스의 경로 정보를 classpath의 환경변수에 추가함으로써 클래스의 검색 경로를 확장  
### ⓒ classpath 설정 구문  
  **C:\myclass> set classpath=.;**  
  → 현재 디렉터리는 별도로 추가하지 않아도 기본적인 클래스 파일의 탐색경로에 포함  
### ⓓ 지정방식  
- 절대경로 지정방식  
C:\myclass> set classpath=.;C:\myclass\mysubclass;  
- 상대경로 지정방식  
C:\myclass> set classpath=.;.\mysubclass;
### ⓔ 직접 추가하는 방식  
![8-6](https://user-images.githubusercontent.com/48504392/67649879-2268cd80-f97e-11e9-84ee-a0257c9771c2.png)  
- 적은 개수를 지정할 때는 편리, But 클래스 패스의 추가 작업을 자동화할 수 없으므로 여러 사용자의 클래스 패스를 지정해야할 상황일 때는 Bad  
## ⑤ 배치 파일 생성 
~~~
javac ClassPath.java  
md mysubclass  
copy AAA.class .\mysubclass\AAA.class  
copy BBB.class .\mysubclass\BBB.class  
del AAA.class  
del BBB.class  
set classpath=.;.\mysubclass  
java ClassPath  
pause  
~~~  
### ⓐ .java 파일 컴파일 실행  
~~~
javac ClassPath.java  
~~~  
### ⓑ mysubclass 디렉터리 생성  
~~~
md mysubclass  
~~~  
### ⓒ AAA.class, BBB.class를 mysubclass 디렉터리로 이동(복사)  
~~~
copy AAA.class .\mysubclass\AAA.class  
copy BBB.class .\mysubclass\BBB.class  
del AAA.class  
del BBB.class  
~~~  
### ⓓ mysubclass 디렉터리를 classpath로 추가  
~~~
set classpath=.;.\mysubclass  
~~~  
### ⓔ 실행  
~~~
java ClassPath  
pause  
~~~  
# 2. 패키지의 이해  
## ① 정의  
- 서로 연관이 깊으며 유사한 성격의 자바 클래스의 집합으로 구성된 자바 디렉터리  
## ② 특징  
### ⓐ 컴파일이 완료된 동일한 이름의 클래스 파일을 서로 다른 디렉터리에 저장 및 관리  
![8-8](https://user-images.githubusercontent.com/48504392/67650295-d028ac00-f97f-11e9-8eff-c3dd05fdecbf.png)  
~~~
Circle c1 = new Circle(1.5); // 둘레를 구하는 인스턴스 생성(perimeter)  
Circle c2 = new Circle(2.5); // 넓이를 구하는 인스턴스 생성(area)  
~~~  
- perimeter의 Circle 클래스(perimeter.Circle)와 area의 Circle 클래스(area.Circle)의 명칭이 동일하여 인스턴스 생성 과정에서 문제 발생  
→ 상위 디렉터리 orange를 생성하고 아래 계층에 area와 perimeter를 서브 디렉터리로 설정한 구조를 생성하여 해결  
~~~
orange.area.Circle  
orange.perimeter.Circle  
~~~  
패키지 → orange  
서브 패키지 → area, perimeter  
### ⓑ 인스턴스 생성 시 저장된 디렉터리 정보를 표시하여 클래스를 구분 및 인스턴스를 생성  
![8-9](https://user-images.githubusercontent.com/48504392/67650735-948ee180-f981-11e9-9b89-cb0d8ad7972c.png)  
~~~
Circle c1 = new Circle(1.5); → orange.perimeter.Circle  c1 = new Circle(1.5); 
Circle c2 = new Circle(2.5);         orange.area.Circle c2 = new Circle(2.5); 
~~~  
## ③ 패키지와 클래스 패스의 관계  
![8-10](https://user-images.githubusercontent.com/48504392/67651122-fac83400-f982-11e9-9d6a-490ee4e55ea6.png)  
- 패키지도 클래스 패스를 기준으로 검색  
~~~
BBB.Circle c1 = new BBB.Circle();  
CCC.Circle c2 = new CCC.Circle();  
~~~  
필요 조건  
ⓐ BBB, CCC가 패키지로 선언  
ⓑ C:\AAA 디렉터리가 클래스 패스에 등록  
~~~
AAA.BBB.Circle c1 = new AAA.BBB.Circle();  
AAA.CCC.Circle c2 = new AAA.CCC.Circle();   
~~~  
필요 조건  
ⓐ AAA.BBB, AAA.CCC가 패키지로 선언  
ⓑ C:\ 디렉터리가 클래스 패스에 등록  
## ④ 패키지의 선언  
ⓐ 작성중인 파일 내에서 생성되는 모든 클래스(Circle)를 패키지(orange.area)로 묶어 해당 디렉터리에 저장할 것을 선언
~~~
package orange.area;   

public class Circle
{
  …
}
~~~  
ⓑ 저장된 경로를 명시하여 인스턴스 생성(orange.area.Circle)
~~~
orange.area.Circle c1 = new Circle(2.5);
~~~  
## ⑤ 디렉터리의 구분 외에 패키지의 선언이 별도로 필요한 이유  
- 패키지의 선언 없이 디렉터리의 위치만 구분할 경우 일반적인 인스턴스 생성 방식 사용이 불가  
## ⑥ 패키지의 그룹  
## ⑦ 이름 없는 패키지  
## ⑧ import 선언  
ⓐ 기본적인 선언 방식  
~~~
import orange.area.circle;
~~~  
→ orange.area 패키지의 Circle 클래스를 명시할 때 앞부분을 생략하고 Circle로 표현하겠음을 명시  
ⓑ 아스타리스크(*)  
~~~
import orange.area.*;
~~~  
→ orange.area 패키지로 묶여있는 모든 클래스의 인스턴스 생성에서 패키지의 이름은 생략하고 클래스 명만 사용하겠음을 명시
ⓒ import 선언 이후 인스턴스 생성   
~~~
Circle c1 = new Circle(2.5);
orange.area.Circle c1 = new Circle(2.5);
~~~  
