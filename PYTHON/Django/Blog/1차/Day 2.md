# 부트스트랩 적용
## Static File 관리
> 1. 홈페이지에서 원하는 양식 검색  
https://bootswatch.com/
> 2. 검색한 양식에서 코드 부분을 html 페이지에 복사하여 붙여넣기  
>> ![2-1](https://user-images.githubusercontent.com/48504392/79462959-2de6a880-8033-11ea-8d38-e61fc5b04944.png)  
>>   
>> ![2-2](https://user-images.githubusercontent.com/48504392/79462976-350db680-8033-11ea-9c2b-1d6aa18be096.png)  
> 3. blog 앱 폴더에 blog/Static/blog/bootstrap/bootstrap.css 구조로 파일 생성  
>> ![2-3](https://user-images.githubusercontent.com/48504392/79463340-b06f6800-8033-11ea-8837-c1f3e098c516.png)  
> 4. 2번의 코드 부분에서 bootstrap.css 부분을 클릭 후 출력되는 코드부분을 bootstrap.css에 복사 및 붙여넣기  
> 5. post_list.html 코드 수정  
~~~
<link rel="stylesheet" href="{% static 'blog/bootstrap/bootstrap.css' %}" media="screen">
~~~
> 6. 2번에서 복사한 코드들을 3~5 과정 반복하여 코드 수정  
