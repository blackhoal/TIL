# 1. REST API
## 1-1. REST 개요
- PC에서는 네트워크 전송 속도나 메모리 등이 풍부하므로 브라우저에서 요청 시 일일이 화면정보를 다시 전송해도 문제 X
- 모바일 기기는 네트워크 전송량이 유선기기보다 떨어지므로 화면은 그대로 유지하면서 필요한 데이터만 전송 받아 빠르게 결과를 표시(ex-ajax 방식)
- REST란 `Representational State Transfer`의 약자
- 하나의 URI가 고유한 리소스를 처리하는 공통 방식
- 전송 방식을 나타내는 `method 속성`의 값에 따라 리소스에 대한 추가 작업을 요청
- 이러한 REST 방식으로 제공되는 API를 `REST API` or `RESTful API`로 지칭

## 1-2. @RestController
- 스프링 버전 3에서는 `@ResponseBody` 에너테이션을 통해 REST 방식의 데이터 처리를 지원
- 스프링 버전 4부터는 `@RestController` 에너테이션을 통해 REST 방식의 데이터 처리를 지원
- @RestController는 @Controller 및 @ResponseBody를 합친 것과 동일 → @RestController = @Controller + @ResponseBody
### 1-2-1. @RestController로 문자열 전달
```java
/*
	- TestController.java
*/
@RestController
@RequestMapping("/test/*")
public class TestController {

	@RequestMapping("/hello")
	public String hello() {
		return "Hello REST";
	}
}
```
- `/hello`로 요청 시 브라우저로 문자열 전송
### 1-2-2. @RestController로 VO 객체 전달
```xml
<!-- 
	- pom.xml
	- JSON 관련 라이브러리 추가 
-->
<dependency>
	<groupId>com.fasterxml.jackson.core</groupId>
	<artifactId>jackson-databind</artifactId>
	<version>2.11.3</version>
</dependency>
```
```java
/*
	- TestController.java
	- MemberVO 객체의 속성 값을 저장한 후 JSON 형식으로 전달
*/
@RestController
@RequestMapping("/test/*")
public class TestController {

	@RequestMapping("/member")
	public MemberVO member() {
		MemberVO vo = new MemberVO();
		vo.setId("hong");
		vo.setPwd("1234");
		vo.setName("홍길동");
		return vo
	}
}
```
### 1-2-3. @RestController로 Collection 객체 전달
```java
/*
	- TestController.java
	- MemberVO를 저장할 ArrayList 객체를 생성 후 저장
*/
@RestController
@RequestMapping("/test/*")
public class TestController {

	@RequestMapping("/membersList")
	public List<MemberVO> listMembers () {
		List<MemberVO> list = new ArrayList<MemberVO>();
		for (int i = 0; i < 10; i++) {
			MemberVO vo = new MemberVO();
			vo.setId("hong"+i);
			vo.setPwd("123"+i);
			vo.setName("홍길동"+i);
			vo.setEmail("hong"+i+"@test.com");
			list.add(vo);
		}
		return list; 
	}	
}
```

