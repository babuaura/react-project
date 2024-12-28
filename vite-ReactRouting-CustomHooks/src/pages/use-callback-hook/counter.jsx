import React, { memo } from 'react'

export const Counter = memo(({countValue, onClick}) => {

    console.log("this is Counter call",countValue, onClick);
    
  return (
    <div>
        <p>{countValue}</p>
        <button onClick={onClick}> Click</button>
    </div>
  )
});