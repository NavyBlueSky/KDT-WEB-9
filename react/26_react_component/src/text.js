import { Component } from 'react';

class text extends Component {
    render() {
        const name = '김민재';
        const my_style = {
            backgroundColor: 'blue',
            color: 'orange',
            textWeight: '40px',
            padding: '12px',
        };
        return (
            <>
                <div style={my_style}>{name}</div>
            </>
        );
    }
}

export default text;
