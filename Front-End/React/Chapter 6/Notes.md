# 1. 함수 map() 개요
- 내장함수인 map 함수를 사용하여 반복되는 컴포넌트를 렌더링
- 파라미터로 전달된 함수를 사용하여 배열 내 각 요소를 프로세싱 후 새로운 배열을 결과로 생성
#

# 2. 문법
```js
arr.map(callback, [thisArg])
```
## ① callback
- 새로운 배열의 요소를 생성하는 함수
- callback 요소 3가지
  - currentValue : 현재 처리중인 요소
  - index : 현재 처리중인 요소의 index 값
  - array : 현재 처리중인 원본 배열
## ② thisArg(선택항목)
- callback 함수 내부에서 사용할 this 레퍼런스
## ③ 예제
```js
var numbers = [1,2,3,4,5];

var processed = numbers.map(function(num){
    return num * num;
});

console.log(processed)

// ES6 문법
const numbers = [1,2,3,4,5];
const result = numbers.map(num => num * num);
console.log(result);
```
#

# 3. 데이터 배열을 컴포넌트 배열로 map
```js
// IterationSample.js
import React, { Component } from 'react';

class IterationSample extends Component {
    render() {
        const names = ['눈사람', '얼음', '눈', '바람'];
        const nameList = names.map(
            (name) => (<li>{name}</li>)
        );

        return (
            <ul>
                {nameList}
            </ul>
        );
    }
}

export default IterationSample;

// App.js
class App extends Component {
  render() {
    return (
      <IterationSample/>
    );
  }
}

export default App;
```
- key가 존재하지 않다는 경고 메시지 출력
# 

# 4. Key
```js
// IterationSample.js
class IterationSample extends Component {
    render() {
        const names = ['눈사람', '얼음', '눈', '바람'];
        const nameList = names.map(
            (name, index) => (<li key = {index}>{name}</li>) // 수정
        );

        return (
            <ul>
                {nameList}
            </ul>
        );
    }
}

export default IterationSample;
```
- 리액트에서 컴포넌트를 렌더링했을 때 어떤 원소에 변동이 있었는지 파악을 위해 사용
    - Key가 없을 경우 가상 DOM을 비교하는 과정에서 리스트를 순차적으로 비교하면서 변화를 감지
    - Key가 있을 경우 해당 값을 사용하여 어떤 변화가 발생했는지를 더욱 빠르게 감지 가능
- map 함수의 인자로 전달되는 함수 내부에서 컴포넌트 props를 설정하는 것처럼 설정
- Key 값은 `언제나 유일`해야 하므로 데이터가 가진 고유값을 Key 값으로 설정
- key 값이 중복될 경우 렌더링 과정에서 오류 발생
- 고유 번호가 존재하지않을 경우 map 함수에 전달되는 콜백 함수의 인수인 `Index 값`을 사용
- state 내에서 배열 변형 시
    - 배열에 직접 접근하여 수정하기 (X)
    - concat, slice, 전개 연산자, filter 함수 등을 사용하여 새 배열 생성 후 setState 메소드로 적용 (O)
# 

# 5. 유동적인 데이터 렌더링 순서
## ① 초기 state 설정
```js
// IterationSample.js
class IterationSample extends Component {
    
    state = {
            names : ['눈사람', '얼음', '눈', '바람']
    };

    render() {
        const nameList = this.state.names.map(
            (name, index) => (<li key = {index}>{name}</li>) // 수정
        );

        return (
            <ul>
                {nameList}
            </ul>
        );
    }
}

export default IterationSample;
```
## ② 데이터 추가 기능 구현
```js
// IterationSample.js
class IterationSample extends Component {
    
    state = {
            names : ['눈사람', '얼음', '눈', '바람'],
            name : '' // 추가
    };

    // 추가
    handleChange = (e) => {
        this.setState({
            name : e.target.value
        });
    }

    // 추가
    handleInsert = () => {
        // name 배열에 값을 추가 & name 값을 초기화
        this.setState({
            names : this.state.names.concat(this.state.name),
            name : ''
        })
    }

    render() {
        const nameList = this.state.names.map(
            (name, index) => (<li key = {index}>{name}</li>) // 수정
        );

        return (
            <div>
                <input
                    onChange = {this.handleChange}
                    value = {this.state.name}/>
                <button onClick = {this.handleInsert}>추가</button> 
                <ul>
                    {nameList}
                </ul>
            </div>
        );
    }
}
```
## ③ 데이터 제거 기능 구현
```js
class IterationSample extends Component {
    
    state = {
            names : ['눈사람', '얼음', '눈', '바람'],
            name : ''
    };

    handleChange = (e) => {
        this.setState({
            name : e.target.value
        });
    }

    handleInsert = () => {
        // name 배열에 값을 추가 & name 값을 초기화
        this.setState({
            names : this.state.names.concat(this.state.name),
            name : ''
        })
    }

    handleRemove = (index) => {
        // name의 레퍼런스를 미리 생성
        const { names } = this.state;

        // 배열을 자르는 내장 함수 slice & 전개 연산자(...)를 사용하여 index 번째 값을 제외한 값들을 배열에 넣기
        this.setState({
            names : [
                ...names.slice(0, index),
                ...names.slice(index + 1, names.length)
                /*
                    전개 연산자를 사용하지 않을 경우의 코드 → 간결성 및 가독성 감소
                    this.state.names.slice(0, index).concat(this.state.names.slice(index+1, this.state.names.length))
                */
            ]
        });

        // 내장 함수 filter : 배열에서 특정 조건을 만족하는 값만 추출하여 새로운 배열로 생성
        this.setState({
            names : names.filter((item, i) => i !== index)
        });
    }

    render() {
        const nameList = this.state.names.map(
            (name, index) => (
            <li 
                key = {index}
                onDoubleClick = {() => this.handleRemove(index)}>
                {name}
            </li>) 
        );

        return (
            <div>
                <input
                    onChange = {this.handleChange}
                    value = {this.state.name}/>
                <button onClick = {this.handleInsert}>추가</button>
                <ul>
                    {nameList}
                </ul>
            </div>
        );
    }
}

export default IterationSample;
```
