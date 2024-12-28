import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export const GlobalState = ({children}) => {

    const [theme, setTheme] = useState('light');

    const handleThemeOnButtonClick = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return <GlobalContext.Provider value ={{theme, handleThemeOnButtonClick}}>{children}</GlobalContext.Provider>;
};