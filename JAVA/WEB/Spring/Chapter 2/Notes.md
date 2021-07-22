# 1. 의존성 주입
## 1-1. 의존성 주입이란?
- 연관 관계를 개발자가 직접 코딩을 통해 컴포넌트(클래스)에 부여하는 것이 아니라 컨테이너가 연관 관계를 직접 규정하는 것
- 코드에서 직접적인 연관 관계가 발생하지 않으므로 각 클래스의 변경이 자유로워 `약한 결합도`를 가짐
- DI를 적용하려면 각 객체를 생성 및 관리할 조립기가 필요하므로 DI 패턴을 지원하는 프레임워크 사용을 권장
## 1-2. 강한 결합과 약한 결합
- 현실에서 자동차의 에어컨이 고장날 경우 에어컨만 수리하거나 교체하는 것이 이상적
- 그러나 만약 에어컨 기능이 자동차 엔진과 관련이 있게 설계가 되어있을 경우 에어컨에 작은 문제가 발생해도 자동차 엔진까지 점검 필요
- 자동차의 부품은 같은 기능끼리는 강하게 결합하고, 관련이 크게 없는 기능과는 서로 영향을 주지 않도록 만드는 것이 이상적인 자동차의 구조
- 프로그램 또한 서로 관련이 있는 기능끼리는 `강하게 결합`하고, 관련이 없는 기능끼리는 `약하게 결합`하는 것이 좋은 프로그램의 기준
## 1-3. 자바 코드로 직접 구현할 때의 문제점
- 현재 DAO에서 오라클로 연동하여 구현한 상태에서 데이터베이스를 MySQL로 변경하는 경우 DAO 및 Service 클래스의 기능을 일일이 변경 필요
- 다른 클래스의 변경 사항이 연속적으로 다른 부분에 영향을 미칠 경우(DAO-Service) 복잡한 문제가 발생할 가능성 존재
## 1-4. 의존성 주입의 장점
- 클래스 간의 의존 관계를 최소화하여 코드의 단순화 가능
- 애플리케이션을 더욱 쉽게 유지 및 관리 가능
- 기존의 구현 방식은 개발자가 직접 코드 내에서 객체의 생성과 소멸을 제어했으나, 의존성 주입의 경우 객체의 생성, 소멸 및 객체 간의 의존 관계를 `컨테이너`가 제어
## 1-5. 제어의 역전(IoC)
![18-3](https://user-images.githubusercontent.com/48504392/126537642-eacb749b-b682-49f3-b63f-0c6261320bc5.png)  
- 기존 코드에서는 개발자가 직접 객체를 제어했으나, 스프링 프레임워크에서는 `스프링`이 직접 객체를 제어
- Component dependency resolution, configuration 및 lifecycle을 해결하기 위한 디자인 패턴
- DIP(Dependency Inversion Principle) / Hollywood Principle(Don't call us we'll call you)로도 호칭
- 특정 작업을 수행하기 위해 필요한 다른 컴포넌트를 직접 생성 및 획득보다 이러한 의존성을 외부에 정의하고 컨테이너에 의해 공급받는 방식으로 동작
- 클래스 및 컴포넌트의 재사용성 증가 / 단위 테스트 용이 / Assemble과 Configure를 통한 시스템 구축 용이
## 1-6. IoC와 DI 간의 관계
![19-1](https://user-images.githubusercontent.com/48504392/126538364-14b6edda-81dc-47ca-8b9a-0e71d84c2a57.png)  
- 일반적으로 스프링에서는 DI로 IoC의 기능을 구현하므로 IoC보다는 DI라는 용어를 더 많이 사용
____
#

# 2. DI 실습
## 2-1. 스프링의 의존성 주입 방법
- 생성자에 의한 주입
```xml
<!-- 인자가 1개인 생성자 -->
<bean id = "personService1" class = "com.spring.ex02.PersonServiceImpl">
    <constructor-arg value = "이순신"/>
</bean>

<!-- 인자가 2개인 생성자 -->
<bean id = "personService2" class = "com.spring.ex02.PersonServiceImpl">
    <constructor-arg value = "손흥민"/>
    <constructor-arg value = "23"/>
</bean>
```
```java
public class PersonServiceImpl implements PersonService {
	private String name;
	private int age;

    // 인자가 1개인 생성자
	public PersonServiceImpl(String name) {
		this.name = name;
	}
	
    // 인자가 2개인 생성자
	public PersonServiceImpl(String name, int age) {
		this.name = name;
		this.age = age;
	}

	@Override
	public void sayHello() {
		System.out.println("이름 : " + name);
		System.out.println("나이 : " + age + "세");
	}
}
```
- Setter에 의한 주입
```xml
<bean id = "personService" class = "com.spring.ex01.PersonServiceImpl">
    <property name = "name">
        <value>홍길동</value>
    </property>
</bean>
```
```java
public class PersonServiceImpl implements PersonService {
	private String name;
	private int age;
	
	public void setName(String name) {
		this.name = name;
	}
	
	@Override
	public void sayHello() {
		System.out.println("이름 : " + name);
		System.out.println("나이 : " + age);
	}
}
```
## 2-2. <bean> 태그에 사용되는 속성의 종류
|속성명|설명|
|:--:|:--:| 
|id|빈 객체의 고유 이름으로 빈 id를 이용하여 빈에 접근|
|name|객체의 별칭|
|class|생성할 클래스이며 패키지명까지 입력|
|constructor-arg|생성자를 이용하여 값을 주입할 때 사용|
|property|setter를 사용하여 값을 주입할 때 사용|
|lazy-init|빈 생성을 톰캣 실행 시점이 아닌 해당 빈 요청 시 메모리를 생성 가능|

## 2-3. 참조형 속성 주입
![19-3](https://user-images.githubusercontent.com/48504392/126647145-57eb2263-d525-41e7-9e1a-0e63469ee9df.png)  
![19-2](https://user-images.githubusercontent.com/48504392/126646951-fcf5c69d-0eb9-4d9b-9734-9eff4f8dbf68.png)  
- 주입되는 데이터가 기본형이 아닌 참조형일 경우 `ref 속성`으로 설정
```xml
<bean id="memberService" class="com.spring.ex03.MemberServiceImpl">
    <property name="memberDAO" ref="memberDAO" />
</bean>
<bean id="memberDAO" class="com.spring.ex03.MemberDAOImpl" />
```

## 2-4. lazy-init
```xml
<beans>
    <!-- 
        - firstBean과 thirdBean은 애플리케이션 실행 시 빈이 생성 
        - secondBean은 context.getBean() 호출 후에 빈이 생성
    -->
	 <bean id="firstBean" class="com.spring.ex04.First" lazy-init="false" />
    <bean id="secondBean" class="com.spring.ex04.Second" lazy-init="true" />
    <bean id="thirdBean" class="com.spring.ex04.Third" lazy-init="default" />
</beans>
```
```java
public class LazyTest {
	public static void main(String[] args) {
		ApplicationContext context = new FileSystemXmlApplicationContext("lazy.xml");
		System.out.println("SecondBean 얻기");
		context.getBean("secondBean");
	}
}
```
- 빈 생성을 `톰캣 실행 시점`이 아닌 `해당 빈 요청 시` 메모리에 생성 가능
- true, false, default 값을 지정 가능
- 설정하지 않거나 `false`로 설정 후 `톰캣 실행 시` 빈이 생성
- `true`로 설정 후 `해당 빈 사용 시` 빈이 생성
____
#
    
# 3. Conference
[참조 1](https://www.youtube.com/watch?v=lECeDtOusiE&list=PLuvImYntyp-s76lJiia8YfskDRAypeoyh&index=136)
