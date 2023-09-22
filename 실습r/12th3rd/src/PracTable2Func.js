import {
    useState
} from 'react';

export default function PracTable2Func() {
    const [status, setState] = useState({
        inputWriter: '',
        inputTitle: '',
        comments: [],
        inputSearch: '',
        searchType: 'title',
        results: [],
    });

    const onChange = (event) => {
        setState({
            inputWriter: event.target.value,
        });
    };

    const addComment = () => {
        const newComment = {
            writer: status.inputWriter,
            title: status.inputTitle,
        };
        setState(() => ({
            comments: [...status.comments, newComment],
            inputTitle: '',
            inputWriter: '',
        }));
    };

    const searchComment = () => {
        const searchResult = status.comments.filter((value) => {
            // console.log(value);
            console.log(value[status.searchType]);
            const type = value[status.searchType];
            const include = type.includes(status.inputSearch);
            if (!include) {
                return false;
            }
            return true;
        });
        setState({
            results: searchResult,
        });
    };
    return ( <
        >
        <
        form >
        <
        label htmlFor = "writer" > 작성자: < /label> <
        input id = "writer"
        type = "text"
        value = {
            inputWriter
        }
        onChange = {
            (e) => onChange(e)
        }
        /> <
        label htmlFor = "title" > 제목: < /label> <
        input id = "title"
        type = "text"
        value = {
            inputTitle
        }
        onChange = {
            (e) => setState({
                inputTitle: e.target.value
            })
        }
        /> <
        button type = "button"
        onClick = {
            addComment
        } >
        작성 <
        /button> <
        /form> <
        form > {
            /* onChange: input, textarea, select 값이 변경될때마다 발생하는 이벤트 핸들러 */ } <
        select value = {
            searchType
        }
        onChange = {
            (e) => setState({
                searchType: e.target.value
            })
        } >
        <
        option value = "writer" > 작성자 < /option> <
        option value = "title" > 제목 < /option> <
        /select> <
        input type = "text"
        placeholder = "검색어"
        value = {
            inputSearch
        }
        onChange = {
            (e) => setState({
                inputSearch: e.target.value
            })
        }
        /> <
        button type = "button"
        onClick = {
            searchComment
        } >
        검색 <
        /button> <
        /form> <
        table border = {
            1
        }
        cellSpacing = {
            0
        } >
        <
        thead >
        <
        tr >
        <
        th > 번호 < /th> <
        th > 제목 < /th> <
        th > 작성자 < /th> <
        /tr> <
        /thead> <
        tbody > {
            comments.map((value, index) => {
                return ( <
                    tr key = {
                        index
                    } >
                    <
                    td > {
                        index + 1
                    } < /td> <
                    td > {
                        value.title
                    } < /td> <
                    td > {
                        value.writer
                    } < /td> <
                    /tr>
                );
            })
        } <
        /tbody> <
        /table> <
        h4 > 검색결과 < /h4> <
        table border = {
            1
        }
        cellSpacing = {
            0
        } >
        <
        thead >
        <
        tr >
        <
        th > 번호 < /th> <
        th > 제목 < /th> <
        th > 작성자 < /th> <
        /tr> <
        /thead> <
        tbody > {
            results.map((value, index) => {
                return ( <
                    tr key = {
                        index
                    } >
                    <
                    td > {
                        index + 1
                    } < /td> <
                    td > {
                        value.title
                    } < /td> <
                    td > {
                        value.writer
                    } < /td> <
                    /tr>
                );
            })
        } <
        /tbody> <
        /table> <
        />
    );
}