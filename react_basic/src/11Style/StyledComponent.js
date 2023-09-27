import styled from 'styled-components';

const _Boxone = styled.div`
    background-color: blue;
    width: 100px;
    height: 100px;
`;

//props를 이용하는 방법
const _Boxtwo = styled.div`
    background-color: ${(props) => props.color};
    width: 100px;
    height: 100px;
`;

// 상속받아서 이용하는 방법
const _Circle = styled(_Boxtwo)`
    // background-color: ${(props) => props.color};
    // width: 100px;
    // height: 100px;
    border-radius: 50%;
`;

// 기존태그를 이름만 바꿔서 사용하는 방법
const _Btn = styled.button`
    background-color: aqua;
    color: green;
    padding: 10px 14px;
    border-radius: 4px;
`;

//html태그에 옵션값을 넣는 방법
const _Input = styled.input.attrs({ required: true })`
    background-color: yellow;
`;

//중첩
const _Boxthree = styled.div`
    width: 200px;
    height: 200px;
    background-color: blueviolet;
    line-height: 200px;
    text-align: center;
    //다른 컴포넌트를 불러와서 사용
    ${_Input} {
        background-color: aliceblue;
    }

    p {
        color: white;
        font-weight: bold;
        &:hover {
            font-size: 30px;
        }
    }
`;

export default function StyledComponents() {
    return (
        <div>
            <_Boxthree>
                <p>Hello Styled</p>
                <_Input />
            </_Boxthree>
            {/* 
            <_Boxone as="header"></_Boxone>
            <_Boxtwo color={'red'} />
            <_Circle color={'green'} />
            <_Btn>버튼</_Btn>
            <_Btn as="a" href="https://www.naver.com">
                a태그
            </_Btn>
            <_Input />
            <_Input />
            <_Input />
            */}
            <_Input />
        </div>
    );
}
