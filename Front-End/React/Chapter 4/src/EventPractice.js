import React, { Component } from 'react';

// 4-2-1 컴포넌트 생성
class EventPractice_4_2_1 extends Component {
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
            </div>
        );
    }
}

// 4-2-2 onChange 이벤트 핸들링
class EventPractice_4_2_2 extends Component {
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
                            console.log(e.target.value);
                        }
                    }
                />
            </div>
        );
    }
}

// 4-2-2-3 버튼을 클릭 시 comment 값을 공백으로 설정하며 메시지 박스 출력
class EventPractice_4_2_2_3 extends Component {
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

export default EventPractice;
