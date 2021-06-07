# JDBC 프로그래밍 절차
## 1. JDBC 드라이버 설치(ojdbc6.jar)
[Link](https://www.oracle.com/database/technologies/jdbc-drivers-12c-downloads.html)
## 2. JDBC 드라이버 로드(ojdbc6.jar 압축파일에 있는 메인 역할용 클래스를 JVM에 로드)
```java
import java.sql.DriverManager;
import java.sql.SQLException;

public class JDBCTest {
	public static void main(String[] args) {
		String driver = "oracle.jdbc.driver.OracleDriver";
		try {
			Class.forName(driver);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} 
	}
}
```
## 3. DB와 연결
```java
import java.sql.DriverManager;
import java.sql.SQLException;

public class JDBCTest {
	public static void main(String[] args) {
		String driver = "oracle.jdbc.driver.OracleDriver";
		String url = "jdbc:oracle:thin:@localhost:1521:xe";
		String user = "아이디";
		String password = "비밀번호";
		try {
			Class.forName(driver);
			DriverManager.getConnection(url, user, password);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
    }
	}
}
```
## 4. SQL 구문을 DB에 송신
## 5. SQL 실행 결과를 수신
## 6. 결과 활용
## 7. DB 연결 해제
___
