import React from 'react'
import { useState } from 'react'

export default function Scooter() {
// const [color, setColor] = useState('Red')
// const [brand, setBrand] = useState('Thunder Bird')
// const [model, setModel] = useState('350X')
// const [year, setYear] = useState('2024')

const [scooter, setScooter] = useState(
    {
        color: "Red",
        brand: "Thunder Bird",
        model: "350X",
        year: "2024"
    });

    function updateColor(){
        setScooter((prevScooterData) => { return {...prevScooterData, color: "White", model: "500"}});
    }
  return (
    <>
        <h1>My Scooter</h1>
        <p>Color: {scooter.color}</p>
        <p>Brand: {scooter.brand}</p>
        <p>Model: {scooter.model}</p>
        <p>Year: {scooter.year}</p>
        <button onClick={updateColor}>Change Data</button>
    </>  )
}
