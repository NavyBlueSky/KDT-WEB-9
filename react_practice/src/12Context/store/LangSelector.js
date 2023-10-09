import MyContext from './lang-context';
import { useContext } from 'react';

export default function LanguageSelector() {
    //두번째 방법
    const value = useContext(MyContext);

    return (
        <div>
            <h2>언어: {value.language}</h2>
            <select value={value.language} onChange={(e) => value.setLanguage(e.target.value)}>
                <option value="ko">Korean</option>
                <option value="en">English</option>
            </select>
        </div>
    );
}
