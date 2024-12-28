import { useContext } from "react";
import { GlobalContext } from "../../context";


export const ContextButtonComponent = ()=>{

    const {handleThemeOnButtonClick} = useContext(GlobalContext);    

    return <button onClick={ handleThemeOnButtonClick }>Change Theme</button>;
};