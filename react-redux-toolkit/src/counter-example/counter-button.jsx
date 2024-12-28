import React from 'react'
import { useDispatch} from 'react-redux'
import { handleIncreaseCountAction } from '../store/slice/counter';
export const CounterButton = () => {

    const dispatch = useDispatch();

    const handleClick = ()=>{
        dispatch(handleIncreaseCountAction({
            id: 1,
            name : "babu"
        }));
    }

  return (
    <button onClick = {handleClick} style ={{fontWeight: 'bold'}}>Increase</button>
  )
}
