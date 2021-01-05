# Static files & Media files
## CSS 수정하기
> 1. 서버 실행 후 F12 버튼 입력  
![4-1](https://user-images.githubusercontent.com/48504392/79464405-f973ec00-8034-11ea-90aa-c7df36808b7e.png)  
> 2. 해당 부분을 마우스 휠로 수정하여 원하는 수치로 적용
> 3. 적용이 되지 않을 경우 인터넷 사용 기록 - 캐시된 이미지 또는 파일 삭제 후 다시 서버를 킬 것  

## 사진 업로드를 위한 ImageField와 업로드된 파일 관리방법  
> 1.  models.py 수정  
~~~python
class Post(models.Model):
    ~
    head_image = models.ImageField(upload_to='blog/', blank=True)
   ~
~~~
>> - blank 항목이 들어갈 경우 사용자가 반드시 채우지 않아도 됨을 암시  
>> - 서버 실행 중 Get Pillow 오류가 발생할 경우 pip install Pillow 구문을 통해 설치  
> 2. DB migrate 수행  
~~~
$ python manage.py makemigrations
$ python manage.py migrate
~~~
> 3. 그림 업로드 수행  
![4-2](https://user-images.githubusercontent.com/48504392/79464364-f0831a80-8034-11ea-9078-d45adfbcb433.png)  
![4-3](https://user-images.githubusercontent.com/48504392/79464368-f1b44780-8034-11ea-9de5-3a317a71e4ec.png)  
>> - Admin 페이지에 업로드 후 삭제해도 파일 목록에는 여전히 존재  
> 4. 그림 파일이 저장되는 위치 수정  
>> - my_site_prj/settings.py
![4-4](https://user-images.githubusercontent.com/48504392/79464370-f24cde00-8034-11ea-93ca-9615e457f3b5.png)  
> 5. 위치 변경 확인  
![4-5](https://user-images.githubusercontent.com/48504392/79464372-f24cde00-8034-11ea-86d3-33bfed72368a.png)  
> 6. 같은 위치에 과도한 누적이 되는 것을 방지하기 위해 models.py 수정  
![4-6](https://user-images.githubusercontent.com/48504392/79464377-f2e57480-8034-11ea-9c7d-1c2fc7102983.png)  
> 7. DB migration 수행  
~~~
$ python manage.py makemigrations
$ python manage.py migrate
~~~
> 8. 이미지 업로드 후 연-월-일 구조로 파일이 생성됨을 확인  
![4-7](https://user-images.githubusercontent.com/48504392/79464382-f37e0b00-8034-11ea-98da-5969cf8ce851.png)  
> 9. post_list.html 수정  
![4-8](https://user-images.githubusercontent.com/48504392/79464384-f416a180-8034-11ea-9036-42303d23b3dc.png)  
> 10. settings.py 수정  
![4-9](https://user-images.githubusercontent.com/48504392/79464386-f4af3800-8034-11ea-8fe5-9e68cedeb3a6.png)  
> 11. my_site_prj/urls.py 수정  
![4-10](https://user-images.githubusercontent.com/48504392/79464388-f4af3800-8034-11ea-8532-27d8ea24283f.png)  
>> - 모든 POST 객체 중 이미지 파일이 하나라도 없으면 오류 발생  
>> - 추후에 IF문을 추가하여 진행  

