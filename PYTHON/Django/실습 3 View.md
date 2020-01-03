# 1. 뷰 설계
~~~
① 게시판 화면 
- 게시글 집합의 목록이 나열
- 모든 게시글에는 제목과 작성자 표시
② 게시글 상세 화면 
- 게시글을 클릭 후 이동 시 게시글 상세화면으로 이동하며 제목, 내용, 작성일이 출력
③ 게시글 수정 화면 
- 게시글 상세화면에서 수정하기 버튼을 누르면 수정 화면으로 이동
- 게시글 수정화면에서 저장하기 버튼을 누르면 수정된 내용이 저장되며 게시판으로 이동
- 게시글 수정화면에서 삭제하기 버튼을 누르면 게시글이 삭제되고 게시판으로 이동
④ 게시글 추가 화면 
- 게시판에서 새글쓰기 버튼을 누르면 새로운 게시글을 입력할 수 있는 화면이 출력
- 게시글을 작성하고 저장하기 버튼을 누르면 수정된 내용이 저장되고 게시판으로 이동
~~~
- 화면은 총 4개로 구성(목록, 상세, 수정, 추가)
- 수정, 추가 화면은 동일 양식을 사용
- 추가 화면은 처음의 입력칸을 빈 칸으로 출력
- 수정 화면은 추가 화면에서 입력칸을 DB에 저장된 값으로 초기화하여 출력
# 2. 뷰 생성
## ① 화면 핸들러 정의
~~~python
# bbs/views.py

from django.http import HttpResponse
  
def hello(request, to):
    return HttpResponse('Hello {}.'.format(to))

def list_article(request):                          # 목록보기
    return HttpResponse('list')

def detail_article(request, article_id):            # 상세보기 / 상세보기할 때 article의 id 필요
    return HttpResponse('detail {}'.format(article_id))

def create_or_update_article(request, article_id):  # 생성 및 수정 기능 / 수정할 때 article의 id 필요
    if article_id:
        return HttpResponse('update {}'.format(article_id))
    else:
        return HttpResponse('create')
~~~
## ② 액션 핸들러 정의
## ③ CBV로 변환
## ④ 데이터 검색
## ⑤ CSRF verification

# 3. 참고
https://swarf00.github.io/2018/11/23/build-view.html  
