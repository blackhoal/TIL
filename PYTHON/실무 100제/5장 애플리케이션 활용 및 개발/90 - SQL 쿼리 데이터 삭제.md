# 코드
~~~python
import sqlite3

# DB 연결
conn = sqlite3.connect('./output/sample.db')
cur = conn.cursor()
   
# Product 테이블의 id=1인 행 레코드를 삭제
cur.execute('DELETE from Product where id=1')
conn.commit()

# 변경 내용 확인
cur.execute('SELECT * from Product')
rows = cur.fetchall()
for row in rows:
    print(row)

# DB 연결 종료
conn.close()

~~~

# 출력
~~~
<Output>
(2, '제품 2', 5000, '/product2.html')
(3, '제품 3', 3000, '/product3.html')
(4, '제품 4', 2000, '/product4.html')
(5, '제품 5', 2000, '/product5.html')
~~~
# 필기
~~~
- DELETE FROM 테이블명 WHERE 
~~~
