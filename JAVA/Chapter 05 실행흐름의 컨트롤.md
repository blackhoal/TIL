# 1. If-else문  
## ① 구조  
~~~
if (true or false)
{
  true일 경우 실행되는 영역;
}
else
{
  false일 경우 실행되는 영역;
}
~~~  
## ② 특징    
- If-else문은 하나의 문장
→ 한 줄에 전부를 표현할 필요는 없으나, 중간에 다른 문장을 삽입할 경우 에러가 발생
- (조건)? A : B  
→ 유사한 성격의 조건 연산자이며, 조건이 true일 경우 A가 반환되고 false일 경우 B가 반환  
예시)  
int big  
int n1 = 50, n2 = 100;  
big = (n1>n2)? n1: n2  
→ n1>n2(조건)이 true일 경우 변수 big에 n1(50) 값을 저장, false일 경우 변수 big에 n2(100) 값을 저장  

# 2. switch문  
## ① 구조  
~~~
switch(n)
{
  case 1:
  n이 1일 때 실행되는 영역
  case 2:
  n이 2일 때 실행되는 영역
  case 3:
  n이 3일 때 실행되는 영역
  default:
  n에 해당되는 레이블이 없을 경우 실행되는 영역
}
~~~  
~~~  
switch(n)
{
  case 1 : case 2 : case 3:
  n이 1, 2, 3일 때 실행되는 영역
  case 4 : case 5 :
  n이 4, 5일 때 실행되는 영역
}
~~~  
## ② 특징  
- case와 default는 레이블이다  
→ 레이블 : 위치를 표시하기 위해 사용하며 실행 위치를 지정하는 역할  
- Case 레이블 구성에서 n에는 정수 또는 문자만 입력 가능  
★ case에 문자가 올 경우 ASCII 코드로 변환되어 상수값으로 인식()  
- Default 레이블은 불필요할 경우 생략 가능  

# 3. while문  
## ① 구조  
While(반복조건)
{
  반복조건이 true일 때 반복되는 영역
}  
## ② 특징  
- 반복조건을 먼저 검사 후 반복영역의 실행여부를 결정  
- 반복조건을 먼저 검사하기 때문에 반복영역이 아예 실행되지 않는 경우 有  
- 중괄호의 경우 반복되는 영역이 두 문장 이상일 경우 사용  

# 4. do-while문  
## ① 구조  
~~~
do
{
  반복되는 영역
} while(반복조건);
~~~  
## ② 특징  
- ★ While문과 달리 반복되는 영역을 한 번 실행한 후 반복조건을 검사
- 반복 영역을 먼저 실행하기 때문에 반복조건이 만족하지 않아도 최소 한 번 실행 

# 5. for문	 
## ① 구조  
~~~
for(ⓐint num=0; ⓑnum<5 ; ⓒnum++)
{
ⓓSystem.out.println("I love Java");
}
~~~  
ⓐ 반복의 횟수를 세기 위한 변수의 선언 및 초기화  
ⓑ 반복의 조건  
ⓒ 반복의 조건을 무너뜨리기 위한 연산  
ⓓ 반복의 조건을 만족할 때 수행되는 영역  
★ 루프의 흐름  
- 첫 번째 루프  
ⓐ → ⓑ → ⓓ → ⓒ  
- 두 번째 루프  
ⓑ → ⓓ → ⓒ  
- 일정 이상 후 ⓑ의 조건이 성립되지 않을 때의 루프  
이전까지의 변수값을 보유한 채로 루프문 탈출  
## ② 특징  
- while문과 달리 반복에 필요한 모든 것을 한 줄에 나열할 수 있는 장점
- 콤마 연산자를 이용하여 둘 이상의 변수 선언 및 연산문 삽입 가능
for(int i=0, j=7; i<7; i++, j--)
System.out.println("I love Java" + i + j)
→ I love Java 07
I love Java 16
I love Java 25
I love Java 34

# 6. continue
## ① 구조
int num=0;
int count=0;
while(num++<100)
{
if(num%5!=0 || num%7!=0)
continue;

count++;
System.out.println(num);
}

## ② 특징
- 실행하던 반복문의 나머지 영역을 생략하고 프로그램의 흐름을 반복문의 조건검사 영역으로 이동

# 7. break문
## ① 구조
int num=1;
boolean search=false;
while(num<100)
{
if(num%5==0 && num%7==0)
{
search=true;
break;
}
num++;
}
## ② 특징
- 반복문을 빠져나가는 용도로 사용
- 가장 근접한 거리에서 자신을 감싸는 반복문을 찾은 후 해당 반복문을 탈출
★ 위의 구조에서 break문을 직접 감싸는 것은 if문일지라도 if문은 반복문이 아니므로 구조상 한 단계 위의 반복문인 while문을 찾아 탈출

# 8. 무한 루프
## ① 구조
do
{
반복 영역
} while(true);

while(true)
{
반복 영역
}

for( ; ;)
{
반복 영역
}
## ② 특징
- break문과 결합되어 최소공배수 등을 구할 때 사용
→ 자연수의 크기를 예측할 필요가 없기 때문에 무한루프를 사용

# 9. 반복문의 중첩
## ① 구조
for(int i=0; i<3 ; i++)
{
for(int j=0; j<3 ; j++)
반복 문장
}

while(i<10)
{
while(j<10)
{
반복 문장
}
}
## ② 특징
- 구구단과 같이 연속된 중첩이 필요할 경우에 사용
- Break문을 사용할 경우 탈출할 수 있는 반복문은 1개뿐
★ 중첩된 반복문 전체를 벗어나려면 OuterLoop 사용
outerLoop:
for(int i=0; i<3 ; i++)
{
for(int j=0; j<3 ; j++)
반복 문장
if(조건)
break outerLoop;
}


