# 1. 이벤트란?
- 유저가 웹 브라우저에서 DOM 요소들과 상호작용하는 것
- 리액트에서의 이벤트 핸들링은 순수 JS 또는 jQuery를 사용한 웹 앱에서의 핸들링과 유사
- 리액트의 장점 중 하나는 자바스크립트에 익숙할 시 리액트 또한 쉽게 활용할 수 있다는 점이므로 기존 HTML DOM Event를 안다면 리액트 컴포넌트의 이벤트도 쉽게 이용 가능
#

# 2. 리액트의 이벤트 시스템
```js
<button onClick = {() => {
    this.setState({
        number : this.state.number + 1
    })
    }
}>더하기</button>
```
#

# 3. 리액트에서 이벤트를 사용할 때의 주의사항
## ① 이벤트 이름은 camelCase로 작성
- HTML의 onclick은 리액트에서 onClick으로 작성해야 사용 가능
## ② 이벤틍 실행할 자바스크립트 코드를 전달하는 것이 아니라 `함수 형태의 값을 전달`
## ③ `DOM 요소`에만 이벤트를 설정 가능
```js
// Mycomponent를 클릭할 때 doSomething 함수를 실행하는 것이 아니라 그저 이름이 onClick인 props를 Mycomponent에게 전달하는 것을 수행
<Mycomponent onClick = {doSomething}/>

// 전달받은 props를 컴포넌트 내부의 DOM 이벤트로 설정하여 사용
<div onClick = {this.props.onClick}>
    { /* (...) */}
</div>
```
- div, button, input, form, span 등 DOM 요소 → 이벤트 사용 가능
- 사용자가 직접 생성한 컴포넌트 → 이벤트 사용 불가능
- 컴포넌트에 자체적으로 이벤트를 설정 불가능하지만 전달받은 props를 컴포넌트 내부의 DOM 이벤트로 설정 가능
#

# 4. 이벤트 종류
- Clipboard
- Form
- Composition
- Mouse
- Keyboard
- Selection
- Focus
- Touch
- UI
- Image
- Wheel
- Animation
- Media
- Transition
#

# 5. 이벤트 핸들링 단계
## ① 컴포넌트 생성 및 불러오기
```js
class EventPractice extends Component {
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
            </div>
        );
    }
}
```
## ② onCharge 이벤트 핸들링
```js
class EventPractice extends Component {
    state = {
        message : ''
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type = "text"
                    name = "message"
                    placeholder = "아무거나 입력하세요."
                    onChange = {
                        (e) => {
                            this.setState({
                                message : e.target.value
                            })
                        }
                    }
                />
                <button onClick = { 
                    () => { 
                        alert(this.state.message);
                        this.setState({ 
                            message : ''
                        });
                    }
                }>확인</button>
            </div>
        );
    }
}
```
## ③ 임의 메소드 생성
```js
class EventPractice extends Component {
    state = {
        message : ''
    }

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({
            message : e.target.value
        })
    }

    handleClick() {
        alert(this.state.message);
        this.setState({
            message : ''
        })
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type = "text"
                    name = "message"
                    placeholder = "아무거나 입력하세요."
                    value = {this.state.message}
                    onChange = {this.handleChange}
                />
                <button onClick = {this.handleClick}>확인</button>
            </div>
        );
    }
}
```
- 컴포넌트에 임의 메소드를 생성 시 기본적으로 this에 접근 불가
    - 컴포넌트의 생성자 메소드 constructor에서 각 메소드를 this와 바인딩하는 작업 필요
    - Bind : 메소드에서 this를 사용할 수 있도록 메소드에 this를 묶어주는 역할 
    - Bind 작업을 수행하지 않고 메소드에서 this를 호출 시 undefined가 리턴
- 메소드 바인딩은 생성자 메소드(constructor)에서 하는 것이 정석이지만 새 메소드를 만들 때마다 constructor를 수정하는 불편함이 존재
    - 바벨의 transform-class-propertiese 문법으로 해결
        ```js
        class EventPractice extends Component {
            state = {
                message : ''
            }

            handleChange = (e) => {
                this.setState({
                    message : e.target.value
                })
            }

            handleClick = () => {
                alert(this.state.message);
                this.setState({
                    message : ''
                })
            }

            render() {
                return (
                    <div>
                        <h1>이벤트 연습</h1>
                        <input
                            type = "text"
                            name = "message"
                            placeholder = "아무거나 입력하세요."
                            value = {this.state.message}
                            onChange = {this.handleChange}
                        />
                        <button onClick = {this.handleClick}>확인</button>
                    </div>
                );
            }
        }
        ```
    - 화살표 함수의 형태로 메소드를 정의
## ④ input 여러 개 다루기
```js
class EventPractice extends Component {
    state = {
      username: '',
      message: ''
    };
    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    handleClick = () => {
      alert(this.state.username + ': ' + this.state.message);
      this.setState({
        username: '',
        message: ''
      });
    };

    render() {
      return (
        <div>
          <h1>이벤트 연습</h1>
          <input
            type="text"
            name="username"
            placeholder="유저명"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="message"
            placeholder="아무거나 입력해보세요"
            value={this.state.message}
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>확인</button>
        </div>
      );
    }
}
```
- 핵심은 `[e.target.name]: e.target.value` 구문으로, 자바스크립트에서 [] 내의 값을 key 값으로 사용하는 것과 동일
## ⑤ onKeyPress 이벤트 핸들링
```js
class EventPractice extends Component {
    state = {
      username : '',
      message : ''
    };
    handleChange = (e) => {
      this.setState({
        [e.target.name] : e.target.value
      });
    };

    handleClick = () => {
      alert(this.state.username + ': ' + this.state.message);
      this.setState({
        username: '',
        message: ''
      });
    };

    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleClick();
        }
    }

    render() {
      return (
        <div>
          <h1>이벤트 연습</h1>
          <input
            type = "text"
            name = "username"
            placeholder = "유저명"
            value = {this.state.username}
            onChange = {this.handleChange}
          />
          <input
            type = "text"
            name = "message"
            placeholder = "아무거나 입력해보세요"
            value = {this.state.message}
            onChange = {this.handleChange}
            onKeyPress = {this.handleKeyPress}
          />
          <button onClick={this.handleClick}>확인</button>
        </div>
      );
    }
}
```
#

