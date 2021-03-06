

# HTML 모듈별로 분류
- 현재 여러 HTML 페이지에서 navbar와 같이 공통적으로 적용이 필요한 부분의 코드 블록화가 필요
## HTML 분리해서 관리하기
> 1. base.html 생성  
> 2. post_list.html의 내용을 복사하여 base.html에 붙여넣기  
> 3. base.html 수정  
>> - 웹페이지에서 동작으로 인해 변화가 발생하는 부분 삭제  
>> ![7-1](https://user-images.githubusercontent.com/48504392/79717614-1cdcb680-8315-11ea-92f5-544eb4f49208.png)  
>> - 코드 수정  
>> ![7-2](https://user-images.githubusercontent.com/48504392/79717615-1d754d00-8315-11ea-9b3c-d9d9cecea567.png)  
> 4. post_list.html 수정  
>> - block 처리  
>> ![7-3](https://user-images.githubusercontent.com/48504392/79717617-1e0de380-8315-11ea-91fe-2a66bc9d6ea1.png)   
>> ![7-4](https://user-images.githubusercontent.com/48504392/79717619-1ea67a00-8315-11ea-856e-a45ded4134b9.png)  
>> - block 처리한 부분 이외의 코드 삭제  
>> ![7-5](https://user-images.githubusercontent.com/48504392/79717620-1ea67a00-8315-11ea-878c-b0c8e4287d2c.png)  
> 5. post_detail.html 수정  
>> - block 처리할 부분을 제외하고 나머지 부분 삭제  
>> ![7-7](https://user-images.githubusercontent.com/48504392/79717622-1fd7a700-8315-11ea-93e6-87889138d3eb.png)  
>> - block 처리 구문  
>> ![7-6](https://user-images.githubusercontent.com/48504392/79717621-1f3f1080-8315-11ea-8346-c834ecba71bc.png)  
> 6. 테스트 수행 시 오류 발생  
>> ![7-8](https://user-images.githubusercontent.com/48504392/79717624-20703d80-8315-11ea-99f0-fdd1f53c70d1.png) 
>> - 해당 구문에서 detail 페이지의 title 명칭이 일치하지 않아 발생하는 오류  
>> ![7-11](https://user-images.githubusercontent.com/48504392/79718134-4813d580-8316-11ea-9c11-d73e1e8a9507.png)  
> 7. base.html 수정  
>> ![7-9](https://user-images.githubusercontent.com/48504392/79717626-2108d400-8315-11ea-8589-20f35e85a127.png)  
> 8. post_detail.html 수정  
>> ![7-10](https://user-images.githubusercontent.com/48504392/79717612-1bab8980-8315-11ea-9eb7-596ed2111f17.png)  

## read more 버튼 동작 & post_detail 페이지 개선
> 1. post_list.html 수정  
>> ![7-13](https://user-images.githubusercontent.com/48504392/79723055-1c95e880-8320-11ea-85f8-ec23e1890504.png)  
> 2. tests.py 수정  
>> ![7-14](https://user-images.githubusercontent.com/48504392/79723057-1dc71580-8320-11ea-803a-c4b7022a4b13.png)  
> 3. test 수행  
>> ![7-12](https://user-images.githubusercontent.com/48504392/79723051-1a338e80-8320-11ea-818a-0677c775a392.png)  
> 4. tests.py 수정  
>> 오타 post_000.get_absolute_url -> post_000.get_absolute_url()
>> ![7-15](https://user-images.githubusercontent.com/48504392/79723060-1e5fac00-8320-11ea-9640-b9b73cbf51f4.png)  
> 5. post_list.html 수정  
>> ![7-16](https://user-images.githubusercontent.com/48504392/79723062-1f90d900-8320-11ea-9bba-e12cf7aba36d.png)  
>> - 템플릿 형식에 get_absolute_url 구문을 get_absolute_url()로 사용하지 않도록 주의  
> 6. startbootstrap 홈페이지에서 Detail 홈페이지에 사용할 양식 코드 복사  
>> - 주소 : https://blackrockdigital.github.io/startbootstrap-blog-post/  
>> ![7-18](https://user-images.githubusercontent.com/48504392/79723066-20c20600-8320-11ea-8538-26f265dc6fa2.png)  
>> ![7-19](https://user-images.githubusercontent.com/48504392/79723068-215a9c80-8320-11ea-845d-bca3aea47627.png)  
> 7. post_detail에 복사한 내용 붙여넣기  
>> ![7-17](https://user-images.githubusercontent.com/48504392/79723064-20296f80-8320-11ea-970b-de0c5f176e4a.png)  
> 8. tests.py 수정  
>> ![7-23](https://user-images.githubusercontent.com/48504392/79723079-23bcf680-8320-11ea-8ad7-0b3e00e235c6.png)  
> 9. base.html 수정  
>> ![7-21](https://user-images.githubusercontent.com/48504392/79723077-23246000-8320-11ea-8acf-a2d60bbc4939.png)  
> 10. post_detail.html 수정  
>> - detail 페이지의 title, author, created, Preview Image 부분 수정  
>> ![7-22](https://user-images.githubusercontent.com/48504392/79723078-23246000-8320-11ea-9a0b-226b9dec7af2.png)  
>> - Post Content 부분 수정  
>> ![7-20](https://user-images.githubusercontent.com/48504392/79723072-21f33300-8320-11ea-8d3f-83d6e4563776.png)  
>> ![7-24](https://user-images.githubusercontent.com/48504392/79723080-24558d00-8320-11ea-9dae-78dc5ff6e19d.png)  
> 11. tests.py 수정  
>> - 코드 추가  
>> ![7-25](https://user-images.githubusercontent.com/48504392/79723084-24558d00-8320-11ea-8c7f-583eec843d2e.png)  

