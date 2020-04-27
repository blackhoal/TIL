# 코드
~~~python
import requests
from bs4 import BeautifulSoup

url = "https://en.wikipedia.org/wiki/Seoul_Metropolitan_subway"
resp = requests.get(url)
html_src = resp.text

soup = BeautifulSoup(html_src, 'html.parser')
print(soup)
print("\n")

print(soup.head)
print("\n")
print(soup.body)
print("\n")

print('title 태그 요소: ', soup.title)
print('title 태그 이름: ', soup.title.name)
print('title 태그 문자열: ', soup.title.string)
~~~
~~~
<Output>
<!DOCTYPE html>
...
<script>(RLQ=window.RLQ||[]).push(function(){mw.config.set({"wgBackendResponseTime":257,"wgHostname":"mw1355"});});</script></body></html>

<head>
...
</head>

<body>
...
</body>

title 태그 요소:  <title>Seoul Metropolitan subway - Wikipedia</title>
title 태그 이름:  title
title 태그 문자열:  Seoul Metropolitan subway - Wikipedia
~~~
# 필기
~~~
- 파싱 : HTML 소스코드를 해석하는 행위
- BeautifulSoup 라이브러리를 통해 HTML 문서에서 정보를 추출
- 일반적인 웹 페이지의 로봇 배제 표준은 속도 저하로 인해 동적 웹 페이지에 대한 로봇의 접근은 허용하지 않지만, 
서버 트래픽에 부담을 주지 않는 수준에서 일반적인 정적 웹 페이지에 대한 접근은 허용하는 편
~~~
