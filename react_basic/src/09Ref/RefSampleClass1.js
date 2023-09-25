import { Component } from 'react';

//콜백 함수 형태
class RefSampleClass1 extends Component {
    handleFocus = () => {
        this.mjInput.focus();
    };
    render() {
        return (
            <>
                <p>(클래스형 컴포넌트) 버튼 클릭시 input에 focus 처리</p>

                <input
                    ref={(ref) => {
                        this.mjInput = ref;
                    }}
                />
                <button onClick={this.handleFocus}>focus</button>
            </>
        );
    }
}

export default RefSampleClass1;
