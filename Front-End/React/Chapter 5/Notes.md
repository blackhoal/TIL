# 1. ref 개요
- 일반 html에서 id를 사용하여 DOM 요소에 이름을 부여하는 것처럼 리액트 프로젝트 내부에서 DOM에 이름을 부여하는 방식
- reference의 줄임말
- `DOM을 꼭 직접적으로 건드려야할 때` ref를 사용
- 일반적인 자바스크립트 및 jQuery로 만든 웹 사이트에서 input을 검증할 때 특정 id를 가진 input에 클래스를 설정

# 2. 반드시 DOM의 사용이 필요한 상황(ref의 사용이 필요한 상황)
- 특정 Input에 포커스를 줄 때
- 스크롤 박스를 조작할 때
- Canvas 요소에 그림을 그릴 때 등

# 3. ref 사용법
```js
<input ref = {(ref) => {this.input = ref}}></input>
```
- ref가 필요한 DOM에 props를 설정하듯이 ref 속성을 추가
- ref 값으로 콜백 함수를 전달
- 콜백 함수 내부에서 컴포넌트의 멤버 변수에 ref를 담는 코드를 작성
- this.input은 input 요소의 DOM을 의미

# 4. 리액트 컴포넌트에서 state를 사용하여 기능 구현
## ① 리액트 컴포넌트 생성
- ValidationSample.css
  ```css
  .success {
    background-color: lightgreen;
  }
  .failure {
    background-color: lightcoral;
  }
  ```
- ValidationSample.js
  ```js

  import React, { Component } from 'react';
  import './ValidationSample.css';

  class ValidationSample extends Component {
      state = {
          password : '',
          clicked : false,
          validated : false
      }

      handleChange = (e) => {
          this.setState({
              password : e.target.value
          });
      }

      handleButtonClick = () => {
          this.setState({
              clicked : true,
              validated : this.state.password === '0000'
          })
      }

      render() {
          return (
              <div>
                  <input
                      type = "password"
                      value = {this.state.password}
                      onChange = {this.handleChange}
                      className = {this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                  />
                  <button onClick = {this.handleButtonClick}>검증하기</button>
              </div>
          );
      }
  }

  export default ValidationSample;
  ```
- app.js
  ```js
  import React, { Component } from 'react';
  import ValidationSample from './ValidationSample';

  class App extends Component {
    render() {
      return (
        <ValidationSample/>
      );
    }
  }

  export default App;
  ```
## ② 컴포넌트에 ref 적용 & 버튼 클릭 시 input에 포커스를 주도록 변경
```js
  handleButtonClick = () => {
    this.setState({
        clicked : true,
        validated : this.state.password === '0000'
    })
    this.input.focus(); // 추가
  }
(...)
  <input
    ref = {(ref) => this.input = ref} // 추가
    type = "password"
    value = {this.state.password}
    onChange = {this.handleChange}
    className = {this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
  />
```
## ③ 컴포넌트에 메소드 추가
```js
// ScrollBox.js
class ScrollBox extends Component {
    scrollToBottom = () => {
        // 비구조화 할당 문법
        const { scrollHeight, clientHeight } = this.box;
        /*
            위의 코드는 다음과 동일한 구문
            const scrollHeight = this.box.scrollHeight;
            const clientHeight = this.box.clientHeight;
        */
       this.box.scrollTop = scrollHeight - clientHeight;
    }

    render() {
        (...)
    }
}
```
```js
// App.js
class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref = {(ref) => this.scrollBox = ref}/>
        <button onClick = {() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
      
    );
  }
}
```
