import styled from 'styled-components';
import { useState } from 'react';

const MainBox = styled.div`
    width: 300px;
    height: 250px;
    background-color: aliceblue;
`;

const _Input = styled.input`
    width: 200px;
    height: 30px;
`;
const AddBtn = styled.button`
    width: 50px;
    height: 30px;
    border-radius: 4px;
    background-color: #5fb4ff;
    margin: 10px;
`;

const _Ul = styled.ol`
    list-style: none;
    margin: 0;
    padding: 0;
    max-height: 200px;
    overflow: auto;
`;
const _Li = styled.li`
    text-align: left;
    font-size: 15px;
`;

export default function StyleCompoPrac2() {
    const [txt, setTxt] = useState('');
    const [txts, setTxts] = useState([]);

    return (
        <MainBox>
            <_Input
                value={txt}
                onChange={(e) => {
                    setTxt(e.target.value);
                }}
            ></_Input>
            <AddBtn
                onClick={() => {
                    setTxts([...txts, txt]);
                    setTxt('');
                }}
            >
                Add
            </AddBtn>
            <_Ul>
                {txts.map((txt, index) => (
                    <div key={txt + index}>
                        <_Li>
                            {index + 1} {txt}
                        </_Li>
                        <hr />
                    </div>
                ))}
            </_Ul>
        </MainBox>
    );
}
