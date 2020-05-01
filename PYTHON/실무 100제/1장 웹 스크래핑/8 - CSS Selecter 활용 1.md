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
IndexError: list index out of range
~~~

# 필기
~~~
- CSS : HTML과 같은 마크업 언어의 디자인을 꾸미기 위해 사용하는 스타일 지정도구
- select() : CSS 선택자를 매개변수로 전달 받아 해당되는 태그를 모두 찾아서 리스트의 형태로 반환
- IndexError 발생? : subway_image 리스트에 아무 값도 반환되지 않아서 발생한 오류
~~~
> ![200501_1](https://user-images.githubusercontent.com/48504392/80814277-8ce91780-8c06-11ea-9d9b-1ba260778243.png)  
