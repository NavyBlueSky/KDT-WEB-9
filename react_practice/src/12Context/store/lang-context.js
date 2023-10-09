import { createContext, useState } from 'react';

const MyContext = createContext({
    language: '',
    abc: 0,
    setLanguage: () => {},
});

//provider
export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('ko');

    return <MyContext.Provider value={{ language, setLanguage }}>{children}</MyContext.Provider>;
}

export default MyContext;
