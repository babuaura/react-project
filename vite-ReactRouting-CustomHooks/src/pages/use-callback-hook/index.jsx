import React, { useCallback, useState } from 'react'
// import Counter from './counter';
import { Counter } from './counter';

export const UseCallBack = () => {
  
    const [conuntOne, setCountOne] = useState(0);
    const [conuntTwo, setCountTwo] = useState(0);

    const memoCountOneSet = useCallback(() => setCountOne(conuntOne + 1), [conuntOne]);
    const memoCountTwoSet = useCallback(() => setCountTwo(conuntTwo + 1), [conuntTwo]);
  
    return (
    <div>
        <h1>UseCallBack</h1>
        <Counter countValue = {conuntOne} onClick = {memoCountOneSet}/>
        <Counter countValue = {conuntTwo} onClick = {memoCountTwoSet}/>
    </div>
  )
}
