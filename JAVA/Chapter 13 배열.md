# 1. 배열의 필요성  
## ① 둘 이상의 변수 선언에 편의성 제공  
- 배열을 이용하면 선언할 변수의 수가 무수히 많아도 하나의 문장으로 선언 가능  
~~~
// 일반적인 방식의 변수 선언
int num1, num2, num3;
int num4, num5, num6;
int num7, num8, num9;

// 배열 기반의 변수 선언
int[] numArr = new int[9];
~~~  
## ② 순차적 접근  
- 배열로 선언된 변수는 반복문을 통해 동일 한 코드 패턴을 적용하는 것이 가능  
- 반복문을 사용할 경우 배열을 구성하는 변수에 순차적으로 접근하는 것이 가능  
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
## ① 인스턴스 생성 방식  
~~~
// 일반적인 배열 인스턴스와 참조 생성 모델
int[] ref = new int[5]; // 방법 1 (범용적)
int ref[] = new int[5]; // 방법 2      

// 배열 인스턴스 생성 예시
int[] arr1 = new int[7];
double[] arr2 = new double[10];
boolean[] arr3 = new boolean[6];
FruitSeller[] arr4 = new FruitSeller[5];
FruitBuyer[] arr5 = new FruitBuyer[8];
~~~  
ⓐ 배열도 둘 이상의 데이터를 저장할 수 있는 형태의 인스턴스이며 일반적인 인스턴스 생성 방식과는 차이 존재  
![13-1](https://user-images.githubusercontent.com/48504392/68186068-875b9d80-ffe6-11e9-80ff-8a070b14062e.png)  
ⓑ 인스턴스 배열은 인스턴스로 이루어진 배열이 아닌 **참조변수(인스턴스의 참조값을 저장할 수 있는)로 이루어진 배열**  
#
## ② 접근 방식  
~~~
// 기본 자료형 배열
public static void main(String[] args)
{
  int[] arr = new int[3];
  arr[0] = 1;
  arr[1] = 2;
  arr[2] = 3;
  
  int sum = arr[0] + arr[1] + arr[2];
  System.out.println(sum);
}

// 인스턴스의 배열
public static void main(String[] args)
{
  String[] arr = new int[3];
  arr[0] = 1;
  arr[1] = 2;
  arr[2] = 3;
  
  int sum = arr[0] + arr[1] + arr[2];
  System.out.println(sum);
}
~~~  
ⓐ 0부터 시작되는 인덱스 값을 사용하여 배열에 접근  
ⓑ 인스턴스 배열에는 인스턴스가 아닌 인스턴스의 참조값이 저장  
![13-2](https://user-images.githubusercontent.com/48504392/68186545-c3dbc900-ffe7-11e9-9215-9c54ef188f9c.png)  
#
## ③ 선언과 동시에 초기화  
~~~
int[] arr = new int[3];           // 1. 일반적인 인스턴스 배열의 선언
          ↓
int[] arr = new int[3] {1, 2, 3}; // 2. 초기화할 데이터를 중괄호 내에 나열
          ↓
int[] arr = new int[] {1, 2, 3};  // 3. 길이정보 생략
          ↓
int[] arr = {1, 2, 3};            // 4. 추가로 생략하며 다음과 같은 구문을 통해 선언과 동시에 초기화
~~~  
#
## ④ 배열과 메소드  

#
# 3. 2차원 배열  
## 1차원 배열과의 차이  
#
# 4. For-each문  
# 5. 
