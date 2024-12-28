import { useContext } from "react";
import { GlobalContext } from "../../context";

export const ContextTextComponent = ()=>{

    const {theme, setTheme} = useContext(GlobalContext);

    // console.log(theme);

    return <h1 style = 
    {{
        fontSize : theme === "light" ? "50px" : "100px", 
        backgroundColor : theme === "light" ? "#fff" : "#000", 
        color: theme === "light" ? "blue" : "yellow" 
    }}>Hi Babu....</h1>;
};