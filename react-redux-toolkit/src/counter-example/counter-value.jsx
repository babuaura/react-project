import React from 'react'
import { useSelector } from 'react-redux'

export const CounterValue = () => {

    const state = useSelector(state => state);
    const {count} = state
    console.log(state.count.countValue);
    
  return (
    <div> Counter Value is {state.count.countValue}</div>
  )
}
