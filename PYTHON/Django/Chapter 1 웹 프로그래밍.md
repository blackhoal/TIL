# 1. 웹 프로그래밍
## ① 정의
HTTP(s) 프로토콜로 통신하는, 클라이언트와 서버를 개발하는 것  
## ② 웹 클라이언트 방식
웹 클라이언트가 요청하고 웹 서버가 응답하는 클라이언트-서버 프로그램이 동작하는 방식  
일반적인 웹 브라우저(Internet Explorer, Chrome, Firefox)는 이미 웹 클라이언트로서 개발
#### 웹 브라우저를 사용하여 요청
웹 브라우저는 주소창에 입력된 문장을 해석하여 웹 서버에게 HTTP 요청을 보내는 역할을 수행
#### 리눅스 curl 명령을 사용하여 요청
~~~linux
$ curl http://www.example.com
~~~  
HTTP/HTTPS/FTP 등 여러 프로토콜을 사용하여 데이터를 송수신  
curl 명령은 인자로 넘어온 URL로 HTTP 요청을 보내는 웹 클라이언트의 역할을 수행  
#### Telnet을 사용하여 요청
~~~
[]$ telnet www.example.com 80 // Enter 입력
Trying 93.184.216.119
Connected to www.example.com
Escape character is '^]'.
GET / HTTP/1.1                // Enter 입력
Host: www.example.com         // Enter 입력
(빈 칸)                       // Enter 입력
~~~  
telnet 명령은 터미널 창에서 입력하는 내용을 그대로 웹 서버에 전송하는 역할을 수행
#### 직접 만든 클라이언트로 요청
~~~python
C:\>notepad example.py

import urllib.request
print(urllib.request.urlopen("http://www.example.com").read().decode('utf-8'))
~~~  

# 2. HTTP 프로토콜
## ① 정의
## ② 구조
## ③ 처리방식
## ④ 상태 코드

# 3. URL 설계
## ① API 명명 규칙
## ② 간편 URL
## ③ URL과 URI 차이

# 4. 웹 애플리케이션 서버
## ① 웹 서버와 웹 애플리케이션 서버의 구분(S/W 측면)
## ② 정적 페이지 VS 동적 페이지
## ③ 기술 발전에 따른 웹 서버 기술의 변화
## ④ CGI 방식
## ⑤ 웹 서버와 웹 애플리케이션 서버의 구분(H/W 측면) 

