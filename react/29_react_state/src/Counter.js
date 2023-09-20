import { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        //부모 클래스인 Component의 생성자
        super(props);

        this.state = {
            number: 0,
        };

        //바인딩
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    handleIncrement() {
        //직접적으로 변경금지
        this.setState({ number: this.state.number + 1 });
        console.log('증가함수', this);
    }

    //화살표함수는 아래코드만 있어도됨.
    state = {
        number: 0,
    };

    handleDecrement = () => {
        //화살표 함수는 바인딩이 필요없다
        //setState는 호출 직후에 상태가 바로 업데이트 되지 않는다.
        // 리액트는 여러 setState 호출을 일괄 처리함.
        // 2번의 setState가 1번의 setState의 결과를 기반으로 동작하지 않는다.
        // this.setState({ number: this.state.number - 1 }); // 1번
        // this.setState({ number: this.state.number - 1 }); // 2번

        this.setState((prevState) => {
            // this.state => prevState
            return { number: prevState.number - 1 }; //this.state.number
        });
        this.setState((prevState) => ({ number: prevState.number - 1 }));
        console.log('감소함수', this);
    };

    render() {
        const { number } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <button onClick={this.handleIncrement}>증가</button>
                <button onClick={this.handleDecrement}>감소</button>
            </div>
        );
    }
}

export default Counter;
