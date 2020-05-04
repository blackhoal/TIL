# ETL이란?
> -  추출(Extract) + 변환(Transform) + 적재(Load)
> - 저장소의 데이터를 필요에 따라 다른 저장소로 이동시키는 것  

# 추출(Extract)
~~~python
import sqlite3

conn = sqlite3.Connection("test.db")
c = conn.cursor()

# 연, 월, 일, 시분을 가져올 쿼리
sql = '''
    select 연, 월, 일, 시, 분
    from origin_table
'''

# 각 결과 값을 적재할 리스트
year = []
month = []
day = []
hour = []
minute = []

# 쿼리 실행
c.execute(sql)

# 쿼리 결과를 리스트에 추가
for row in c:
    year.append(row[0])
    month.append(row[1])
    day.append(row[2])
    hour.append(row[3])
    minute.append(row[4])
    
# 결과 확인
print(year)
print(month)
print(day)
print(hour)
print(minute)
~~~

# 변환(transform)
~~~python
def num_list_to_double_digit(list):
    # 2자리 이하의 숫자로 구성된 리스트를 입력 받아 1자리일 경우 앞에 0을 붙여 반환
    list = [str(data) for data in list]
    
    for i, data in enumerate(list):
        list[i] = data if len(data) == 2 else '0' + data
        
    return list

# hour = num_list_to_double_digit(hour)
# minute = num_list_to_double_digit(minute)

hm = [hour[i] + minute[i] for i in range(len(hour))]
print(hm)
~~~

# 적재(Load)
~~~python
sql_create_transformed_table = """
    create table transformed_table(연, 월, 일, 시분)
"""

# 데이터 삽입 쿼리
sql_insert_transformed_data = """
    INSERT INTO transformed_table VALUES(?, ?, ?, ?)
"""

# 테이블 생성
c.execute(sql_create_transformed_table)

# 데이터 삽입
for i in range(len(year)):
    c.execute(sql_insert_transformed_data, (str(year[i]), str(month[i]), str(day[i]), str(hm[i])))
    
c.execute("select * from transformed_table limit 1")
for row in c:
    print(row[0], row[1], row[2], row[3])
~~~
