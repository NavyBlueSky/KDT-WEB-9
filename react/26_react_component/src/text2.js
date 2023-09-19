import { Component } from 'react';
import logo from './step.jpg';

class text2 extends Component {
    render() {
        const style = {
            color: 'orange',
            textWeight: '40px',
            marginTop: '20px',
        };
        const style2 = {
            width: '300px',
            height: 'auto',
        };
        return (
            <>
                <h2 style={style}>
                    안녕하세요
                    <br />
                    <img src={logo} alt="" style={style2} />
                </h2>
            </>
        );
    }
}

export default text2;
