import { createContext, useState } from 'react';

const MyContext2 = createContext({
    theme: '',
    abc: 0,
    setTheme: () => {},
});

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    return <MyContext2.Provider value={{ theme, setTheme }}>{children}</MyContext2.Provider>;
}

export default MyContext2;
