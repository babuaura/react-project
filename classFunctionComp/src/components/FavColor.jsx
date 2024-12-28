import React from 'react'
import { useState } from 'react'

export default function FavColor() {
//   let color = 'Blue';
const [color, setColor] = useState('Blue');
    // function colorChange(){
        // if(color == 'Blue') setColor('Red');
        // if(color == 'Red') setColor('Blue');
    // }
  return (
    <>
        <h1>My Favorite color is {color}</h1>
        {/* <button onClick={()=> colorChange()}>Change</button> */}
        <button onClick={()=> {
            if(color =='Blue') setColor('Red')
            if(color =='Red') setColor('Blue')
        }}>Change color</button>
    </>
  )
}
