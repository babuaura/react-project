import React from 'react'
import './Header.css'
import styleBig from './Header.module.css'


export default function Heading() {
    const myStyle = {
        color: "red", 
        backgroundColor:"lightblue",
        padding: "100px"
    };
  return (
    <>    
        <h1 style ={myStyle}>Hello Styling</h1>
        <h1 className ={styleBig.bigBlue}>Hello Styling</h1>
        <p>Add a Littlr Styling</p>
    </>)
}
