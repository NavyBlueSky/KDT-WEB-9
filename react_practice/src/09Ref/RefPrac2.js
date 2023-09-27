import { useRef, useState } from 'react';

export default function RefPrac2() {
    const [inputWriter, setInputWriter] = useState('');
    const [inputTitle, setInputTitle] = useState('');
    const [comments, setComments] = useState([]);

    const myInput = useRef();

    const onChange = (e) => {
        setInputWriter(e.target.value);
    };

    const addComment = () => {
        const newComment = {
            writer: inputWriter,
            title: inputTitle,
        };
        setComments([...comments, newComment]);
        setInputWriter('');
        setInputTitle('');
    };

    const handleFocus = () => {
        if (inputWriter === '' || inputTitle === '') {
            myInput.current.focus();
        } else {
            addComment();
        }
    };

    return (
        <>
            <form>
                <label htmlFor="writer">작성자:</label>
                {/* onChange: input, textarea, select 값이 변경될때마다 발생하는 이벤트 핸들러 */}
                <input ref={myInput} type="text" id="writer" value={inputWriter} onChange={(e) => onChange(e)} />
                <label htmlFor="title">제목:</label>
                <input ref={myInput} type="text" id="title" value={inputTitle} onChange={(e) => setInputTitle(e.target.value)} />
                <button type="button" onClick={handleFocus}>
                    작성
                </button>
            </form>
            <table border={1} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {/* [ {title, writer},{title, writer},{title, writer}... ] */}
                    {comments.map((value, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{value.title}</td>
                                <td>{value.writer}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}
