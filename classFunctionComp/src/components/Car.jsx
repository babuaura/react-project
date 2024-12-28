import React from 'react'

const Car = (props) => {
    const text =`Hi, I am a ${props.carInfo.brand} Car and color ${props.carInfo.color}`;
  return (
    <div>{text}</div>
  )
}

export default Car