import styled from 'styled-components';
import { useState } from 'react';

const _Btn1 = styled.button`
    background-color: blue;
    color: white;
`;
const _Btn2 = styled.button`
    background-color: red;
    color: black;
`;

export default function StyleCompoPrac1() {
    const [btn, setBtn] = useState(true);
    return (
        <div>
            {btn ? (
                <_Btn1
                    onClick={() => {
                        setBtn(false);
                    }}
                >
                    색상변경!
                </_Btn1>
            ) : (
                <_Btn2 onClick={() => setBtn(true)}>색상변경!</_Btn2>
            )}
        </div>
    );
}
