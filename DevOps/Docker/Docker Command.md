# docker search
- 도커 레지스트리에서 제공하는 이미지를 검색하며 도커 CLI에서 실행  
~~~
docker search [options] term
~~~

# docker pull
- 도커 레지스트리에서 원하는 이미지를 로컬 머신에서 가져옴
~~~
docker pull image:tag
~~~

# docker images
- 현재 로컬 머신에서 사용할 수 있는 최상위 이미지 목록을 출력
~~~
docker images [options]
~~~

# docker rmi
- 요청한 이미지를 로컬 머신에서 삭제
~~~
docker rmi [options] image [image, image, ...]
~~~

# docker run
- 이미지를 다운로드 후, 이미지를 실행할 때 사용
~~~
docker run [options] image: tag [commang, args]
~~~

# docker ps
- 현재 구동 중인 컨테이너를 모두 출력
~~~
docker ps [options]
~~~

# docker logs
- 인수로 지정한 컨테이너의 로그 파일을 출력
~~~
docker logs [options] 컨테이너
~~~

# docker restart
- 인수로 지정한 컨테이너를 다시 구동
- 컨테이너 ID는 여러 개 지정 가능
~~~
docker restart [options] 컨테이너ID
~~~

# docker attach
- 실행중인 컨테이너를 인수로 지정시 사용자가 해당 컨테이너에 인터랙티브 방식으로 연결함으로써 컨테이너를 제어하거나 현재 출력되는 내용 확인 가능
~~~
docker attach [options] 컨테이너ID
~~~

# docker remove
- 인수로 지정한 컨테이너 삭제
~~~
docker rm [options] 컨테이너ID
~~~

# docker inspect
- 컨테이너나 이미지의 상세하고 낮은 수준의 정보 확인
~~~
docker inspect [options] 컨테이너ID/이미지
~~~

# docker exec
- 이미 구동 중인 컨테이너를 원겨에서 실행 가능
~~~
docker exec [options] 컨테이너ID 커맨드 [인수...]
~~~

# docker rename
- 현재 구동 중인 컨테이너의 이름을 변경
~~~
docker rename 컨테이너ID 새로운_명칭
~~~

# docker copy
- 컨테이너와 컨테이너를 구동하는 머신 사이에서 파일을 복사할 때 사용
~~~
# 컨테이너의 파일을 로컬 호스트에 복사
docker cp [options] 컨테이너:소스_경로 타깃_경로
~~~
~~~
# 로컬 머신에 있는 파일을 특정 컨테이너로 복사
docker cp [options] 소스_경로 |- 컨테이너:타깃_경로
~~~

# docker pause/unpause
- 인수로 지정한 컨테이너에 있는 모든 프로세스를 일시적으로 중지(pause) / 해제(unpause)
~~~
docker pause/unpause 컨테이너 [컨테이너...]
~~~

# docker create
- 인수로 지정한 이미지 위에 작성 가능한 컨테이너 계층을 새로 생성
~~~
docker create [options] 이미지 [커맨드] [인수...]
~~~

# docker commit
- 컨테이너에 발생한 변경 내역을 반영한 상태로 새로 생성하여 개발 팀이나 테스트 팀 등 다른 곳에 배포할 때 사용
~~~
docker commit [options] 컨테이너 [저장소:태그]
~~~

# docker diff
- 컨테이너 파일 시스템에서 변경된 파일이나 디렉터리를 나열
~~~
docker diff 컨테이너_ID
~~~
