# 코드
~~~python
import requests
from bs4 import BeautifulSoup

url = "https://en.wikipedia.org/wiki/Seoul_Metropolitan_Subway"
resp = requests.get(url)
html_src = resp.text
soup = BeautifulSoup(html_src, 'html.parser')

subway_image = soup.select('#mw-content-text > div > table:nth-of-type(3) > tbody > tr:nth-of-type(2) > td > a > img')
                           
print(subway_image)
print("\n")
print(subway_image[0])
print("\n")

subway_image2 = soup.select('tr > td > a > img')
print(subway_image2[1])
~~~

# 출력
~~~
<Output>

~~~

# 필기
~~~
-
~~~

