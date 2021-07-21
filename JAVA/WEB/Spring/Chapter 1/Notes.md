# 1. 프레임워크
## 1-1. 모델2 구조의 한계
- 모델1 구조보다 개발 및 유지관리가 쉬우나 새로운 애플리케이션 개발 시 `일일이 처음부터 다시 개발해야된다는 단점`이 존재
- 해결책 : 많이 사용하는 기능은 미리 만들어서 제공하고, 그 외에 필요한 부분만 추가 및 수정
## 1-2. 프레임워크의 정의
- 일반적 의미 : 어떤 것을 구성하는 구조 또는 뼈대
- 소프트웨어적 의미 : 기능을 미리 클래스나 인터페이스 등으로 만들어 제공하는 반제품
## 1-3. 프레임워크의 장점
- `일정한 기준`에 따라 개발이 진행되므로 개발 생산성과 품질이 보장된 애플리케이션 개발이 가능
- 개발 후의 유지보수 및 기능의 확장성에서도 높은 품질을 보장
____
#

# 2. 스프링 프레임워크
## 2-1. 스프링이란?
- 자바 웹 애플리케이션 개발을 위한 오픈 소스 프레임워크
- EJB(Enterprise Java Bean)보다 가벼운 경량 프레임워크
- 경량 컨테이너
## 2-2. 컨테이너란?
![18-4](https://user-images.githubusercontent.com/48504392/126538609-f1b1ad04-2656-4d78-85b9-6d4a997d1b79.png)  
![18-5](https://user-images.githubusercontent.com/48504392/126538728-76374527-5e7d-406d-9129-2ddf15f7c03f.png)  
- 애플리케이션 객체의 생명 주기와 설정을 포함하고 관리
- 대표적으로 톰캣이 서블릿 컨테이너이며, 톰캣을 실행 시 서블릿의 생성, 초기화, 서비스 실행, 소멸에 관한 모든 권한을 가지고 서블릿을 관리
- 스프링 또한 여러 가지 빈(클래스 객체)을 개발자가 아닌 `스프링`이 권한을 가지고 직접 관리
- 어플리케이션 컨텍스트 = IoC Container = Bean Factory = Spring Container
- Spring Container는 객체를 관리하는 컨테이너이며 BeanFactory / ApplicationContext / WebApplicationContext Interface를 구현
## 2-3. EJB(Enterprise Java Bean)
![1 - EJB 개요](https://user-images.githubusercontent.com/48504392/126537151-cc53c418-2bfe-40d8-8191-b25d14a000bc.png)  
## 2-4. 스프링의 특징
![18-1](https://user-images.githubusercontent.com/48504392/126527921-6fea1bc4-32d9-455c-be37-70668fd5a308.png)  
- EJB보다 가볍고 배우기 쉬우며 경량 컨테이너의 기능을 수행
- POJO(Plain Old Java Object, 자바 SE로 된 자바 객체)를 자바 EE에 의존적이지 않게 연결
- 제어 역행(IoC, Inversion of Control) 기술을 이용하여 애플리케이션 간의 느슨한 결합을 제어
- 의존성 주입(DI, Dependency Injection) 기능을 지원
- 관점 지향(AOP, Aspect-Oriented Programming) 기능을 이용하여 자원을 관리
- 영속성과 관련된 다양한 서비스를 지원
- 수많은 라이브러리와의 연동 기능을 지원
## 2-5. 스프링 용어 정리
- POJO(Plain Old Java Object)
    - 일반적인 스프링의 자바빈즈 객체를 의미
    - JAVA 언어 이외에 어떤 제약도 받지 않는 개체
- 의존성 주입(DI, Dependency Injection)
    - 각각의 계층이나 서비스 간에 의존성이 존재할 경우 프레임워크가 서로 연결
    - 클래스 객체를 개발자가 코드에서 생성하지 않고 프레임워크가 생성하여 사용
- 제어 역행(IoC, Inversion of Control)  
    - 서블릿이나 비 등을 개발자가 코드에서 생성하지 않고 프레임워크가 직접 수행
- 관점 지향(AOP, Aspect-Oriented Programming)
    - 핵심 기능 외의 부수 기능을 분리 구현함으로써 모듈성을 증가
    - 트랜잭션이나 로깅, 보안과 같이 여러 모듈에서 공통적으로 사용하는 기능 등을 분리
- 스프링 빈
    - 스프링 컨테이너에서 관리되는 객체
## 2-6. 스프링 주요 기능
![18-2](https://user-images.githubusercontent.com/48504392/126529368-281ef7cd-a797-47a1-956b-644eb2984ef0.png)  
![18-6](https://user-images.githubusercontent.com/48504392/126543959-4f836e51-786f-441d-8618-bc2271f887df.png)
- Spring Core
    - 스프링 프레임워크의 근본이 되는 요소
    - 다른 기능과 설정을 분리하기 위한 IoC 또는 DI 기능을 제공
    - BeanFactory를 기반으로 Bean 클래스를 제어하는 기능을 지원
- Spring Context
    - 스프링의 기본 기능으로서 애플리케이션의 각 기능을 하난 빈(Bean)에 대한 접근 방법을 제공
    - Spring Core 바로 위에 있으며 JNDI, EJB 등을 위한 Adapter 등을 포함
- Spring DAO
    - JDBC 기반하의 DAO 개발을 더욱 쉽고 일관된 방법으로 개발할 수 있도록 지원
- Spring ORM
    - Object Relation Mapping 프레임워크인 하이버네이트나 마이바티스 같은 영속성 관련 프레임워크와 연동된 기능을 제공
- Spring AOP
    - 관점 지향(AOP)을 지원하는 기능
    - AOP Alliance 기반하에서 개발
- Spring Web
    - 웹 애플리케이션 개발에 필요한 Web Application Context와 Multipart Request 등의 기능을 제공
    - Struts, Webwork와 같은 프레임워크의 통합을 지원하는 부분을 담당
- Spring Web MVC
    - Spring 프레임워크에서 독립적으로 Web UI Layer에 MVC 패턴(Model-View-Controller)의 구현을 지원하기 위한 기능
    - 이전 Struts, Webwork가 담당했던 기능을 Spring Web MVC를 이용하여 대체 가능
    - Velocity, Excel, PDF와 같은 다양한 UI 기술들을 사용하기 위한 API를 제공
____
#

# 3. Conference
[참조 1](https://goddaehee.tistory.com/156)  
[참조 2](https://www.youtube.com/watch?v=ENObbarK8G4&list=PLuvImYntyp-s76lJiia8YfskDRAypeoyh&index=135)  
____
#