### 1-2-4. @RestController로 Map 객체 전달
```java
/*
	- TestController.java
	- MemberVO를 저장할 HashMap 객체를 생성 후 저장
*/
@RestController
@RequestMapping("/test/*")
public class TestController {
	@RequestMapping("/membersMap")
	public Map<Integer, MemberVO> membersMap() {
		Map<Integer, MemberVO> map = new HashMap<Integer, MemberVO>();
		for (int i = 0; i < 10; i++) {
			MemberVO vo = new MemberVO();
			vo.setId("hong" + i);
			vo.setPwd("123"+i);
			vo.setName("홍길동" + i);
			vo.setEmail("hong"+i+"@test.com");
			map.put(i, vo); 
		}
		return map; 
	} 	
}
```
### 1-2-5. @PathVariable
```java
/*
	- TestController.java
*/
@RestController
@RequestMapping("/test/*")
public class TestController {
	@RequestMapping(value= "/notice/{num}" , method = RequestMethod.GET)
	public int notice(@PathVariable("num") int num ) throws Exception {
		return num;
	}	
}
```
- `@PathVariable` 사용 시 브라우저에서 요청 URL로 전달된 매개변수를 가져오는 것이 가능
- 브라우저에서 `localhost:8090/pro29/test/notice/112`를 요청할 경우 num에 112가 할당
### 1-2-6. @RequestBody & @ResponseBody
```java
/*
	- TestController.java
*/
@RestController
@RequestMapping("/test/*")
public class TestController {
	
	/*
		- RequestBody
		- JSON으로 전송된 데이터를 MemberVO 객체의 속성에 자동으로 설정
	*/
	@RequestMapping(value= "/info", method = RequestMethod.POST)
	public void modify(@RequestBody MemberVO vo ){
		logger.info(vo.toString());
	}	

	/*
		- ResponseBody
		- Map 데이터를 브라우저로 전송
	*/
	@RequestMapping(value = "/res1")
	@ResponseBody
	public Map<String, Object> res1() {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", "hong");
		map.put("name", "홍길동");
		return map;
	}
	
	/*
		- ResponseBody
		- 메소드 호출 시 home.jsp를 브라우저로 전송
	*/
	@RequestMapping(value = "/res2")
	public ModelAndView res2() {
		return new ModelAndView("home");
	}
}
```
- @RequestBody : 요청 전달 데이터를 `application/json 타입`으로 전달
- @ResponseBody : JSP가 아닌 `텍스트` 또는 `JSON 형식`으로 결과를 전달 가능
### 1-2-7. ResponseEntity 클래스
```java
/*
	- TestController.java
*/
@RestController
@RequestMapping("/test/*")
public class TestController {
	/*
		- HttpStatus.INTERNAL_SERVER_ERROR로 인해 오류 코드 500으로 응답
	*/
	@RequestMapping("/membersList2")
	public  ResponseEntity<List<MemberVO>> listMembers2() {
		List<MemberVO> list = new ArrayList<MemberVO>();
		for (int i = 0; i < 10; i++) {
		MemberVO vo = new MemberVO();
		vo.setId("lee" + i);
		vo.setPwd("123"+i);
		vo.setName("이순신" + i);
		vo.setEmail("lee"+i+"@test.com");
		list.add(vo);
		}
		return new ResponseEntity(list,HttpStatus.INTERNAL_SERVER_ERROR);
	}	
  
	/*
		- ResponseEntity로 전송할 데이터의 종류와 한글 인코딩을 설정
		- HttpStatus.CREATED로 인해 HTML 형식으로 전송
	*/
	@RequestMapping(value = "/res3")
	public ResponseEntity res3() {
		HttpHeaders responseHeaders = new HttpHeaders();
	    responseHeaders.add("Content-Type", "text/html; charset=utf-8");
	    String message = "<script>";
		message += " alert('신규 회원을 등록합니다.');";
		message += " location.href='/pro29/test/membersList2'; ";
		message += " </script>";
		return  new ResponseEntity(message, responseHeaders, HttpStatus.CREATED);
	}
}
```
- @RestController는 별도의 View를 제공하지 않은 채 데이터를 전달하므로 전달 과정에서 예외 발생 가능
- 예외에 대해 좀 더 세밀한 제어가 필요한 경우 `ResponseEntity` 클래스를 사용
## 1-3. REST 방식으로 URI 표현
|메소드|설명|
|:--:|:--:|
|POST|추가(CREATE)|
|GET|조회(SELECT)|
|PUT|수정(UPDATE)|
|DELETE|삭제(DELETE)|
- 하나의 URI는 하나의 고유한 자원(Resource)을 대표하도록 설계
### 1-3-1. URI 설정 방식
![2](https://user-images.githubusercontent.com/48504392/127027404-b5050d65-b2a7-41cb-8084-c30b57951463.png)  
```
/작업명/기본키 + 메소드 + 데이터
```
|메소드|URI|설명|
|:--:|:--:|:--:|
|POST|/boards + 데이터|새 게시글 작성|
|GET|/boards/133|133번 게시글 조회|
|PUT|/boards/133 + 데이터|133번 게시글 수정|
|DELETE|/boards/133|133번 게시글 삭제|
- 작업명 : 요청하는 작업의 종류
- 기본키 : 요청하는 작업에 해당하는 대상의 기본키
- 메소드 : 요청하는 기능
- 데이터 : 기능 수행에 필요한 JSON 데이터
## 1-4. 게시판 기능 REST API 실습
```java
/*
	- BoardController.java
*/
@RestController
@RequestMapping("/boards")
public class BoardController {
	static Logger logger = LoggerFactory.getLogger(BoardController.class);
	
	@RequestMapping(value = "/all", method = RequestMethod.GET)
	public ResponseEntity<List<ArticleVO>> listArticles() {
		
		logger.info("listArticles 메소드 호출");

		List<ArticleVO> list = new ArrayList<ArticleVO>();
		for (int i = 0; i < 10; i++) {
			ArticleVO vo = new ArticleVO();
			vo.setArticleNO(i);
			vo.setWriter("이순신"+i);
			vo.setTitle("안녕하세요"+i);
			vo.setContent("신규 상품을 소개합니다."+i);
			list.add(vo);
		}
		
		return new ResponseEntity(list,HttpStatus.OK);
	}
	
	@RequestMapping(value = "/{articleNO}", method = RequestMethod.GET)
	public ResponseEntity<ArticleVO> findArticle (@PathVariable("articleNO") Integer articleNO) {
		logger.info("findArticle 메소드 호출");
		ArticleVO vo = new ArticleVO();
		vo.setArticleNO(articleNO);
		vo.setWriter("홍길동");
		vo.setTitle("안녕하세요");
		vo.setContent("홍길동 게시글입니다");
		return new ResponseEntity(vo,HttpStatus.OK);
	}	
	
	
	@RequestMapping(value = "", method = RequestMethod.POST)
	public ResponseEntity<String> addArticle (@RequestBody ArticleVO articleVO) {
		ResponseEntity<String>  resEntity = null;
		try {
			logger.info("addArticle 메소드 호출");
			logger.info(articleVO.toString());
			resEntity =new ResponseEntity("ADD_SUCCEEDED",HttpStatus.OK);
		}catch(Exception e) {
			resEntity = new ResponseEntity(e.getMessage(),HttpStatus.BAD_REQUEST);
		}
		
		return resEntity;
	}	

	@RequestMapping(value = "/{articleNO}", method = RequestMethod.PUT)
	public ResponseEntity<String> modArticle (@PathVariable("articleNO") Integer articleNO, @RequestBody ArticleVO articleVO) {
		ResponseEntity<String>  resEntity = null;
		try {
			logger.info("modArticle 메소드 호출");
			logger.info(articleVO.toString());
			resEntity =new ResponseEntity("MOD_SUCCEEDED",HttpStatus.OK);
		}catch(Exception e) {
			resEntity = new ResponseEntity(e.getMessage(),HttpStatus.BAD_REQUEST);
		}
		
		return resEntity;
	}

	@RequestMapping(value = "/{articleNO}", method = RequestMethod.DELETE)
	public ResponseEntity<String> removeArticle (@PathVariable("articleNO") Integer articleNO) {
		ResponseEntity<String>  resEntity = null;
		try {
			logger.info("removeArticle 메소드 호출");
			logger.info(articleNO.toString());
			resEntity =new ResponseEntity("REMOVE_SUCCEEDED",HttpStatus.OK);
		}catch(Exception e) {
			resEntity = new ResponseEntity(e.getMessage(),HttpStatus.BAD_REQUEST);
		}
		return resEntity;
	}	
}
```
```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"  isELIgnored="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"  %>

<c:set var="contextPath" value="${pageContext.request.contextPath}"  />
<!DOCTYPE html>
<html>
<head>
<title>JSONTest2</title>
<script src="http://code.jquery.com/jquery-latest.js"></script>  
<script>
  $(function() {
      $("#checkJson").click(function() {
      	var article = {articleNO:"114", 
	               writer:"박지성",
	               title:"안녕하세요", 
	               content:"상품 소개 글입니다."
	              };
  
  	$.ajax({
  	    //type:"POST",
        //url:"${contextPath}/boards",
        type:"PUT",
        url:"${contextPath}/boards/114",
        contentType: "application/json",
        data :JSON.stringify(article),
      success:function (data,textStatus){
          alert(data);
      },
      error:function(data,textStatus){
        alert("에러가 발생했습니다.");ㅣ
      },
      complete:function(data,textStatus){
      }
   });  //end ajax	

   });
});
</script>
</head>
<body>
  <input type="button" id="checkJson" value="새글 쓰기"/><br><br>
  <div id="output"></div>
</body>
</html>
```
____
#

# 2. Conference
[참조 1](https://www.youtube.com/watch?v=aYclArlY2Yg&list=PLuvImYntyp-s76lJiia8YfskDRAypeoyh&index=174)  
