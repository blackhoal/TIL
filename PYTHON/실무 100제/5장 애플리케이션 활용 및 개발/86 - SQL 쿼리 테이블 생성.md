# 코드
~~~python
import sqlite3

# DB 연결
conn = sqlite3.connect('./output/sample.db')
cur = conn.cursor()

# Cursor를 통해 SQL 쿼리 실행
sql = '''
CREATE TABLE Product (
id integer primary key autoincrement,
title text not null,
price integer,
link text)
'''

cur.execute(sql)

# DB 변경사항 저장
conn.commit()

# DB 연결 종료
conn.close()
~~~

# 출력
![200429_1](https://user-images.githubusercontent.com/48504392/80577500-f7048f80-8a41-11ea-89e8-d96bee5a6d13.png)  

# 필기
~~~
- autoincrement : id의 값을 1씩 순차적으로 증가시키는 옵션
- execute() : 커서 객체에 적용하여 SQL 쿼리를 DB 연결 객체로 전달하는 메소드
- commit() : SQL 쿼리에 따른 변경사항을 DB에 최종 반영하는 메소드
~~~
