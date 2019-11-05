# 1. 배열의 필요성  
## ① 변수 선언의 편의성 확보  
- 배열을 이용하면 변수의 수가 무수히 많아도 하나의 문장으로 선언 가능  
~~~
// 일반적인 방식의 변수 선언
int num1, num2, num3;
int num4, num5, num6;
int num7, num8, num9;

// 배열 기반의 변수 선언
int[] numArr = new int[9];
~~~  
## ② 순차적 접근  
- 배열과 반복문을 사용할 경우 배열을 구성하는 변수에 순차적으로 접근하는 것이 가능  
~~~
// 일반적인 방식의 변수 선언
num1 = num2 = num3 = 10;
num4 = num5 = num6 = 10;
num7 = num8 = num9 = 10;

// 배열 기반의 변수 선언
for(int i=0;i<9;i++)
{
  numArr[i] = 10;
}
~~~  
#
# 2. 1차원 배열 
## 인스턴스 생성 방식  
- 배열도 둘 이상의 데이터를 저장할 수 있는 형태의 인스턴스이며 일반적인 인스턴스 생성 방식과는 차이 존재
~~~
// 일반적인 배열 인스턴스와 참조 생성 모델
int[] ref = new int[5];

// 배열 인스턴스 생성 예시
int[] arr1 = new int[7];
double[] arr2 = new double[10];
boolean[] arr3 = new boolean[6];
FruitSeller[] arr4 = new FruitSeller[5];
FruitBuyer[] arr5 = new FruitBuyer[8];
~~~  
#
## 접근 방식  
#
## 선언 및 초기화  
#
## 배열과 메소드  
#
# 3. 2차원 배열  
## 1차원 배열과의 차이  
#
# 4. For-each문  
# 5. 
