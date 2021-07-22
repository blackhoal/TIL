# 1. 관점 지향 프로그래밍(Aspect Oriented Programming, AOP)
## 1-1. AOP 개요
![20-1](https://user-images.githubusercontent.com/48504392/126653679-75d17d79-c428-45dd-a39f-323332bc4038.png)  
- 메소드 내의 주기능과 보조 기능을 분리 후 선택적으로 메소드에 적용하여 사용한다는 개념
- 전체 코드에 흩어져 중복되는 보조 기능을 하나의 장소에 모아서 관리
- 메소드마다 보조 기능을 일일이 구현할 필요 없이 한 번의 설정으로 메소드마다 보조 기능을 적용 가능
- 원할 때 부품을 가져다 쓰듯이 사용하므로 코드의 단순성 및 가독성 향상
## 1-2. AOP 관련 용어
![4-AOP 용어](https://user-images.githubusercontent.com/48504392/126654817-8c9726b4-d306-4362-9d43-d7572b7fa6c8.png)  
|용어|설명|
|:--:|:--:| 
|aspect|구현하고자 하는 보조 기능|
|advice|aspect의 실제 구현체(클래스)|
|joinpoint|advice를 적용하는 지점|
|pointcut|advice가 적용되는 대상|
|target|advice가 적용되는 클래스|
|weaving|advice를 주기능에 적용하는 것|
## 1-3. Weaving 방식 3가지
- 컴파일 시에 Weaving
    - AspectJ에서 사용하는 방식
    - 컴파일할 때 알맞은 위치에 공통 기능을 삽입
- 클래스 로딩 시에 Weaving
    - AspectJ에서 사용하는 방식
    - 로딩한 클래스의 바이너리 정보를 변경하여 알맞은 위치에 공통 기능을 삽입한 새로운 바이너리 코드를 사용
    - 원본 클래스 파일은 변경 X
- 런타임 시에 Weaving
    - 동적 AOP
    - 프록시(대리자)를 생성하여 핵심 로직을 구현한 객체에 접근
## 1-4. Advice 종류
|Advice 타입|인터페이스|설명 1|설명 2|
|:--:|:--:|:--:|:--:|
|Before advice|org.springframework.aop.MethodBeforeAdvice|타겟의 메소드가 실행되기 이전 시점에 처리할 필요가 있는 보조 기능을 정의|joinpoint 앞에 실행되는 Advice|
|After returning advice|org.springframework.aop.AfterReturningAdvice|타겟의 메소드가 실행된 이후 시점에 처리할 필요가 있는 보조 기능을 정의|joinpoint 메소드 호출이 종료된 후 실행되는 Advice|
|After throwing advice|org.springframework.aop.ThrowsAdvice|타겟의 메소드가 예외를 발생한 이후 시점에 처리할 필요가 있는 보조 기능을 정의|예외가 던져질 때 실행되는 Advice|
|Around advice|org.aopalliance.intercept.MethodInterceptor|타겟의 메소드가 실행되기 이전 시점과 이후 시점에 모두 처리할 필요가 있는 보조 기능을 정의|joinpoint 앞과 뒤에서 실행되는 Advice|
## 1-5. Advice 태그
|태그명|설명|
|:--:|:--:|
|<aop:before>|메소드 실행전에 적용되는 Advice를 정의|
|<aop:after-returning>|메소드가 정상적으로 실행 된 후에 적용되는 Advice를 정의|
|<aop:after-throwing>|메소드가 예외를 발생시킬 때 적용되는 Advice를 정의|
|<aop:after>|메소드가 정상적으로 실행되는지 또는 예외를 발생시키는지 여부에 상관없이 Advice를 정의|
|<aop:around>|- 메소드 호출 이전, 이후, 예외발생 등 모든 시점에 적용 가능한 Advice를 정의|

## 1-6. Spring Framework에서 AOP 기능을 구현하는 방법
- XML 기반의 POJO 클래스를 이용한 AOP 구현
    - 보조 기능을 제공하는 Advice 클래스를 작성
    - XML 설정 파일에 <aop:config>를 이용하여 aspect를 설정(advice와 pointcut을 설정)
- @Aspect 어노테이션을 이용한 AOP 구현
    - @Aspect 어노테이션을 이용해서 부가기능을 제공하는 Aspect 클래스를 작성
    - Aspect 클래스는 advice를 구현하는 메소드와 pointcut을 포함
    - XML 설정 파일에 <aop:aspectj-autoproxy />를 설정
## 1-7. Spring API를 이용한 AOP 구현 과정
```
① 타깃(Target) 클래스를 지정  
        ↓
② 어드바이스(Advice) 클래스를 지정  
        ↓
③ 설정 파일에서 포인트컷(Pointcut)을 설정  
        ↓
④ 설정 파일에서 어드바이스(Advice)와 포인트컷(Pointcut)을 결합하는 어드바이저(Advisor)를 설정  
        ↓
⑤ 설정 파일에서 스프링의 ProxyFactoryBean 클래스를 이용해 타킷(Target)에 어드바이스(Advice)를 설정  
        ↓
⑥ getBean() 메소드로 빈 객체에 접근하여 사용  
```
____
#

# Conference
[참조 1](https://www.youtube.com/watch?v=tv1NVlxddz8&list=PLuvImYntyp-s76lJiia8YfskDRAypeoyh&index=141)  
[참조 2](https://snoopy81.tistory.com/286)  
[참조 3](https://shlee0882.tistory.com/206)  
