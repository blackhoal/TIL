# 자바 개요
## 1. 객체지향 프로그래밍 언어
~~~
- 클래스와 상속 구조 
→ 확장성이 우수
- 재사용이 용이
~~~
## 2. 플랫폼 독립성
~~~
- OS가 직접 프로그램을 실행시키지 않고 자바 가상머신에 의해 실행되는 구조
→ 다른 언어의 경우 OS 별로 프로그램을 수정하여 개발 환경과 운영 환경 최적화 필요
- 자바의 경우 OS에 의존하는 부분을 ★자바 가상 머신(Java VM)★에서 처리
※ OS에 따라 프로그램을 달리 구현하는 이유?
→ OS에 따라 완성 방식이 다른 일부 기능이 존재하기 때문에
~~~
## 3. 뛰어난 에코 시스템(IT 생태계) 구축 
## 4. 자바 컴파일러(javac.exe)
~~~
- 소스파일(JavaProgram.java)의 소스코드를 가상머신이 이해할 수 있는 자바 바이트코드로 변환하는 프로그램
※ 자바 바이트코드 : 자바 컴파일러에 의해 생성되는 1바이트 크기의 코드
- 자바의 소스코드(.java)가 컴파일러(javac)에 의해 컴파일되고, 컴파일된 파일이 java.exe에 의해 가상머신을 기반으로 실행  
~~~
![1-1](https://user-images.githubusercontent.com/48504392/67631912-e7b05800-f8df-11e9-90c8-2daf05d6d8b1.png)

## 5. 오버헤드로 인한 속도 문제?
`- Java VM에 의한 오버헤드가 존재하나 JIT 컴파일러(Just In Time) 기술로 인해 속도 향상`
## 6. 3 Edition & 2 Environment
~~~
- Java SE(Standard Edition) / Java EE(Enterprise Edition) / Java ME(Micro Edition)
- JRE(Java Runtime Environment) : 자바 애플리케이션의 실행 환경
- JDK(Java Development Kit) : 자바 애플리케이션의 개발 환경 / 실행 환경 / 자바 애플리케이션 개발 도구(소스 파일의 컴파일러 및 디버거) 
→ 애플리케이션의 경우 작동만 원한다면 JRE, 운영하며 디버깅 및 분석 등을 원하는 경우 JDK 설치
~~~
