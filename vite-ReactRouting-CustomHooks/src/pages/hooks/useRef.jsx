import React, { useEffect, useRef } from 'react'

export const Hooks = () => {

     const countValue = useRef(0);
     const refElement = useRef(0);
     const refInputName = useRef(0);

     const handleClick = () => {
        countValue.current++;
        console.log(countValue);
     }

     useEffect(() => {

        const divRef = refElement.current;
        refInputName.current.focus();
        console.log(divRef);

        divRef.style.color = "Red";

        setTimeout(()=>{
            divRef.style.color = "blue";
        },2000)
     },[])

  return (
    <div>
        <h2>Use ref, Use CallBack and Use Memo Hook</h2>
        <button onClick = {handleClick}>Click Me</button>
        <div ref = {refElement}>
            Some Random text
        </div>
        <input ref = {refInputName} name = "name" placeholder='Enter your name'/>

    </div>
 )
}
