import { useReducer } from "react";

const initalState = {
    showTextFlag: false,
    ChangeTextFlag: false
}

const HIDE_TEXT = "HIDE_TEXT";
const SHOW_TEXT = "SHOW_TEXT";
const CHANGE_TEXT = "CHANGE_TEXT";

const reducer = (state, action)=>{
    switch (action.type) {
        case HIDE_TEXT: return {...state, showTextFlag: false};
        case SHOW_TEXT: return {...state, showTextFlag: true};  
        case CHANGE_TEXT: return {...state, ChangeTextFlag: !state.ChangeTextFlag};
        default: return state;
    }
}
export const UseReducerExmaple =() => {
    
    const [state, dispatch] = useReducer(reducer, initalState);
    console.log(state);
    
    return (
        <>
            {
                state?.showTextFlag ? <h2 style = {{color : state?.ChangeTextFlag ? "#fff" : "yellow"}}>User Reducer Hook</h2> : null
            }
            <button onClick = { ()=> dispatch({type : "HIDE_TEXT"}) }>Hide</button>
            <button onClick = { ()=> dispatch({type : "SHOW_TEXT"}) }>Show</button>
            <button onClick = { ()=> dispatch({type : "CHANGE_TEXT"}) }>Change Text Styles</button>
        </>
    )
};