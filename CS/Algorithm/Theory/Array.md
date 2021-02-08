# 배열 개요
1. 데이터를 나열하고 각데이터를 인덱스에 대응하도록 구성한 데이터 구조
2. 파이썬에서는 리스트 타입을 통해 배열 구현

# 배열의 필요성
1. 같은 종류의 데이터를 효율적으로 관리하기 위해 사용
2. 같은 종류의 데이터를 순차적으로 저장

# 배열의 장단점
## 장점
1. 빠른 접근 가능
2. 첫 데이터의 위치에서 인덱스 번호를 통해 상대적인 위치로 데이터 접근

## 단점
1. 데이터의 추가 및 삭제가 어려움
2. 미리 최대 길이에 대한 지정이 필요

# 실습
## 실습 1 - 주어진 2차원 배열에서 9, 8, 7 을 순서대로 출력
~~~python
data_list = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
~~~
~~~python
# 작성 
for i in range(len(data_list[2])):
    print(data_list[2][2-i])
~~~
## 실습 2 - dataset 리스트에서 전체 이름 안에 M 은 몇 번 나왔는지 빈도수 출력
~~~python
dataset = ['Braund, Mr. Owen Harris',
'Cumings, Mrs. John Bradley (Florence Briggs Thayer)',
'Heikkinen, Miss. Laina',
'Futrelle, Mrs. Jacques Heath (Lily May Peel)',
'Allen, Mr. William Henry',
'Moran, Mr. James',
'McCarthy, Mr. Timothy J',
'Palsson, Master. Gosta Leonard',
'Johnson, Mrs. Oscar W (Elisabeth Vilhelmina Berg)',
'Nasser, Mrs. Nicholas (Adele Achem)',
'Sandstrom, Miss. Marguerite Rut',
'Bonnell, Miss. Elizabeth',
'Saundercock, Mr. William Henry',
'Andersson, Mr. Anders Johan',
'Vestrom, Miss. Hulda Amanda Adolfina',
'Hewlett, Mrs. (Mary D Kingcome) ',
'Rice, Master. Eugene',
'Williams, Mr. Charles Eugene',
'Vander Planke, Mrs. Julius (Emelia Maria Vandemoortele)',
'Masselmani, Mrs. Fatima',
'Fynney, Mr. Joseph J',
'Beesley, Mr. Lawrence',
'McGowan, Miss. Anna "Annie"',
'Sloper, Mr. William Thompson',
'Palsson, Miss. Torborg Danira',
'Asplund, Mrs. Carl Oscar (Selma Augusta Emilia Johansson)',
'Emir, Mr. Farred Chehab',
'Fortune, Mr. Charles Alexander',
'Dwyer, Miss. Ellen "Nellie"',
'Todoroff, Mr. Lalio']
~~~
~~~python
# 작성 답안
cnt = 0
for i in range(len(dataset)):
    for j in dataset[i]:
        if j == 'M':
            cnt += 1
~~~
