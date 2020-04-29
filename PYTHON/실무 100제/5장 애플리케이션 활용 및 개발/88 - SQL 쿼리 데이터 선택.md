# 코드
~~~python
import sqlite3

# DB 연결
conn = sqlite3.connect('./output/sample.db')
cur = conn.cursor()

# 방법 1 - 모든 행의 레코드를 가져올 때
cur.execute('SELECT * FROM Product')
rows = cur.fetchall()
for row in rows:
    print(row)
print('\n')

# 방법 2 - Where 조건문
cur.execute('SELECT * FROM Product where price = 2000')
rows = cur.fetchall()
for row in rows:
    print(row)
print('\n')

# 방법 3 - where 조건문과 ? placeholder를 활용
cur.execute('SELECT * FROM Product where id = ? and price = ?', (5, 2000))
rows = cur.fetchall()
for row in rows:
    print(row)
    
# DB 연결 종료
conn.close()
~~~

# 출력
~~~
<Output>
(1, '제품 1', 1000, '/product1.html')
(2, '제품 2', 5000, '/product2.html')
(3, '제품 3', 3000, '/product3.html')
(4, '제품 4', 2000, '/product4.html')
(5, '제품 5', 2000, '/product5.html')


(4, '제품 4', 2000, '/product4.html')
(5, '제품 5', 2000, '/product5.html')


(5, '제품 5', 2000, '/product5.html')
~~~

# 필기
~~~
- SELECT 속성명 FROM 테이블명 WHERE 
- fetchall() : 커서 객체에 적용하여 앞에 선택한 모든 행 레코드를 가져오는 메소드
~~~
