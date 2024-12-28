import React from 'react'
import { useCounter } from '../store/use-counter'

export const CounterValue = () => {
    const count = useCounter((state) => state.count);

    console.log(count);
    
    return <div>Counter value is {count}</div>;
}
