# 코드
~~~python
import sqlite3

# DB 연결(DB가 없을 경우 신규 생성)
conn = sqlite3.connect('./output/sample.db')
print(conn)

# Connection 객체에서 Cursor 생성
cur = conn.cursor()
print(cur)

# DB 연결 종료
conn.close()
~~~
~~~
<Output>
<sqlite3.Connection object at 0x0000022844E15D50>
<sqlite3.Cursor object at 0x0000022844E1A5E0>
~~~
# 필기
~~~
- cursor() : DB에 SQL 쿼리를 보내거나 받을 수 있는 커서를 오픈하는 역할의 메소드
~~~
