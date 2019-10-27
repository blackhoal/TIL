1. 대입 연산자와 산술 연산자  
![4-1](https://user-images.githubusercontent.com/48504392/67632012-0fec8680-f8e1-11e9-83e1-d26461fd79ef.png)  
① 나눗셈 연산자  
- 연산 방식은 ★피연산자의 자료형에 따라 결정
7 / 3  
→ 결과값 2(정수형 나눗셈)  
7.0f / 3.0f  
→ 결과값 2.3333333(float형 나눗셈)  
(float)7 / 3  
→ 7.0f / 3  
→ 7.0f / 3.0f  
→ 결과값 2.3333333(float형 나눗셈)  
★ (float)는 (type) 연산자이며 구분자와 혼동 X  
② 나머지 값 연산자  
- 실수형 나눗셈의 나머지는 존재 X  
7.2 % 2.0  
→ 컴파일 오류가 발생하지 않고 1.200000002가 출력되지만 수학적으로 문제가 있는 구문  
③ 구분자  
- 묶여 있는 부분을 먼저 연산  
7 - (2 * 3) → 1  
- 수학에서의 소괄호와 의미 동일  
- 연산자의 우선순위를 기억하지 않아도 원하는 형태의 연산문 구성 가능  

2. 복합 대입 연산자  
![4-2](https://user-images.githubusercontent.com/48504392/67632026-33afcc80-f8e1-11e9-9887-ede6a5609de2.png)
- 대입 연산자가 다른 연산자와 묶여서 정의된 형태의 연산자
- 예제
int n = 5;
n * 2.2;
→ n이 int형에서 double형으로 형 변환 후 연산하여 11.0이 되고, 다시 int형인 11로 형 변환되어 n에 저장되어 2번의 형 변환이 이루어짐

3. 관계 연산자  
![4-3](https://user-images.githubusercontent.com/48504392/67632029-40ccbb80-f8e1-11e9-96e6-5722da6380c8.png)
- A == B → A와 B의 값이 동일하면 true가 반환되고, 다를 경우 false가 반환
- A  != B → A와 B의 값이 동일하면 false가 반환되고, 다를 경우 true가 반환
- A > B, A < B, A <= B, A >= B
→ A와 B의 값을 비교한 결과가 부등호와 동일하면 true, 다를 경우 false가 반환

4. 논리 연산자  
![4-4](https://user-images.githubusercontent.com/48504392/67632038-593cd600-f8e1-11e9-854a-c149613fdf4d.png)
- A && B
True && True → True
True && False → False
False && True → False
False && False → False
- A || B
True || True → True
True || False → True
False || True → True
False || False → False
- !A
A = True → False
A = False → True
- 예제
Int num1 = 10, num2 = 20;
boolean result = (num1==10 && num2==20)
→ result = True
★ 연산자의 우선순위에 상관없이 == 연산자가 먼저 진행되어야 한다.
→ num1==10 && num2==20
→ True && True
→ True

5. SCE(Short-Circuit Evaluation)
- && 연산자의 왼쪽 피연산자가 False이거나, || 연산자의 왼쪽 피연산자가 True일 경우 연산 결과는 정해지므로 연산속도의 향상을 위해 오른쪽 피연산자는 실행하지 않는 특성
- 예제
int num1, num2 = 0;
result = (num1+=10)<0 && (num2+=10)>0;
→ num1 = 10, ★num2 = 0, result = False

6. 부호 연산자
- 이항연산자로써 덧셈과 뺄셈의 기능 제공
- 부호연산의 기능
short n2 = 7;
int n3 = +n2;
int n4 = -n2;
→ n3 = 7, n4 = -7
★ + 연산자의 존재 의의
→ 실제 연산을 거치면서 따로 변화는 없으나 코드가 컴파일되도록 허용하기 위해 사용

7. 증감 연산자(prefix, postfix)
- 변수에 저장된 값을 1 증가하거나 감소시키는 연산자
- A = ++ B;
→ A = B + 1
- A = -- B;
→ A = B - 1
- prefix와 postfix의 차이
→ ★적용이 되는 시점의 차이  
![4-5](https://user-images.githubusercontent.com/48504392/67632041-60fc7a80-f8e1-11e9-9726-c8e749793b91.png)

int a1 = 7, a2;
a2 = (--a1) + 5;
→ a1 = 6, a2 = 11 (감소 이후 대입)
int a1 = 7, a2;
a2 = (a1--) + 5;
→ a1 = 6, a2 = 12 (감소 이전 대입)

8. 비트 연산자  
![4-6](https://user-images.githubusercontent.com/48504392/67632049-770a3b00-f8e1-11e9-984b-70b1de9cc10e.png)
- 비트단위로 연산을 진행하는 연산자
- 피연산자는 무조건 정수
- 13 & 7
13 = 00001101 
7  = 00000111
→ 논리곱 연산으로 출력값 5(00000101)  
- 13 | 7
13 = 00001101 
7  = 00000111
→ 논리합 연산으로 출력값 10(00001010)  
- 13 ^ 7
13 = 00001101 
7  = 00000111
→ 배타적 논리합 연산으로 출력값 10(00001010)  

9. 비트 쉬프트 연산자  
![4-7](https://user-images.githubusercontent.com/48504392/67632050-7f627600-f8e1-11e9-9f10-722c82e5fd44.png)
- 피연산자의 비트 열을 왼쪽 또는 오른쪽으로 이동시키는 연산자
