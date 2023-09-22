import { useState } from 'react';

export default function Prac5() {
    const [todos, setTodos] = useState([]); //할일목록
    const [inputTodo, setInputTodo] = useState(''); //input에 입력할 값

    const addTodo = () => {
        if (todos.length > 10) {
            alert('하지도 못할 거 그만 적으렴.');
        } else {
            if (inputTodo !== '') {
                const newTodo = {
                    id: Date.now(),
                    text: inputTodo,
                    checked: false,
                };
                setTodos(...todos, newTodo);
                setInputTodo('');
            }
        }
    };

    const toggleTodo = (id) => {
        console.log(id);
        setTodos(
            todos.map((todo) => {
                console.log();
                return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
            })
        );
    };

    const RemoveTodo = () => {
        console.log();
        const result = todos.filter((value) => value.checked === false);
        setTodos(result);
    };

    return (
        <>
            <input type="text" value={inputTodo} onChange={(e) => setInputTodo(e.target.value)} placeholder="할 일 작성..." />
            <button onClick={addTodo}>추가</button>
            <ul>
                {todos.map((todo) => {
                    return (
                        <li key={todo.id}>
                            <input type="checkbox" checked={todo.checked} onChange={() => toggleTodo(todo.id)} />
                            {todo.text}
                        </li>
                    );
                })}
            </ul>
            <button onClick={RemoveTodo}>완료된 할 일 삭제</button>
        </>
    );
}
