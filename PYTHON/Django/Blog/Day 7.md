현재 여러 HTML 페이지에서 navbar와 같이 중복되는 코드가 자주 발생

# HTML 모듈별로 분류
## HTML 분리해서 관리하기
> 1. base.html 생성  
> 2. post_list.html의 내용을 복사하여 base.html에 붙여넣기  
> 3. base.html 수정  
> - 웹페이지에서 동작으로 인해 변화가 발생하는 부분 삭제  
> 사진 7-1
> - 코드 수정  
> 사진 7-2
> 4. post_list.html 수정  
> 사진 7-3  
> 사진 7-4  
> - block 처리한 부분 이외의 코드 삭제  
> 사진 7-5
> 5. post_detail.html 수정  
> - block 처리할 부분을 제외하고 나머지 부분 삭제  
> 사진 7-7
> - block 처리 구문  
> 사진 7-6
> 6. 테스트 수행 시 오류 발생  
> 사진 7-8
> 7. base.html 수정  
> 사진 7-9 
> 8. post_detail.html 수정  
> 사진 7-10

## read more 버튼 동작
## post_detail 페이지 개선
