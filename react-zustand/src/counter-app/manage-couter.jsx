import React from 'react'
import { useCounter } from '../store/use-counter'

export const ManageCounter = () => {

    const handleIncrementCount = useCounter(state=>state.handleIncrementCount);

   
  return (
    <button
    style={{
      marginBottom: "20px",
      background: "black",
      color: "white",
      fontSize: "18px",
      fontWeight: "bolder",
    }}
    onClick={handleIncrementCount}
  >
    Handle Counter Value
  </button>
  )
}
