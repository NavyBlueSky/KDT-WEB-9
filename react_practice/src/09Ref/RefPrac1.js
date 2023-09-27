import { Component } from 'react';

class RefPrac1 extends Component {
    constructor(props) {
        super(props);

        //state 초기화
        this.state = {
            inputWriter: '', //작성자
            inputTitle: '', //제목
            comments: [], //입력한 내용
        };
        //바인딩
        this.onChange = this.onChange.bind(this);
        this.addComment = this.addComment.bind(this);
    }

    onChange(e) {
        //console.log(e.target);
        this.setState({ inputWriter: e.target.value });
    }

    addComment() {
        const newComment = {
            writer: this.state.inputWriter,
            title: this.state.inputTitle,
        };
        if (this.state.inputTitle === '' || this.state.inputWriter === '') {
            this.handleFocus();
        } else {
            this.setState({
                comments: [...this.state.comments, newComment],
                inputTitle: '',
                inputWriter: '',
            });
        }
    }

    handleFocus = () => {
        this.myinput.focus();
    };

    render() {
        const { inputWriter, inputTitle, comments } = this.state;
        return (
            <>
                <form>
                    <label htmlFor="writer">작성자:</label>
                    {/* onChange: input, textarea, select 값이 변경될때마다 발생하는 이벤트 핸들러 */}
                    <input
                        ref={(ref) => {
                            this.myinput = ref;
                        }}
                        type="text"
                        id="writer"
                        value={inputWriter}
                        onChange={(e) => this.onChange(e)}
                    />
                    <label htmlFor="title">제목:</label>
                    <input
                        ref={(ref) => {
                            this.myinput = ref;
                        }}
                        type="text"
                        id="title"
                        value={inputTitle}
                        onChange={(e) => this.setState({ inputTitle: e.target.value })}
                    />
                    <button type="button" onClick={this.addComment}>
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
}

export default RefPrac1;
