import React from 'react'

export default function Result(props) {
    let result = 'Guess the Number';

    if(props.data && props.data.guessNumber){
        if(props.data.secretNum < props.data.guessNumber) result  = 'Higher';
        else if(props.data.secretNum > props.data.guessNumber) result  = 'Lower';
        else if(props.data.secretNum == props.data.guessNumber) result  = 'Yipee!! Correct';
        else result = 'Enter valid Input';
    }
  
  return (
    <>
        <h3>You Gussed: {result}</h3>
    </>
)
}
