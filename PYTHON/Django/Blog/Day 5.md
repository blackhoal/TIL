# 화면 구성 개선  
## Template에 IF문 사용  
> 1. Post_list.html 수정  
![5-1](https://user-images.githubusercontent.com/48504392/79465135-eb729b00-8035-11ea-9989-e60312917d03.png)  
> 2. 그림 없는 포스트에 lorem picsum 랜덤 적용 확인  
![5-2](https://user-images.githubusercontent.com/48504392/79465136-ec0b3180-8035-11ea-8ab2-4808071cbb8c.png)  

## Template에서 truncate로 포스트의 일부분만 출력
> 1. Post_list.html 수정  
![5-3](https://user-images.githubusercontent.com/48504392/79465141-eca3c800-8035-11ea-873f-4348e2592ace.png)  
> 2. 적용 확인  
![5-4](https://user-images.githubusercontent.com/48504392/79465142-ed3c5e80-8035-11ea-93cf-e159bbffda2e.png)  
		
# DetailView 사용
## Post Detail 페이지 생성
> 1. blog/urls.py 수정  
![5-5](https://user-images.githubusercontent.com/48504392/79465145-edd4f500-8035-11ea-920c-e0c26ca3ecf9.png)  
> 2. blog/views.py 수정  
![5-6](https://user-images.githubusercontent.com/48504392/79465112-e7467d80-8035-11ea-816b-d77aee9096b9.png)  
> 3. post_detail.html 생성  
![5-7](https://user-images.githubusercontent.com/48504392/79465119-e877aa80-8035-11ea-9cef-bced28662a2d.png)  
> 4. 실행 확인  
![5-8](https://user-images.githubusercontent.com/48504392/79465121-e9104100-8035-11ea-8a66-b5c7792c5c61.png)  
> 5. post_detail.html 삭제 후 blog/views.py 수정  
![5-9](https://user-images.githubusercontent.com/48504392/79465122-e9a8d780-8035-11ea-8e30-97b96f6dcc97.png)  
> 6. blog/urls.py 수정  
![5-10](https://user-images.githubusercontent.com/48504392/79465125-e9a8d780-8035-11ea-962a-651f52121338.png)  
> 7. post_detail.html 생성  
![5-11](https://user-images.githubusercontent.com/48504392/79465127-ea416e00-8035-11ea-8ef4-36f35050a1fb.png)  
> 8. 결과 확인  
![5-12](https://user-images.githubusercontent.com/48504392/79465130-eada0480-8035-11ea-9b13-9b1627189f0f.png)  
