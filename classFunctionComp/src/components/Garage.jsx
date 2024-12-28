import React from 'react'
import Car from './Car'
import Apple from './Apple'
import Gun from './Gun1'

export default function Garage() {
    // const brand ='Ford';
    // const color ='Black';
    const isDoorOpened = false;
    const carList = [
        {brand :'Benz', color: 'Black'},
        {brand :'Jaguar', color: 'White'},
        {brand :'BMW', color: 'Red'},
        {brand :'Ford', color: 'Green'}
        ];
    // const carInfo = {};
    const appleInfo = {brand :'Apple', color: 'Black'};

  return (
    <>
        <h1>Garage Space</h1>
        <ul>
            {carList.map((carInfo)=> <li key ={carInfo.brand}><Car carInfo ={carInfo} /></li>)}
        </ul>
        {/* { carInfo.brand !== undefined && carInfo.color !== undefined ?
        <Car carInfo = {carInfo}/> : null } */}
        <Apple appleInfo ={appleInfo}/>
        <Gun />
        {isDoorOpened ? <h2>Garage Door is opened</h2> : <h2>Garage Door is closed</h2>}
    </>
  )
}
