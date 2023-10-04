import Jsx from './01Jsx/Jsx';
import Func from './02Func/Func';
// import Book from "./Book";
import RefSampleClass1 from './09Ref/RefSampleClass1';
import RefSampleClass2 from './09Ref/RefSampleClass2';
import RefSampleFunc1 from './09Ref/RefSampleFunc1';
import RefSampleFunc2 from './09Ref/RefSampleFunc2';
import SignUpForm from './10Hook/SignUpForm';
import UseCallback from './10Hook/UseCallback';
import UseReducer from './10Hook/UseReducer';
import SassComponent from './11Style/SassComponent';
import Style from './11Style/Style';
import StyledComponent from './11Style/StyledComponent';
import Header from './12Router/Header';
import Router from './12Router/Router';
import { Outlet } from 'react-router-dom';
import Form from './13Form/Form';
import MyContext from './14Context/store/lang-context';
import { useState } from 'react';
import LanguageSelector from './14Context/store/LangSelector';

function App() {
    const [language, setLanguage] = useState('ko');
    return (
        <>
            {/* ver 
            <Header />
            <Outlet />*/}
            <MyContext.Provider value={{ language: language, setLanguage: setLanguage }}>
                <LanguageSelector />
                {/*         
                <MyContext.Consumer>
                    {(value) => {
                        return (
                            <div>
                                <h2>현재 선택된 언어: {value.language}</h2>
                                <select value={value.language} onChange={(e) => value.setLanguage(e.target.value)}>
                                    <option value="ko">한국어</option>
                                    <option value="en">영어</option>
                                    <option value="jp">일본어</option>
                                </select>
                            </div>
                        );
                    }}
                </MyContext.Consumer> */}
            </MyContext.Provider>
        </>
    );
}

export default App;
