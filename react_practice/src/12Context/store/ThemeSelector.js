import MyContext2 from './them-context';
import { useContext } from 'react';

export default function ThemeSelector() {
    const value = useContext(MyContext2);

    if (value.theme === 'light') {
    }

    return (
        <div>
            <h2>테마: {value.theme}</h2>
            <select value={value.theme} onChange={(e) => value.setTheme(e.target.value)}>
                <option value="lightgrey">라이트</option>
                <option value="black">다크</option>
            </select>
            <div style={{ backgroundColor: value.theme, width: '200px', height: '200px', border: 'red' }}></div>
        </div>
    );
}
