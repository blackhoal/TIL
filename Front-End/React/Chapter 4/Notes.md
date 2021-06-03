①②③④⑤
# 1. 이벤트란?
- 유저가 웹 브라우저에서 DOM 요소들과 상호작용하는 것
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
- div, button, input, form, span 등 DOM 요소 → 이벤트 사용 가능
- 사용자가 직접 생성한 컴포넌트 → 이벤트 사용 불가능
- 컴포넌트에 자체적으로 이벤트를 설정 불가능하지만 전달받은 props를 컴포넌트 내부의 DOM 이벤트로 설정 가능
```js
// Mycomponent를 클릭할 때 doSomething 함수를 실행하는 것이 아니라 그저 이름이 onClick인 props를 Mycomponent에게 전달하는 것을 수행
<Mycomponent onClick = {doSomething}/>

// 전달받은 props를 컴포넌트 내부의 DOM 이벤트로 설정하여 사용
<div onClick = {this.props.onClick}>
    { /* (...) */}
</div>
```
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
## ② onCharge 이벤트 핸들링
## ③ 임의 메소드 생성
## ④ input 여러 개 다루기
## ⑤ onKeyPress 이벤트 핸들링
#

