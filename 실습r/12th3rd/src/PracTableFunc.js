import { useState } from 'react';

export default function PracTableFunc() {
    const [status, setState] = useState({
        inputWriter: '',
        inputTitle: '',
        comments: [],
    });

    const onChange = (event) => {
        setState(() => ({ inputWriter: event.targert.value }));
    };

    const addComment = () => {
        const [status2, setState2] = useState({
            title: status.inputTitle,
            writer: status.inputWriter,
        });
    };

    setState(() => ({ comments: [...status.comments, status2], inputTitle: '', inputWriter: '' }));

    return (
        <>
            <form>
                <label htmlFor="writer">작성자 : </label>
                <input id="writer" type="text" value={newComment.inputWriter} onChange={(e) => onChange(e)} />
                <label htmlFor="title">제목 : </label>
                <input id="title" type="text" value={newcomment.inputTitle} onChange={(e) => setState({ inputTitle: e.target.value })} />
                <button type="button" onClick={addComment}>
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
                    {status.comments.map((value, indexx) => {
                        return (
                            <tr key={indexx}>
                                <td>{indexx + 1}</td>
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
