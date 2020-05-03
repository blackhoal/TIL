# 코드
~~~python
import requests
from bs4 import BeautifulSoup

url = "https://en.wikipedia.org/wiki/Seoul_Metropolitan_Subway"
resp = requests.get(url)
html_src = resp.text
soup = BeautifulSoup(html_src, 'html.parser')
                 
links = soup.select('a')
print(len(links))
print("\n")

print(links[:3])
print("\n")

external_links = soup.select('a[class="external text"]')
print(external_links[:3])
print("\n")

id_selector = soup.select('#siteNotice')
print(id_selector)
print("\n")

id_selector2 = soup.select('div#siteNotice')
print(id_selector2)
print("\n")

id_selector3 = soup.select('p#siteNotice')
print(id_selector3)
print("\n")

class_selector = soup.select('.mw-headline')
print(class_selector)
print("\n")

class_selector2 = soup.select('span.mw-headline')
print(class_selector2)
~~~

# 출력
~~~
<Output>
966


[<a id="top"></a>, <a class="mw-jump-link" href="#mw-head">Jump to navigation</a>, <a class="mw-jump-link" href="#p-search">Jump to search</a>]


[<a class="external text" href="http://www.seoulmetro.co.kr/kr/board.do?menuIdx=548" rel="nofollow">"자료실 : 알림마당&gt;자료실&gt;자료실"</a>, <a class="external text" href="http://www.korail.com/file/statistics/2012/2012-04.pdf" rel="nofollow">2012 Korail Statistics</a>, <a class="external text" href="https://web.archive.org/web/20140227072212/http://www.korail.com/file/statistics/2012/2012-04.pdf" rel="nofollow">Archived</a>]


[<div class="mw-body-content" id="siteNotice"><!-- CentralNotice --></div>]


[<div class="mw-body-content" id="siteNotice"><!-- CentralNotice --></div>]


[]


[<span class="mw-headline" id="Overview">Overview</span>, <span class="mw-headline" id="History">History</span>, <span class="mw-headline" id="Lines_and_branches">Lines and branches</span>, <span class="mw-headline" id="Rolling_stock">Rolling stock</span>, <span class="mw-headline" id="Fares_and_ticketing">Fares and ticketing</span>, <span class="mw-headline" id="Current_construction">Current construction</span>, <span class="mw-headline" id="Opening_2020">Opening 2020</span>, <span class="mw-headline" id="Opening_2021">Opening 2021</span>, <span class="mw-headline" id="Opening_2022">Opening 2022</span>, <span class="mw-headline" id="Opening_2023">Opening 2023</span>, <span class="mw-headline" id="Tentative">Tentative</span>, <span class="mw-headline" id="Under_planning">Under planning</span>, <span class="mw-headline" id="Seoul_City">Seoul City</span>, <span class="mw-headline" id="Incheon_City">Incheon City</span>, <span class="mw-headline" id="See_also">See also</span>, <span class="mw-headline" id="Notes">Notes</span>, <span class="mw-headline" id="References">References</span>, <span class="mw-headline" id="External_links">External links</span>]


[<span class="mw-headline" id="Overview">Overview</span>, <span class="mw-headline" id="History">History</span>, <span class="mw-headline" id="Lines_and_branches">Lines and branches</span>, <span class="mw-headline" id="Rolling_stock">Rolling stock</span>, <span class="mw-headline" id="Fares_and_ticketing">Fares and ticketing</span>, <span class="mw-headline" id="Current_construction">Current construction</span>, <span class="mw-headline" id="Opening_2020">Opening 2020</span>, <span class="mw-headline" id="Opening_2021">Opening 2021</span>, <span class="mw-headline" id="Opening_2022">Opening 2022</span>, <span class="mw-headline" id="Opening_2023">Opening 2023</span>, <span class="mw-headline" id="Tentative">Tentative</span>, <span class="mw-headline" id="Under_planning">Under planning</span>, <span class="mw-headline" id="Seoul_City">Seoul City</span>, <span class="mw-headline" id="Incheon_City">Incheon City</span>, <span class="mw-headline" id="See_also">See also</span>, <span class="mw-headline" id="Notes">Notes</span>, <span class="mw-headline" id="References">References</span>, <span class="mw-headline" id="External_links">External links</span>]
~~~

# 필기
~~~
-
~~~

